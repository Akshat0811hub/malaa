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
              <span className="eyebrow-label">DIRECT FACTORY INTAKE • BAWANA, DELHI</span>
              <span className="cta-spec-tag">LIVE TRIAL RUNS BEFORE DISPATCH</span>
            </div>

            <h2 className="cta-heading">
              Ready to Upgrade Your<br />
              Roll Forming Production?
            </h2>

            <p className="cta-lead">
              Contact Mala Roll Forming (Mala Engg. Works) today for direct manufacturer pricing,
              custom profile tooling designs, or to schedule a live machine demonstration at our Bawana works.
            </p>

            <div className="cta-button-group">
              <ArrowButton to="/contact" variant="outline">
                Request Factory Quote
              </ArrowButton>
              <ArrowButton to="/services" variant="textual">
                View All Machinery
              </ArrowButton>
            </div>

            {/* Micro Details */}
            <div className="cta-details-strip">
              <div className="cta-detail-item">
                <span className="detail-tag">FACTORY LOCATION</span>
                <span className="detail-value">J-43, Sec-3, Bawana Industrial Area, Delhi</span>
              </div>
              <div className="cta-detail-item">
                <span className="detail-tag">DIRECT CALL / WHATSAPP</span>
                <span className="detail-value">+91 9870262404 / 9868114107</span>
              </div>
              <div className="cta-detail-item">
                <span className="detail-tag">EMAIL DESK</span>
                <span className="detail-value">malaenggworks@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
