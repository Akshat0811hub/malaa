import React, { useEffect, useRef } from 'react';
import SectionTitle from '../Common/SectionTitle';
import './Timeline.css';

const milestonesData = [
  {
    year: '2000',
    era: 'THE FOUNDATION',
    title: 'Tooling & Die Engineering in Delhi',
    desc: 'Started operations as specialized roll tooling engineers, calculating progressive flower patterns and fabricating vacuum-hardened roller sets for Delhi sheet metal and rolling shutter fabricators.',
    badge: 'EN-31 Tooling Origin',
    metric: '±0.02 mm Precision'
  },
  {
    year: '2008',
    era: 'INFRASTRUCTURE EXPANSION',
    title: 'Flagship Bawana Works Established',
    desc: 'Established our flagship manufacturing and machine assembly works at J-43, Sec-3, Bawana Industrial Area, Delhi. Transitioned into complete turn-key automated roll forming machinery lines.',
    badge: 'Bawana Flagship Facility',
    metric: 'Heavy Channel Chassis'
  },
  {
    year: '2014',
    era: 'TECHNICAL BREAKTHROUGH',
    title: 'Ceiling Profile & T-Grid Rotary Line',
    desc: 'Engineered high-speed false ceiling intermediate/perimeter channel machines and continuous rotary stitching T-Grid systems with automated end-clip insertion, delivering up to 25 m/min output.',
    badge: 'Rotary Stitching System',
    metric: '25 m/min Continuous Line'
  },
  {
    year: '2019',
    era: 'AUTOMATION & DIGITAL CONTROLS',
    title: 'Automated Flying Shear & PLC Integration',
    desc: 'Integrated synchronized hydraulic flying cutoff technology and Schneider / Delta PLC touchscreens. Profiles cut with millimeter precision without stopping line motion, reducing operator manual intervention.',
    badge: 'PLC Flying Shear',
    metric: '±1.0 mm Cutting Accuracy'
  },
  {
    year: '2026',
    era: 'PAN-INDIA FOOTPRINT',
    title: '500+ Industrial Lines Running Nationwide',
    desc: 'Over 500+ Mala roll forming lines actively operating across Delhi NCR, Gujarat, Maharashtra, Rajasthan, UP, Haryana, Punjab, and South Indian industrial manufacturing belts with direct factory support.',
    badge: 'Direct Manufacturer Trust',
    metric: '500+ Industrial Lines'
  }
];

export default function Timeline() {
  const containerRef = useRef(null);
  const fillRef = useRef(null);
  const headRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const fillEl = fillRef.current;
    const headEl = headRef.current;
    if (!container || !fillEl || !headEl) return;

    // 1. High-Performance IntersectionObserver for milestone activation
    const milestoneItems = container.querySelectorAll('.timeline-milestone-item');
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -25% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-active');
        } else {
          // Deactivate only when scrolled significantly back up
          const rect = entry.boundingClientRect;
          if (rect.top > window.innerHeight * 0.72) {
            entry.target.classList.remove('is-active');
          }
        }
      });
    }, observerOptions);

    milestoneItems.forEach((item) => observer.observe(item));

    // 2. 100% GPU-accelerated Transform for Line & Glow Head (Zero Layout Reflow)
    let rafId = null;

    const updateSpine = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only calculate if in or near viewport
      if (rect.bottom >= -100 && rect.top <= windowHeight + 100) {
        const triggerPoint = windowHeight * 0.65;
        const scrollDistance = triggerPoint - rect.top;
        const totalDistance = rect.height;

        let ratio = scrollDistance / totalDistance;
        ratio = Math.max(0, Math.min(1, ratio));

        // GPU composite scaleY (no reflow)
        fillEl.style.transform = `scaleY(${ratio})`;

        // GPU composite translate3d for the leading head
        const headY = ratio * totalDistance;
        headEl.style.transform = `translate3d(-50%, ${headY}px, 0)`;
        headEl.style.opacity = ratio > 0.01 ? '1' : '0';
      }
      rafId = null;
    };

    const handleScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateSpine);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    if (window.__lenis) {
      window.__lenis.on('scroll', handleScroll);
    }
    updateSpine();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (window.__lenis) {
        window.__lenis.off('scroll', handleScroll);
      }
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="timeline-section section-padding">
      <div className="container">
        <SectionTitle
          tagline="COMPANY TIMELINE"
          title="Two Decades of Machinery Engineering Excellence"
          description="Follow our progression from specialized roll tooling craftsmanship into Delhi's leading manufacturer of heavy-duty industrial roll forming lines."
          className="reveal"
        />

        <div className="timeline-interactive-wrapper" ref={containerRef}>
          {/* Central Vertical Spine */}
          <div className="timeline-spine-track">
            {/* GPU-Accelerated Glowing Active Fill Line */}
            <div className="timeline-spine-fill" ref={fillRef}></div>
            {/* Independent GPU-Accelerated Leading Glow Head */}
            <div className="timeline-spine-glow-head" ref={headRef}></div>
          </div>

          {/* Milestones List */}
          <div className="timeline-milestones-list">
            {milestonesData.map((m, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={m.year}
                  className={`timeline-milestone-item ${isEven ? 'item--even' : 'item--odd'}`}
                >
                  {/* Central Node Indicator */}
                  <div className="timeline-node-holder">
                    <div className="timeline-node-circle">
                      <span className="node-center-dot"></span>
                      <span className="node-pulse-ring"></span>
                    </div>
                  </div>

                  {/* Horizontal Connector Line */}
                  <div className="timeline-connector-line"></div>

                  {/* Content Card */}
                  <div className="timeline-content-card">
                    <div className="card-eyebrow-row">
                      <span className="card-era-badge">{m.era}</span>
                      <div className="card-year-pill">
                        <span className="year-number">{m.year}</span>
                      </div>
                    </div>

                    <h3 className="card-milestone-title">{m.title}</h3>
                    <p className="card-milestone-desc">{m.desc}</p>

                    <div className="card-tags-footer">
                      <span className="card-metric-tag">
                        <span className="tag-icon">⚡</span>
                        <span>{m.metric}</span>
                      </span>
                      <span className="card-badge-pill">{m.badge}</span>
                    </div>

                    <div className="card-status-bar"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
