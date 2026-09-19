import React from 'react';
import ArrowButton from '../Common/ArrowButton';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { handleImageError } from '../../utils/imageFallbacks';
import './About.css';

export default function About() {
  const revealRef = useScrollReveal();

  return (
    <section className="about-section section-padding" ref={revealRef}>
      <div className="container">
        {/* Top Editorial Split Header */}
        <div className="about-grid">
          {/* Left Column: Eyebrow Label & Index */}
          <div className="about-left-col reveal">
            <span className="eyebrow-label">ABOUT MALA ROLL FORMING</span>
            <span className="about-index-code">BAWANA SEC-3 // DELHI</span>
            <div className="about-accent-line"></div>
          </div>

          {/* Right Column: Heading, Narrative & CTA */}
          <div className="about-right-col">
            <h2 className="about-heading reveal delay-1">
              Pioneering Heavy-Duty<br />
              Roll Forming Technology.
            </h2>

            <div className="about-body-narrative reveal delay-2">
              <p className="lead-paragraph">
                Mala Roll Forming (Mala Engg. Works) is an established industrial machine manufacturer
                located at J-43, Sec-3, Bawana Industrial Area, Delhi-110039. We design and build heavy-duty,
                high-speed automatic roll forming lines, industrial sheet metal cutters, and specialized spring machines
                engineered for rolling shutter fabricators, false ceiling contractors, and warehouse racking manufacturers across India.
              </p>
              <p>
                Unlike machinery traders or resellers, every machine is fabricated and tested directly at our Bawana works.
                Using CNC-turned EN-31 / D3 vacuum-hardened rollers (60–62 HRC), rigid structural channel beds, heavy-duty
                drive gearboxes, and PLC touch-screen flying shears, our lines guarantee exact profile geometry, zero sheet
                scratching, and reliable 24×7 commercial production.
              </p>
            </div>

            <div className="about-cta-holder reveal delay-3">
              <ArrowButton to="/about" variant="textual">
                Discover Our Facility
              </ArrowButton>
            </div>
          </div>
        </div>

        {/* Large Architectural Framing Image Beside / Below */}
        <div className="about-media-banner reveal delay-2">
          <div className="about-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop"
              alt="Industrial roll forming machine manufacturing plant in Bawana Delhi"
              className="about-image"
              loading="lazy"
              onError={handleImageError}
            />
            <div className="about-image-caption">
              <span className="caption-tag">MANUFACTURING FACILITY</span>
              <span className="caption-desc">In-house CNC turning, roller hardening & heavy machine assembly — Bawana Industrial Area, Delhi</span>
            </div>
          </div>

          {/* 3 Ethos Pillars */}
          <div className="about-pillars">
            <div className="pillar-item">
              <span className="pillar-num">01</span>
              <h4 className="pillar-title">Hardened Tooling (EN-31 / D3)</h4>
              <p className="pillar-text">
                Tooling rollers precision-machined, vacuum heat-treated to 58–62 HRC, and hard-chrome plated for distortion-free profiles.
              </p>
            </div>
            <div className="pillar-item">
              <span className="pillar-num">02</span>
              <h4 className="pillar-title">Automated PLC Cutting</h4>
              <p className="pillar-text">
                Equipped with Schneider / Delta PLC systems and high-speed hydraulic flying shear, delivering ±1.0 mm cut accuracy.
              </p>
            </div>
            <div className="pillar-item">
              <span className="pillar-num">03</span>
              <h4 className="pillar-title">Direct Factory Support</h4>
              <p className="pillar-text">
                Full on-site commissioning, machine trial runs, operator training, and immediate spare parts supply from our Delhi facility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
