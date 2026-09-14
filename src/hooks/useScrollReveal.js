import { useEffect, useRef } from 'react';

/**
 * Custom hook to smoothly reveal elements as they enter the viewport.
 * Uses native IntersectionObserver and respects prefers-reduced-motion.
 */
export function useScrollReveal(options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (containerRef.current) {
        const elements = containerRef.current.querySelectorAll('.reveal');
        elements.forEach(el => el.classList.add('is-revealed'));
        containerRef.current.classList.add('is-revealed');
      }
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: options.threshold || 0.12,
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

    if (containerRef.current) {
      if (containerRef.current.classList.contains('reveal')) {
        observer.observe(containerRef.current);
      }
      const revealChildren = containerRef.current.querySelectorAll('.reveal');
      revealChildren.forEach(child => observer.observe(child));
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return containerRef;
}
