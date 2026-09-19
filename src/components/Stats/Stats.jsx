import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Stats.css';

function AnimatedCounter({ target, suffix = '', prefix = '', isVisible, duration = 1600 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = null;
    let animId;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      // Silky smooth easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));

      if (progress < 1) {
        animId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isVisible, target, duration]);

  return <span>{prefix}{count}{suffix}</span>;
}

const statsData = [
  {
    type: 'counter',
    target: 25,
    suffix: '+',
    label: 'Years Tooling Heritage',
    detail: 'Continuous machine building and precision roll tooling engineering in Delhi'
  },
  {
    type: 'counter',
    target: 500,
    suffix: '+',
    label: 'Machines Delivered',
    detail: 'High-output roll forming and sheet cutting lines commissioned pan-India'
  },
  {
    type: 'static',
    value: '60–62',
    label: 'HRC Roller Hardness',
    detail: 'Vacuum heat-treated EN-31 & D3 tooling rollers for scratch-free, long-life production'
  },
  {
    type: 'counter',
    target: 100,
    suffix: '%',
    label: 'In-House Manufacturing',
    detail: 'Complete CNC machining, assembly, and trial runs at our Bawana works'
  }
];

export default function Stats() {
  const revealRef = useScrollReveal();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = revealRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    // Initial check in case it is already in viewport
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
    } else {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [revealRef]);

  return (
    <section className="stats-section" ref={revealRef}>
      <div className="container">
        <div className="stats-strip">
          {statsData.map((stat, idx) => (
            <div key={idx} className={`stat-box reveal delay-${idx + 1}`}>
              <div className="stat-top-meta">
                <span className="stat-index">0{idx + 1} // METRIC</span>
              </div>
              <div className="stat-number">
                {stat.type === 'counter' ? (
                  <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    isVisible={isVisible}
                  />
                ) : (
                  <span>{stat.value}</span>
                )}
              </div>
              <div className="stat-label">{stat.label}</div>
              <p className="stat-detail">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
