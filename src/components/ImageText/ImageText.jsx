import React from 'react';
import ArrowButton from '../Common/ArrowButton';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { handleImageError } from '../../utils/imageFallbacks';
import './ImageText.css';

export default function ImageText() {
  const revealRef = useScrollReveal();

  return (
    <div className="image-text-wrapper" ref={revealRef}>
      {/* Row 1: Image Left | Text Right */}
      <section className="image-text-row image-text-row--img-left section-padding">
        <div className="container">
          <div className="image-text-grid">
            <div className="image-col reveal">
              <div className="editorial-media-container">
                <img
                  src="https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1200&auto=format&fit=crop"
                  alt="Heavy structural steel assembly in fabrication plant"
                  className="editorial-image"
                  loading="lazy"
                  onError={handleImageError}
                />
                <div className="media-overlay"></div>
                <div className="image-meta-tag">
                  <span>FACILITY SPEC 09 // HIGH-TENSILE ALLOY MILL</span>
                </div>
              </div>
            </div>

            <div className="text-col reveal delay-2">
              <span className="eyebrow-label">METALLURGY & PRODUCTION</span>
              <h2 className="image-text-heading">
                Extreme Resilience Under Rigorous Loads
              </h2>
              <p className="image-text-paragraph">
                Our specialized fabrication facilities process structural grades up to S690QL,
                delivering load capacities 40% higher than standard structural steel. Every member
                is shaped using automated multi-axis plasma cutting and stress-relieved via
                programmable thermal cycles.
              </p>
              <div className="image-text-points">
                <div className="point-item">
                  <span className="point-num">01</span>
                  <span className="point-label">Full ultrasonic non-destructive weld testing</span>
                </div>
                <div className="point-item">
                  <span className="point-num">02</span>
                  <span className="point-label">Certified EN 1090-2 Execution Class 4 compliance</span>
                </div>
              </div>
              <div className="image-text-cta">
                <ArrowButton to="/services" variant="textual">
                  Fabrication Protocols
                </ArrowButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Row 2: Text Left | Image Right */}
      <section className="image-text-row image-text-row--img-right section-padding">
        <div className="container">
          <div className="image-text-grid">
            <div className="text-col reveal">
              <span className="eyebrow-label">CIRCULAR ENGINEERING</span>
              <h2 className="image-text-heading">
                Decarbonized Architecture & Modular Assembly
              </h2>
              <p className="image-text-paragraph">
                Structural longevity is the ultimate sustainability strategy. By combining
                fossil-free steel fabrication with reversible mechanical fastening systems,
                our facilities can be reconfigured, expanded, or completely demounted and
                recycled at the conclusion of their operational lifespan.
              </p>
              <div className="image-text-points">
                <div className="point-item">
                  <span className="point-num">01</span>
                  <span className="point-label">68% reduction in embodied structural carbon</span>
                </div>
                <div className="point-item">
                  <span className="point-num">02</span>
                  <span className="point-label">100% reversible bolt-joint engineering</span>
                </div>
              </div>
              <div className="image-text-cta">
                <ArrowButton to="/about" variant="textual">
                  Sustainability Ethos
                </ArrowButton>
              </div>
            </div>

            <div className="image-col reveal delay-2">
              <div className="editorial-media-container">
                <img
                  src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=1200&auto=format&fit=crop"
                  alt="Modern architectural concrete and steel interior geometry"
                  className="editorial-image"
                  loading="lazy"
                  onError={handleImageError}
                />
                <div className="media-overlay"></div>
                <div className="image-meta-tag">
                  <span>CIRCULAR FRAMEWORK // ISO 14044 VALIDATED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
