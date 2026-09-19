import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Stats.css';

const statsData = [
  {
    value: '25+',
    label: 'Years Tooling Heritage',
    detail: 'Continuous machine building and precision roll tooling engineering in Delhi'
  },
  {
    value: '500+',
    label: 'Machines Delivered',
    detail: 'High-output roll forming and sheet cutting lines commissioned pan-India'
  },
  {
    value: '60-62',
    label: 'HRC Roller Hardness',
    detail: 'Vacuum heat-treated EN-31 & D3 tooling rollers for scratch-free, long-life production'
  },
  {
    value: '100%',
    label: 'In-House Manufacturing',
    detail: 'Complete CNC machining, assembly, and trial runs at our Bawana works'
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
