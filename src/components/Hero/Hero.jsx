import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ArrowButton from '../Common/ArrowButton';
import { handleImageError } from '../../utils/imageFallbacks';
import './Hero.css';

// Correct image path: banner1.png
import banner1 from '../../assets/banner1.png';

const bannerSlides = [
  {
    id: 1,
    title: 'Automatic Rolling Shutter Machine',
    subtitle: 'Shutter Patti, Slat, Bottom Lock Plate & Guide Slide Lines // Bawana, Delhi',
    image: banner1
  },
  {
    id: 2,
    title: 'Tee Grid Machine & Ceiling Section Line',
    subtitle: 'Main Tee, Cross Tee, Wall Angle, POP Channel & False Ceiling Roll Forming',
    image:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2400&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Slotted Angle, Sheet Cutter & Spring Machines',
    subtitle: 'Heavy Industrial Rack Forming, Hydraulic Shearing & High-Tension Wire Coiling',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2400&auto=format&fit=crop'
  }
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const timerRef = useRef(null);

  // Initial animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 80);

    return () => clearTimeout(timer);
  }, []);

  // Autoplay
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 6000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  const current = bannerSlides[activeSlide];

  return (
    <section
      className={`hero-banner-simple ${
        isLoaded ? 'is-loaded' : ''
      }`}
    >
      {/* Background Architectural Photography Carousel */}
      <div className="hero-banner-bg-wrapper">
        {bannerSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-banner-slide ${
              index === activeSlide ? 'is-active' : ''
            }`}
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

        {/* Dark overlay */}
        <div className="hero-banner-scrim"></div>
      </div>

      {/* Main Banner Content */}
      <div className="container hero-banner-container">
        <div className="hero-banner-text">
          <span className="hero-banner-eyebrow hero-animate-1">
            MALA ROLL FORMING • MALA ENGG. WORKS • BAWANA, DELHI
          </span>

          <h1 className="hero-banner-heading hero-animate-2">
            Roll Forming Machine
            <br />
            <span>Manufacturer in India</span>
          </h1>

          <p className="hero-banner-description hero-animate-3">
            Leading industrial manufacturer of Automatic Rolling Shutter Machines, Tee Grid Lines,
            Sheet Cutters, Spring Machines, Ceiling Section & P.O.P. Machines, Slotted Angle,
            Shutter Slide & Lock Plate Machines in Bawana Industrial Area, Delhi. Engineered with
            EN-31 vacuum-hardened rollers and automated PLC touch-screen flying shear cutting.
          </p>

          <div className="hero-banner-buttons hero-animate-4">
            <ArrowButton
              to="/services"
              variant="light-solid"
              className="hero-primary-btn"
            >
              Explore Machinery
            </ArrowButton>

            <Link to="/contact" className="hero-outline-btn">
              Get Factory Quote
            </Link>
          </div>
        </div>

        {/* Bottom Info + Slide Indicators */}
        <div className="hero-banner-footer hero-animate-4">
          {/* Slide Indicators */}
          <div className="hero-slide-dots">
            {bannerSlides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                className={`hero-dot-btn ${
                  idx === activeSlide ? 'is-active' : ''
                }`}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              >
                <span className="dot-line"></span>
                <span className="dot-num">
                  0{idx + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Current Project Caption */}
          <div className="hero-slide-caption">
            <span className="caption-title">
              {current.title}
            </span>

            <span className="caption-sub">
              {current.subtitle}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}