import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Process.css';

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    tagline: 'Site & Geotechnical Diagnostics',
    description: 'Deep structural assessment, geophysical subsurface analysis, structural payload modeling, and rigorous environmental stress auditing.'
  },
  {
    number: '02',
    title: 'Design',
    tagline: 'Parametric Engineering & Tolerances',
    description: 'Iterative algorithmic load simulations, BIM Level 3 synchronization, seismic resistance optimization, and structural member dimensioning.'
  },
  {
    number: '03',
    title: 'Develop',
    tagline: 'Robotic Metallurgy Fabrication',
    description: 'Robotic precision beam milling, submerged-arc automated welding, ultrasonic non-destructive joint verification, and protective alloy cladding.'
  },
  {
    number: '04',
    title: 'Deliver',
    tagline: 'On-Site Erection & Handover',
    description: 'Synchronized modular crane logistics, real-time laser alignment tracking, lifecycle monitoring sensor integration, and commissioning.'
  }
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const revealRef = useScrollReveal();

  return (
    <section className="process-section section-padding" ref={revealRef}>
      <div className="container">
        <SectionTitle
          tagline="OUR APPROACH"
          title="Methodical Execution From Concept to Erection"
          description="A systematic four-phase framework honed over 15 years to guarantee zero variance, absolute structural safety, and timeline precision."
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
