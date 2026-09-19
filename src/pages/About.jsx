import React from 'react';
import SectionTitle from '../components/Common/SectionTitle';
import ArrowButton from '../components/Common/ArrowButton';
import CTA from '../components/CTA/CTA';
import Timeline from '../components/Timeline/Timeline';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { handleImageError } from '../utils/imageFallbacks';
import './AboutPage.css';
import aboutbanner from '../assets/abouthbanner.png';

const manufacturingPillars = [
  {
    name: 'CNC Roller Turning & Grinding',
    role: 'Precision Tooling Fabrication',
    credentials: '±0.02mm Tolerances // EN-31 & D3 Tool Steel',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Vacuum Heat Treatment & Hard Chrome',
    role: 'Tooling Hardening & Anti-Wear Coating',
    credentials: '60–62 HRC Uniform Hardness // Mirror Finish',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Heavy Structural Chassis Assembly',
    role: 'Rigid Vibration-Free Machine Bed',
    credentials: 'Heavy ISMC Channel Base // 40Cr Ground Shafts',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Live Coil Testing & PLC Calibration',
    role: 'Pre-Dispatch Quality Assurance',
    credentials: '±0.5mm Flying Shear Cut // Live Trial Runs',
    image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=800&auto=format&fit=crop'
  }
];

export default function AboutPage() {
  const revealRef = useScrollReveal();

  return (
    <div className="page-about" ref={revealRef}>
      {/* Page Header */}
      <section className="page-hero-banner">
        <div className="page-hero-banner-bg">
          <img
            src={aboutbanner}
            alt="Mala Roll Forming Machine Manufacturing Facility Bawana Delhi"
            className="page-hero-banner-img"
            onError={handleImageError}
          />
          <div className="page-hero-banner-scrim"></div>
        </div>
        <div className="container">
          <div className="page-hero-content reveal">
            <span className="eyebrow-label">ABOUT MALA ROLL FORMING • MALA ENGG. WORKS</span>
            <h1 className="page-title">
              Heavy-Duty Roll Forming Machinery<br />
              Manufactured in Bawana, Delhi
            </h1>
            <p className="page-lead">
              Operating from J-43, Sec-3, Bawana Industrial Area, Delhi, Mala Roll Forming engineers<br className="desktop-br" />
              high-speed roll forming lines and industrial cutters for non-stop commercial production.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Split Section */}
      <section className="about-philosophy section-padding">
        <div className="container">
          <div className="philosophy-grid">
            <div className="philosophy-media reveal">
              <div className="philosophy-image-frame">
                <img
                  src={aboutbanner}
                  alt="Industrial roll forming machine manufacturing facility in Bawana Delhi"
                  className="philosophy-img"
                  loading="lazy"
                  onError={handleImageError}
                />
              </div>
            </div>

            <div className="philosophy-text reveal delay-2">
              <span className="eyebrow-label">OUR MANUFACTURING ETHOS</span>
              <h2 className="philosophy-heading">
                True engineering starts with raw steel, in-house tooling, and zero compromise.
              </h2>
              <p>
                Unlike traders who resell machines with uncertain metal quality, Mala Roll Forming designs,
                machines, hardens, and tests every machine under one roof in Bawana. We control the complete
                metallurgical workflow — from CAD flower pattern calculation to CNC turning and vacuum hardening.
              </p>
              <p>
                Every roller set is engineered using certified EN-31 / D3 alloy die steel, heat-treated to
                60–62 HRC, and hard chrome plated. This ensures our machines form galvanized (GI), cold-rolled (CR),
                and pre-painted coils without peeling, edge waviness, or roller wear for millions of running meters.
              </p>

              <div className="philosophy-stats-grid">
                <div className="phil-stat">
                  <span className="phil-stat-num">60–62 HRC</span>
                  <span className="phil-stat-txt">Vacuum Hardened Tooling Rollers</span>
                </div>
                <div className="phil-stat">
                  <span className="phil-stat-num">100%</span>
                  <span className="phil-stat-txt">In-House Manufacturing at Bawana</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Scroll-Brightening Timeline */}
      <Timeline />
      {/* Final CTA */}
      <CTA />
    </div>
  );
}
