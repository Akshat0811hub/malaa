import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo-cropped.png';
import './Footer.css';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-top-grid">
          {/* Column 1: Brand Identity & Descriptor */}
          <div className="footer-col footer-col--brand">
            <Link to="/" className="site-logo footer-logo" aria-label="MALA Engg. Works Home">
              <img src={logoImg} alt="MALA Engg. Works" className="footer-logo-img" />
              <div className="logo-text-block">
                <span className="logo-brand-title">MALA ENGG. WORKS</span>
                <span className="logo-descriptor">ARCHITECTURE & STEEL</span>
              </div>
            </Link>
            <p className="footer-brand-desc">
              Pioneering precision structural engineering, high-tensile metallurgy fabrication,
              and monolithic architectural systems for mission-critical industrial facilities.
            </p>
            <div className="footer-cert-tags">
              <span className="cert-tag">ISO 9001:2015</span>
              <span className="cert-tag">EN 1090-2 EXC4</span>
              <span className="cert-tag">SIA 263</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home Overview</Link></li>
              <li><Link to="/about" className="footer-link">About the Studio</Link></li>
              <li><Link to="/services" className="footer-link">Our Expertise</Link></li>
              <li><Link to="/projects" className="footer-link">Selected Projects</Link></li>
              <li><Link to="/contact" className="footer-link">Contact & RFP</Link></li>
            </ul>
          </div>

          {/* Column 3: Disciplines */}
          <div className="footer-col">
            <h4 className="footer-heading">Disciplines</h4>
            <ul className="footer-links">
              <li><Link to="/services" className="footer-link">Structural Engineering</Link></li>
              <li><Link to="/services" className="footer-link">Industrial Metallurgy</Link></li>
              <li><Link to="/services" className="footer-link">Parametric Frameworks</Link></li>
              <li><Link to="/services" className="footer-link">Construction Oversight</Link></li>
              <li><Link to="/services" className="footer-link">Forensics & Consulting</Link></li>
            </ul>
          </div>

          {/* Column 4: Studios & Coordinates */}
          <div className="footer-col">
            <h4 className="footer-heading">Studios</h4>
            <div className="footer-studios">
              <div className="studio-entry">
                <span className="studio-city">Zurich (Headquarters)</span>
                <span className="studio-addr">Bleicherweg 10, 8002 Zurich</span>
                <span className="studio-phone">+41 44 289 1100</span>
              </div>
              <div className="studio-entry">
                <span className="studio-city">Stockholm (Fabrication Center)</span>
                <span className="studio-addr">Strandvägen 7A, 114 56 Stockholm</span>
                <span className="studio-phone">+46 8 505 2240</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © {currentYear} MALA Engg. Works / MALAA Structural Group. All rights reserved.
          </div>

          <div className="footer-socials">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              Instagram
            </a>
            <a href="https://archdaily.com" target="_blank" rel="noopener noreferrer" className="social-link">
              ArchDaily
            </a>
            <span className="footer-separator">|</span>
            <Link to="/about" className="social-link">Privacy Policy</Link>
            <Link to="/about" className="social-link">Terms of Engagement</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
