import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ArrowButton from '../Common/ArrowButton';
import { handleImageError } from '../../utils/imageFallbacks';
import './Hero.css';

const bannerSlides = [
  {
    id: 1,
    title: 'Luleå Metallurgy Center',
    subtitle: 'Clear-Span Architecture // Sweden',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2400&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Gothenburg Assembly Complex',
    subtitle: 'Structural Steel Engineering // Sweden',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Stockholm Tower & Monolith',
    subtitle: 'High-Tensile Glass & Steel // Sweden',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop'
  }
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  // Autoplay slides smoothly
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 6000);

    return () => clearInterval(timerRef.current);
  }, []);

  const current = bannerSlides[activeSlide];

  return (
    <section className={`hero-banner-simple ${isLoaded ? 'is-loaded' : ''}`}>
      {/* Background Architectural Photography Carousel */}
      <div className="hero-banner-bg-wrapper">
        {bannerSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-banner-slide ${index === activeSlide ? 'is-active' : ''}`}
            aria-hidden={index !== activeSlide}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="hero-banner-img"
              loading={index === 0 ? 'eager' : 'lazy'}
              onError={handleImageError}
            />
          </div>
        ))}
        {/* Soft, Velvety Dark Scrim */}
        <div className="hero-banner-scrim"></div>
      </div>

      {/* Main Banner Content */}
      <div className="container hero-banner-container">
        <div className="hero-banner-text">
          <span className="hero-banner-eyebrow hero-animate-1">
            MALA ENGG. WORKS • EST. 2011
          </span>

          <h1 className="hero-banner-heading hero-animate-2">
            Engineering Ideas Into<br />
            <span>Lasting Structures</span>
          </h1>

          <p className="hero-banner-description hero-animate-3">
            We conceive, engineer, and construct monumental structures, 
            high-precision steel facilities, and enduring architectural landmarks.
          </p>

          <div className="hero-banner-buttons hero-animate-4">
            <ArrowButton to="/projects" variant="light-solid" className="hero-primary-btn">
              Explore Projects
            </ArrowButton>
            <Link to="/contact" className="hero-outline-btn">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Minimal Bottom Info & Slide Indicators */}
        <div className="hero-banner-footer hero-animate-4">
          {/* Subtle Slide Indicators */}
          <div className="hero-slide-dots">
            {bannerSlides.map((slide, idx) => (
              <button
                key={slide.id}
                className={`hero-dot-btn ${idx === activeSlide ? 'is-active' : ''}`}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              >
                <span className="dot-line"></span>
                <span className="dot-num">0{idx + 1}</span>
              </button>
            ))}
          </div>

          {/* Minimal Project Location in Corner */}
          <div className="hero-slide-caption">
            <span className="caption-title">{current.title}</span>
            <span className="caption-sub">{current.subtitle}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
