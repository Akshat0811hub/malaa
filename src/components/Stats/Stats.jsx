import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Stats.css';

const statsData = [
  {
    value: '15+',
    label: 'Years Experience',
    detail: 'Continuous operational excellence across heavy civil & metallurgy sectors'
  },
  {
    value: '120+',
    label: 'Projects Completed',
    detail: 'Major structural frameworks engineered and erected on schedule'
  },
  {
    value: '35+',
    label: 'Industrial Clients',
    detail: 'Partnerships with Europe’s leading manufacturing conglomerates'
  },
  {
    value: '08',
    label: 'Countries Served',
    detail: 'Cross-border engineering offices and active fabrication sites'
  }
];

export default function Stats() {
  const revealRef = useScrollReveal();

  return (
    <section className="stats-section" ref={revealRef}>
      <div className="container">
        <div className="stats-strip">
          {statsData.map((stat, idx) => (
            <div key={idx} className={`stat-box reveal delay-${idx + 1}`}>
              <div className="stat-top-meta">
                <span className="stat-index">0{idx + 1} // METRIC</span>
              </div>
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <p className="stat-detail">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
