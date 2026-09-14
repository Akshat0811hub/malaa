import React from 'react';
import ArrowButton from '../Common/ArrowButton';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './CTA.css';

export default function CTA() {
  const revealRef = useScrollReveal();

  return (
    <section className="cta-section section-padding" ref={revealRef}>
      <div className="container">
        <div className="cta-box reveal">
          <div className="cta-box-inner">
            <div className="cta-eyebrow">
              <span className="eyebrow-label">COMMENCE COLLABORATION</span>
              <span className="cta-spec-tag">CONFIDENTIAL RFP & DESIGN INTAKE</span>
            </div>

            <h2 className="cta-heading">
              Let's Build Something<br />
              Remarkable.
            </h2>

            <p className="cta-lead">
              From exploratory engineering feasibility through to turnkey fabrication and high-risk
              assembly, our partners work directly with senior structural directors.
            </p>

            <div className="cta-button-group">
              <ArrowButton to="/contact" variant="outline">
                Get In Touch
              </ArrowButton>
              <ArrowButton to="/projects" variant="textual">
                View Project Index
              </ArrowButton>
            </div>

            {/* Micro Details */}
            <div className="cta-details-strip">
              <div className="cta-detail-item">
                <span className="detail-tag">AVERAGE RESPONSE TIME</span>
                <span className="detail-value">&lt; 24 Hours via Zurich Studio</span>
              </div>
              <div className="cta-detail-item">
                <span className="detail-tag">STANDARD SPECIFICATION</span>
                <span className="detail-value">Eurocode 3 & SIA 263 Compliant</span>
              </div>
              <div className="cta-detail-item">
                <span className="detail-tag">DIRECT INTAKE DESK</span>
                <span className="detail-value">+41 44 289 1100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
