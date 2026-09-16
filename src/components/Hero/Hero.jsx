import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ArrowButton from '../Common/ArrowButton';
import { handleImageError } from '../../utils/imageFallbacks';
import './Hero.css';

const featuredProjects = [
  {
    id: 1,
    code: 'PROJ-01',
    name: 'Luleå Metallurgy Center / Phase IV',
    location: 'Luleå, Sweden',
    sector: 'Heavy Industry & Metallurgy',
    stat: '42,000 m²',
    statLabel: 'Clear-Span Volume',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
    tag: 'Flagship Commission'
  },
  {
    id: 2,
    code: 'PROJ-02',
    name: 'Bregenz Cantilever Terminal',
    location: 'Lake Constance, Austria',
    sector: 'Structural Cantilever Logistics',
    stat: '38 Meters',
    statLabel: 'Column-Free Cantilever',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop',
    tag: 'Structural Engineering'
  },
  {
    id: 3,
    code: 'PROJ-03',
    name: 'Gothenburg Cold-Rolled Assembly Node',
    location: 'Gothenburg, Sweden',
    sector: 'Automated Industrial Fabrication',
    stat: 'EN 1090-2 EXC4',
    statLabel: 'Quality Standard',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop',
    tag: 'Industrial Complex'
  }
];

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const slideTimerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  // Autoplay slides unless hovered
  useEffect(() => {
    if (isHovered) return;

    slideTimerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 6000);

    return () => clearInterval(slideTimerRef.current);
  }, [isHovered]);

  const currentProj = featuredProjects[activeSlide];

  return (
    <section className={`hero-banner ${isLoaded ? 'is-loaded' : ''}`}>
      {/* Blueprint Architectural Grid Background */}
      <div className="hero-grid-pattern" aria-hidden="true"></div>
      <div className="hero-ambient-glow" aria-hidden="true"></div>

      <div className="container hero-container">
        {/* Top Header Text Block */}
        <div className="hero-text-content">
          <div className="hero-eyebrow-wrap hero-animate-1">
            <div className="hero-status-tag">
              <span className="hero-radar-dot"></span>
              <span className="hero-radar-text">PRECISION STEEL & ARCHITECTURAL ENGINEERING</span>
            </div>
            <span className="hero-coords">ZURICH • STOCKHOLM • EST. 2011</span>
          </div>

          <h1 className="hero-title hero-animate-2">
            Engineering Ideas Into<br />
            <span className="hero-title-highlight">Lasting Monuments</span>
          </h1>

          <div className="hero-bottom-meta hero-animate-3">
            <p className="hero-description">
              We design and construct monumental structures, ultra-precision industrial facilities, and
              high-tensile steel architectures engineered to withstand a century of rigorous performance.
            </p>

            <div className="hero-actions hero-animate-4">
              <ArrowButton to="/projects" variant="solid">
                Explore Projects
              </ArrowButton>
              <Link to="/contact" className="hero-secondary-btn">
                <span>Request Consultation</span>
                <span className="btn-corner-accent"></span>
              </Link>
            </div>
          </div>
        </div>

        {/* Flagship Visual Showcase Frame */}
        <div
          className="hero-media-wrapper hero-animate-media"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Visual Image Frame */}
          <div className="hero-image-frame">
            {featuredProjects.map((item, index) => (
              <div
                key={item.id}
                className={`hero-slide-item ${index === activeSlide ? 'is-active' : ''}`}
                aria-hidden={index !== activeSlide}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="hero-image"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  onError={handleImageError}
                />
                <div className="hero-image-overlay"></div>
              </div>
            ))}

            {/* Corner Blueprint Markers */}
            <div className="hero-frame-corner top-left" aria-hidden="true">+</div>
            <div className="hero-frame-corner top-right" aria-hidden="true">+</div>
            <div className="hero-frame-corner bottom-left" aria-hidden="true">+</div>
            <div className="hero-frame-corner bottom-right" aria-hidden="true">+</div>

            {/* Floating Glassmorphic Spec Badge */}
            <div className="hero-floating-badge">
              <div className="badge-header">
                <span className="badge-live-pulse"></span>
                <span className="badge-code">{currentProj.code}</span>
                <span className="badge-tag-pill">{currentProj.tag}</span>
              </div>
              <h4 className="badge-proj-title">{currentProj.name}</h4>
              <div className="badge-meta-row">
                <span className="badge-location">{currentProj.location}</span>
                <span className="badge-divider">•</span>
                <span className="badge-metric"><strong>{currentProj.stat}</strong> {currentProj.statLabel}</span>
              </div>
            </div>

            {/* Slide Navigation Selectors */}
            <div className="hero-slide-controls">
              {featuredProjects.map((item, idx) => (
                <button
                  key={item.id}
                  className={`hero-slide-btn ${idx === activeSlide ? 'is-active' : ''}`}
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`View ${item.name}`}
                >
                  <div className="slide-btn-progress-track">
                    <div
                      className={`slide-btn-progress-fill ${idx === activeSlide && !isHovered ? 'is-animating' : ''}`}
                    ></div>
                  </div>
                  <div className="slide-btn-text">
                    <span className="slide-btn-num">0{idx + 1}</span>
                    <span className="slide-btn-title">{item.name.split('/')[0]}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Specifications Strip */}
          <div className="hero-quick-specs">
            <div className="quick-spec-item">
              <div className="spec-icon-wrap">
                <svg className="spec-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="spec-details">
                <span className="spec-label">PORTFOLIO</span>
                <span className="spec-val">150+ Megastructures Delivered</span>
              </div>
            </div>

            <div className="quick-spec-item">
              <div className="spec-icon-wrap">
                <svg className="spec-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div className="spec-details">
                <span className="spec-label">DESIGN LIFESPAN</span>
                <span className="spec-val">100+ Years Guaranteed</span>
              </div>
            </div>

            <div className="quick-spec-item">
              <div className="spec-icon-wrap">
                <svg className="spec-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div className="spec-details">
                <span className="spec-label">FABRICATION TOLERANCE</span>
                <span className="spec-val">±0.02 mm CNC Precision</span>
              </div>
            </div>

            <div className="quick-spec-item">
              <div className="spec-icon-wrap">
                <svg className="spec-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
              </div>
              <div className="spec-details">
                <span className="spec-label">MATERIAL CIRCULARITY</span>
                <span className="spec-val">98.4% Recycled Structural Steel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
