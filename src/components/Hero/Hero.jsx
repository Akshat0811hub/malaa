import React, { useState, useEffect } from 'react';
import ArrowButton from '../Common/ArrowButton';
import { handleImageError } from '../../utils/imageFallbacks';
import './Hero.css';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger smooth fade and subtle entrance
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`hero-section ${isLoaded ? 'is-loaded' : ''}`}>
      <div className="container hero-container">
        {/* Top Text Content */}
        <div className="hero-text-content">
          <div className="hero-eyebrow-wrap hero-animate-1">
            <span className="eyebrow-label">ENGINEERING & INDUSTRIAL ARCHITECTURE</span>
            <span className="hero-sub-code">EST. 2011 — ZURICH / STOCKHOLM</span>
          </div>

          <h1 className="hero-title hero-animate-2">
            Building Ideas Into<br />
            Lasting Structures
          </h1>

          <div className="hero-bottom-meta hero-animate-3">
            <p className="hero-description">
              We engineer monolithic structures, high-precision industrial facilities, and
              cutting-edge architectural systems designed to withstand decades of rigorous performance.
            </p>

            <div className="hero-actions hero-animate-4">
              <ArrowButton to="/projects" variant="solid">
                Explore Projects
              </ArrowButton>
              <ArrowButton to="/about" variant="textual">
                Our Philosophy
              </ArrowButton>
            </div>
          </div>
        </div>

        {/* Hero Architectural Visual Showcase */}
        <div className="hero-media-wrapper hero-animate-media">
          <div className="hero-image-frame">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
              alt="Minimalist architectural concrete and steel structure"
              className="hero-image"
              loading="eager"
              onError={handleImageError}
            />
            <div className="hero-image-overlay"></div>
            <div className="hero-image-badge">
              <span className="badge-tag">PROJECT SPECIFICATION</span>
              <span className="badge-name">Luleå Metallurgy Center / Phase IV</span>
            </div>
          </div>

          {/* Floating Subtle Stats Strip */}
          <div className="hero-quick-specs">
            <div className="quick-spec-item">
              <span className="spec-label">SECTOR</span>
              <span className="spec-val">Heavy Industry & Structural</span>
            </div>
            <div className="quick-spec-item">
              <span className="spec-label">STRUCTURAL LIFE</span>
              <span className="spec-val">100+ Years Projected</span>
            </div>
            <div className="quick-spec-item">
              <span className="spec-label">SUSTAINABILITY</span>
              <span className="spec-val">98.4% Recycled Structural Steel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
