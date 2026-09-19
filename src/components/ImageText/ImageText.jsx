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
                  alt="EN-31 hardened roll forming tooling rollers in Bawana Delhi"
                  className="editorial-image"
                  loading="lazy"
                  onError={handleImageError}
                />
                <div className="media-overlay"></div>
                <div className="image-meta-tag">
                  <span>TOOLING SPEC // EN-31 VACUUM HARDENED ROLLERS</span>
                </div>
              </div>
            </div>

            <div className="text-col reveal delay-2">
              <span className="eyebrow-label">TOOLING & DIE PRECISION</span>
              <h2 className="image-text-heading">
                Zero-Distortion Rollers Engineered From Certified EN-31 Steel
              </h2>
              <p className="image-text-paragraph">
                The heart of every roll forming machine is its tooling. At Mala Roll Forming, our rollers are
                precision CNC-turned in-house, vacuum heat-treated to 60–62 HRC, and finished with hard chrome
                plating. This eliminates profile bowing, edge twisting, or surface scratching even when running
                high-speed galvanized (GI), CR, or pre-painted sheet coils.
              </p>
              <div className="image-text-points">
                <div className="point-item">
                  <span className="point-num">01</span>
                  <span className="point-label">Progressive flower pattern stations preventing metal stretch & wrinkles</span>
                </div>
                <div className="point-item">
                  <span className="point-num">02</span>
                  <span className="point-label">60–62 HRC vacuum-hardened tooling rollers for 10+ years operational life</span>
                </div>
              </div>
              <div className="image-text-cta">
                <ArrowButton to="/services" variant="textual">
                  Explore Machinery Lines
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
              <span className="eyebrow-label">AUTOMATION & CHASSIS RIGIDITY</span>
              <h2 className="image-text-heading">
                Heavy Channel Beds & Flying Shear PLC Cut-Off Systems
              </h2>
              <p className="image-text-paragraph">
                We construct our roll forming machine chassis with thick structural channel beds and ground
                40Cr high-tensile shafts to prevent deflection during non-stop commercial shifts. Synchronized
                with Schneider / Delta PLC touchscreen panels and optical encoders, the hydraulic flying shear
                cuts profiles to exact millimeter lengths at full line speed without stopping.
              </p>
              <div className="image-text-points">
                <div className="point-item">
                  <span className="point-num">01</span>
                  <span className="point-label">PLC touch-screen panel with multi-order batch and length presets</span>
                </div>
                <div className="point-item">
                  <span className="point-num">02</span>
                  <span className="point-label">High-speed hydraulic flying cutter with ±1.0mm cutting accuracy</span>
                </div>
              </div>
              <div className="image-text-cta">
                <ArrowButton to="/about" variant="textual">
                  About Our Bawana Works
                </ArrowButton>
              </div>
            </div>

            <div className="image-col reveal delay-2">
              <div className="editorial-media-container">
                <img
                  src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=1200&auto=format&fit=crop"
                  alt="Industrial machinery assembly line at Mala Engg Works Bawana"
                  className="editorial-image"
                  loading="lazy"
                  onError={handleImageError}
                />
                <div className="media-overlay"></div>
                <div className="image-meta-tag">
                  <span>CHASSIS & AUTOMATION // 24x7 FACTORY RELIABILITY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
