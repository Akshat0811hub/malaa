import React from 'react';
import SectionTitle from '../components/Common/SectionTitle';
import ArrowButton from '../components/Common/ArrowButton';
import Career from '../components/Career/Career';
import CTA from '../components/CTA/CTA';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './CareersPage.css';

export default function CareersPage() {
  const revealRef = useScrollReveal();

  return (
    <div className="page-careers">
      {/* Intro Header */}
      <section className="page-hero-banner" ref={revealRef}>
        <div className="container">
          <div className="page-hero-content reveal">
            <span className="eyebrow-label">JOIN MALA ROLL FORMING // BAWANA SEC-3</span>
            <h1 className="page-title">
              Craft Industrial Excellence.<br />
              Grow With India's Machinery Leaders.
            </h1>
            <p className="page-lead">
              From our heavy engineering plant in Bawana Industrial Area, Delhi, we build heavy-duty
              automatic roll forming lines, high-speed PLC flying shears, and hardened EN-31 tooling sets.
              Explore our current vacancies below and submit your application directly online or via WhatsApp.
            </p>
            <div className="careers-hero-stats">
              <div className="hero-stat-badge">
                <span className="badge-dot"></span>
                <span>Direct Plant Hiring • Bawana Sec-3, Delhi</span>
              </div>
              <div className="hero-stat-badge">
                <span className="badge-dot"></span>
                <span>Immediate Interview Scheduling</span>
              </div>
              <div className="hero-stat-badge">
                <span className="badge-dot"></span>
                <span>Competitive Salary + Performance Bonuses</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Career Section with Fixed Wallpaper Background */}
      <Career id="openings" />

      {/* Factory Walk-In & Interview Note */}
      <section className="careers-walkin-strip">
        <div className="container">
          <div className="walkin-box">
            <div className="walkin-info">
              <span className="walkin-tag">DIRECT FACTORY WALK-IN INTERVIEWS</span>
              <h3 className="walkin-title">Visit Our Manufacturing Facility in Bawana</h3>
              <p className="walkin-desc">
                Candidates with experience in roll forming machine operation, lathe/milling machining,
                die tool setting, or industrial electrical wiring can walk in directly for an interview with our technical heads.
              </p>
              <span className="walkin-time">🕒 Timings: Monday to Saturday | 10:00 AM – 5:00 PM</span>
            </div>
            <div className="walkin-actions">
              <a href="tel:+919870262404" className="walkin-call-btn">
                <span>📞 Call Before Visiting: 9870262404</span>
              </a>
              <a
                href="https://maps.google.com/?q=J-43,+Sec-3,+Bawana+Industrial+Area,+Delhi-110039"
                target="_blank"
                rel="noopener noreferrer"
                className="walkin-map-btn"
              >
                <span>📍 View Location on Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
