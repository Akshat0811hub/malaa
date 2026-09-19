import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Process.css';

const processSteps = [
  {
    number: '01',
    title: 'Flower Pattern & CAD Design',
    tagline: 'Section Geometry & Station Calculation',
    description: 'We calculate exact strip width, metal springback, and progressive station-by-station forming angles based on sheet material (GI, CR, HR, or Stainless Steel).'
  },
  {
    number: '02',
    title: 'CNC Turning & EN-31 Hardening',
    tagline: 'Vacuum Heat Treatment & Hard Chrome Finish',
    description: 'Tooling rollers are precision CNC-turned from certified EN-31 / D3 alloy die steel, vacuum-hardened to 60–62 HRC, and mirror-finished with hard chrome plating.'
  },
  {
    number: '03',
    title: 'Heavy Chassis & Gearbox Drive',
    tagline: 'Solid Machined Housings & Rigid Frame',
    description: 'Rollers are mounted on high-grade ground shafts with heavy cast iron or steel stands, powered by reduction gearboxes or heavy-pitch industrial roller chains.'
  },
  {
    number: '04',
    title: 'Live Coil Trial & Dispatch',
    tagline: 'Flying Shear Calibration & Testing',
    description: 'Every machine undergoes live coil trials at our Bawana works to verify profile dimensional tolerance (±0.5mm) and burr-free flying cut before pan-India dispatch.'
  }
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const revealRef = useScrollReveal();

  return (
    <section className="process-section section-padding" ref={revealRef}>
      <div className="container">
        <SectionTitle
          tagline="MANUFACTURING WORKFLOW"
          title="Engineered For Flawless Profile Forming"
          description="Our methodical 4-stage manufacturing process guarantees precision profile geometry, scratch-free finishes, and reliable long-term production."
          className="reveal"
        />

        <div className="process-list">
          {processSteps.map((step, idx) => (
            <div
              key={step.number}
              className={`process-item reveal delay-${idx + 1} ${activeStep === idx ? 'process-item--active' : ''}`}
              onMouseEnter={() => setActiveStep(idx)}
            >
              <div className="process-item-top">
                <div className="process-index-wrap">
                  <span className="process-num">{step.number}</span>
                  <span className="process-separator">—</span>
                  <h3 className="process-step-title">{step.title}</h3>
                </div>
                <span className="process-step-tagline">{step.tagline}</span>
              </div>

              {/* Dynamic expanding horizontal rule on hover */}
              <div className="process-progress-track">
                <div className="process-progress-bar"></div>
              </div>

              <div className="process-item-content">
                <p className="process-desc">{step.description}</p>
                <div className="process-step-metrics">
                  <span className="step-metric-badge">PHASE 0{idx + 1} // PROTOCOL CERTIFIED</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
