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
            <span className="eyebrow-label">ABOUT US</span>
            <span className="about-index-code">CHAPTER 01 // PRINCIPLES</span>
            <div className="about-accent-line"></div>
          </div>

          {/* Right Column: Heading, Narrative & CTA */}
          <div className="about-right-col">
            <h2 className="about-heading reveal delay-1">
              Built on precision,<br />
              driven by innovation.
            </h2>

            <div className="about-body-narrative reveal delay-2">
              <p className="lead-paragraph">
                For more than fifteen years, MALAA has bridged the boundary between heavy industrial
                capabilities and rigorous architectural minimalism. We engineer structural solutions
                where every millimetre serves an intentional structural and functional purpose.
              </p>
              <p>
                From massive metallurgy manufacturing plants in Northern Sweden to parametric civic
                complexes across Central Europe, our interdisciplinary teams of structural engineers,
                material metallurgists, and digital fabricators deliver uncompromising durability.
              </p>
            </div>

            <div className="about-cta-holder reveal delay-3">
              <ArrowButton to="/about" variant="textual">
                Discover More
              </ArrowButton>
            </div>
          </div>
        </div>

        {/* Large Architectural Framing Image Beside / Below */}
        <div className="about-media-banner reveal delay-2">
          <div className="about-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop"
              alt="Industrial steel framing and architectural precision"
              className="about-image"
              loading="lazy"
              onError={handleImageError}
            />
            <div className="about-image-caption">
              <span className="caption-tag">PRECISION FABRICATION</span>
              <span className="caption-desc">High-grade structural steel tolerance verification — Gotthard Logistics Terminal</span>
            </div>
          </div>

          {/* 3 Ethos Pillars */}
          <div className="about-pillars">
            <div className="pillar-item">
              <span className="pillar-num">01</span>
              <h4 className="pillar-title">Micron Precision</h4>
              <p className="pillar-text">
                Every beam, junction, and weld undergoes algorithmic stress testing and laser-guided robotic tolerances.
              </p>
            </div>
            <div className="pillar-item">
              <span className="pillar-num">02</span>
              <h4 className="pillar-title">Pure Materiality</h4>
              <p className="pillar-text">
                Uncompromising commitment to authentic materials: hot-rolled steel, exposed cast concrete, and low-carbon alloys.
              </p>
            </div>
            <div className="pillar-item">
              <span className="pillar-num">03</span>
              <h4 className="pillar-title">Enduring Longevity</h4>
              <p className="pillar-text">
                Built to resist extreme environmental variations with lifecycle projections spanning beyond a century.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
