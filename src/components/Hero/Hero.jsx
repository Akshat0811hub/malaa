import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ArrowButton from '../Common/ArrowButton';
import { handleImageError } from '../../utils/imageFallbacks';
import './Hero.css';

const featuredProjects = [
  {
    id: 1,
    code: 'PROJ-01',
    name: 'Luleå Metallurgy Center & Clear-Span Hall',
    location: 'Luleå, Sweden',
    sector: 'Heavy Industry & Metallurgy',
    stat: '42,000 m²',
    statLabel: 'Clear-Span Volume',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2400&auto=format&fit=crop',
    tag: 'Flagship Commission'
  },
  {
    id: 2,
    code: 'PROJ-02',
    name: 'The Helix Parametric Pavilion & Vaults',
    location: 'Lake Constance, Austria',
    sector: 'Structural Cantilevers & Arches',
    stat: '38 Meters',
    statLabel: 'Column-Free Cantilever',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2400&auto=format&fit=crop',
    tag: 'Parametric Engineering'
  },
  {
    id: 3,
    code: 'PROJ-03',
    name: 'Stockholm High-Tensile Glass Monolith',
    location: 'Stockholm, Sweden',
    sector: 'Commercial & High-Rise Steel',
    stat: 'EN 1090-2 EXC4',
    statLabel: 'Quality Standard',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop',
    tag: 'Architectural Landmark'
  },
  {
    id: 4,
    code: 'PROJ-04',
    name: 'Gothenburg Cold-Rolled Assembly Node',
    location: 'Gothenburg, Sweden',
    sector: 'Robotic Fabrication Complex',
    stat: '±0.02 mm',
    statLabel: 'CNC Precision Tolerance',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2400&auto=format&fit=crop',
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
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Autoplay slides every 6 seconds unless hovered
  useEffect(() => {
    if (isHovered) return;

    slideTimerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 6000);

    return () => clearInterval(slideTimerRef.current);
  }, [isHovered]);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? featuredProjects.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const currentProj = featuredProjects[activeSlide];

  return (
    <section
      className={`hero-cinematic-banner ${isLoaded ? 'is-loaded' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Flagship Hero Showcase"
    >
      {/* Background Slides with Ken Burns and Multi-Stop Architectural Overlay */}
      <div className="hero-slides-viewport" aria-hidden="true">
        {featuredProjects.map((item, index) => (
          <div
            key={item.id}
            className={`hero-slide-bg ${index === activeSlide ? 'is-active' : ''}`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="hero-slide-img"
              loading={index === 0 ? 'eager' : 'lazy'}
              onError={handleImageError}
            />
          </div>
        ))}
        {/* Layered Architectural Scrim & Blueprint Grid */}
        <div className="hero-overlay-scrim"></div>
        <div className="hero-blueprint-grid"></div>
        <div className="hero-accent-glow"></div>
      </div>

      {/* Blueprint Corner Crosshairs */}
      <div className="hero-crosshair top-left" aria-hidden="true">+</div>
      <div className="hero-crosshair top-right" aria-hidden="true">+</div>
      <div className="hero-crosshair bottom-left" aria-hidden="true">+</div>
      <div className="hero-crosshair bottom-right" aria-hidden="true">+</div>

      {/* Main Banner Content Area */}
      <div className="container hero-banner-content">
        <div className="hero-banner-main-grid">
          {/* Left Column: Headlines, Branding, Description & CTAs */}
          <div className="hero-left-column">
            {/* Live Status Beacon & Coordinates */}
            <div className="hero-meta-badge hero-animate-1">
              <div className="hero-beacon-pill">
                <span className="hero-beacon-pulse"></span>
                <span className="hero-beacon-text">MALA ENGG. WORKS // ARCHITECTURAL & STRUCTURAL STEEL</span>
              </div>
              <span className="hero-coordinates">ZURICH • STOCKHOLM • EST. 2011</span>
            </div>

            {/* Monumental Headline */}
            <h1 className="hero-banner-title hero-animate-2">
              Engineering Visionary Ideas Into{' '}
              <span className="hero-title-highlight">Monumental Reality</span>
            </h1>

            {/* Crisp Description */}
            <p className="hero-banner-lead hero-animate-3">
              We design, engineer, and fabricate monumental architectures, column-free clear-spans,
              and high-tensile industrial facilities built to withstand a century of rigorous performance.
            </p>

            {/* Action Buttons */}
            <div className="hero-banner-actions hero-animate-4">
              <ArrowButton to="/projects" variant="light-solid" className="hero-btn-primary">
                Explore Projects
              </ArrowButton>
              <Link to="/contact" className="hero-btn-glass">
                <span>Request Consultation</span>
                <svg className="btn-arrow-svg" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Verification Trust Strip */}
            <div className="hero-trust-strip hero-animate-4">
              <div className="trust-item">
                <span className="trust-dot"></span>
                <span className="trust-label">EN 1090-2 EXC4 CERTIFIED</span>
              </div>
              <div className="trust-item">
                <span className="trust-dot"></span>
                <span className="trust-label">100-YEAR STRUCTURAL INTEGRITY</span>
              </div>
              <div className="trust-item">
                <span className="trust-dot"></span>
                <span className="trust-label">±0.02 MM CNC TOLERANCE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Active Project HUD Card */}
          <div className="hero-right-column hero-animate-media">
            <div className="hero-project-hud-card">
              <div className="hud-header">
                <div className="hud-tag-wrap">
                  <span className="hud-live-indicator"></span>
                  <span className="hud-code">{currentProj.code}</span>
                  <span className="hud-tag">{currentProj.tag}</span>
                </div>
                <span className="hud-slide-counter">
                  0{activeSlide + 1} / 0{featuredProjects.length}
                </span>
              </div>

              <h3 className="hud-title">{currentProj.name}</h3>

              <div className="hud-meta-grid">
                <div className="hud-meta-item">
                  <span className="hud-meta-label">LOCATION</span>
                  <span className="hud-meta-value">{currentProj.location}</span>
                </div>
                <div className="hud-meta-item">
                  <span className="hud-meta-label">SECTOR</span>
                  <span className="hud-meta-value">{currentProj.sector}</span>
                </div>
                <div className="hud-meta-item hud-meta-highlight">
                  <span className="hud-meta-label">{currentProj.statLabel.toUpperCase()}</span>
                  <span className="hud-meta-value hud-stat-number">{currentProj.stat}</span>
                </div>
              </div>

              <div className="hud-action-row">
                <Link to="/projects" className="hud-explore-link">
                  <span>View Project Case Study</span>
                  <svg viewBox="0 0 14 14" fill="none" className="hud-link-arrow">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Slider Navigation Bar */}
            <div className="hero-slider-nav-bar">
              <div className="slider-nav-arrows">
                <button
                  type="button"
                  className="slider-arrow-btn"
                  onClick={handlePrevSlide}
                  aria-label="Previous Project"
                >
                  <svg viewBox="0 0 16 16" fill="none">
                    <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="slider-arrow-btn"
                  onClick={handleNextSlide}
                  aria-label="Next Project"
                >
                  <svg viewBox="0 0 16 16" fill="none">
                    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              {/* Progress Slide Selectors */}
              <div className="slider-nav-tabs">
                {featuredProjects.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`slider-tab-btn ${idx === activeSlide ? 'is-active' : ''}`}
                    onClick={() => setActiveSlide(idx)}
                    aria-label={`Switch to ${item.name}`}
                  >
                    <div className="tab-progress-track">
                      <div
                        className={`tab-progress-fill ${idx === activeSlide && !isHovered ? 'is-running' : ''}`}
                      ></div>
                    </div>
                    <div className="tab-label-row">
                      <span className="tab-number">0{idx + 1}</span>
                      <span className="tab-name">{item.name.split(' ')[0]}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Integrated Architecture Metrics HUD Strip */}
      <div className="hero-bottom-specs-strip">
        <div className="container specs-container">
          <div className="spec-metric-card">
            <div className="spec-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="spec-text-block">
              <span className="spec-metric-number">150+</span>
              <span className="spec-metric-label">Megastructures Realized</span>
            </div>
          </div>

          <div className="spec-metric-card">
            <div className="spec-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <div className="spec-text-block">
              <span className="spec-metric-number">100+ Yrs</span>
              <span className="spec-metric-label">Engineered Durability</span>
            </div>
          </div>

          <div className="spec-metric-card">
            <div className="spec-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div className="spec-text-block">
              <span className="spec-metric-number">±0.02 mm</span>
              <span className="spec-metric-label">CNC Machining Precision</span>
            </div>
          </div>

          <div className="spec-metric-card">
            <div className="spec-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
            </div>
            <div className="spec-text-block">
              <span className="spec-metric-number">98.4%</span>
              <span className="spec-metric-label">Circular Recycled Steel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
