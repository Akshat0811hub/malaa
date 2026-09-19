import { useEffect, useRef } from 'react';

/**
 * Custom hook to smoothly reveal elements as they enter the viewport.
 * Features instant detection on mount for above-the-fold content,
 * uses native IntersectionObserver and respects prefers-reduced-motion.
 */
export function useScrollReveal(options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const selector = '.reveal, .reveal-fade, .reveal-scale';

    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (container.matches(selector)) {
        container.classList.add('is-revealed');
      }
      const elements = container.querySelectorAll(selector);
      elements.forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: options.threshold || 0.08,
      ...options
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const observeElement = (el) => {
      if (!el || !(el instanceof Element)) return;
      if (el.classList.contains('is-revealed')) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight - 20 && rect.bottom > 0) {
        el.classList.add('is-revealed');
      } else {
        observer.observe(el);
      }
    };

    if (container.matches(selector)) {
      observeElement(container);
    }
    container.querySelectorAll(selector).forEach(observeElement);

    // Watch for dynamically added DOM elements (filtering, tabs, etc.)
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === 1) {
            if (node.matches && node.matches(selector)) {
              observeElement(node);
            }
            if (node.querySelectorAll) {
              node.querySelectorAll(selector).forEach(observeElement);
            }
          }
        });
      });
    });

    mutationObserver.observe(container, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return containerRef;
}
