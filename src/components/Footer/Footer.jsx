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
            <Link to="/" className="site-logo footer-logo" aria-label="Mala Roll Forming Home">
              <img src={logoImg} alt="Mala Roll Forming" className="footer-logo-img" />
              <div className="logo-text-block">
                <span className="logo-brand-title">MALA ROLL FORMING</span>
                <span className="logo-descriptor">MALA ENGG. WORKS • BAWANA, DELHI</span>
              </div>
            </Link>
            <p className="footer-brand-desc">
              Premier manufacturer of Automatic Rolling Shutter Machines, Tee Grid Lines,
              Sheet Cutters, Spring Machines, Ceiling Section, POP Channels, Slotted Angles,
              Shutter Slides & Lock Plate Machines in Bawana Industrial Area, Delhi.
            </p>
            <div className="footer-cert-tags">
              <span className="cert-tag">EN-31 Hardened Tooling</span>
              <span className="cert-tag">PLC Flying Shear</span>
              <span className="cert-tag">Factory Direct Pricing</span>
              <span className="cert-tag">Pan-India Supply</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Bawana Facility</Link></li>
              <li><Link to="/services" className="footer-link">Machinery Catalog</Link></li>
              <li><Link to="/projects" className="footer-link">Installed Lines & Setups</Link></li>
              <li><Link to="/contact" className="footer-link">Get Instant Factory Quote</Link></li>
            </ul>
          </div>

          {/* Column 3: Machinery Range */}
          <div className="footer-col">
            <h4 className="footer-heading">Machinery Range</h4>
            <ul className="footer-links">
              <li><Link to="/services" className="footer-link">Rolling Shutter Machine</Link></li>
              <li><Link to="/services" className="footer-link">Tee Grid Machine</Link></li>
              <li><Link to="/services" className="footer-link">Sheet Cutting Machine</Link></li>
              <li><Link to="/services" className="footer-link">Spring Coiling Machine</Link></li>
              <li><Link to="/services" className="footer-link">Ceiling Section & POP Machine</Link></li>
              <li><Link to="/services" className="footer-link">Slotted Angle Roll Line</Link></li>
              <li><Link to="/services" className="footer-link">Shutter Slide & Lock Plate</Link></li>
              <li><Link to="/services" className="footer-link">Custom Tooling & Rollers</Link></li>
            </ul>
          </div>

          {/* Column 4: Factory Coordinates & Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">Factory & Office</h4>
            <div className="footer-studios">
              <div className="studio-entry">
                <span className="studio-city">Manufacturing Works (Delhi)</span>
                <span className="studio-addr">J-43, Sec-3, Bawana Industrial Area, Delhi-110039</span>
                <a href="mailto:malaenggworks@gmail.com" className="studio-phone" style={{ textDecoration: 'none', color: 'inherit' }}>
                  ✉ malaenggworks@gmail.com
                </a>
              </div>
              <div className="studio-entry" style={{ marginTop: '12px' }}>
                <span className="studio-city">Sales & Inquiries (Calling & WhatsApp)</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginTop: '4px' }}>
                  <a href="tel:+919870262404" className="studio-phone" style={{ textDecoration: 'none', color: 'inherit' }}>📞 +91 9870262404</a>
                  <a href="tel:+919868114107" className="studio-phone" style={{ textDecoration: 'none', color: 'inherit' }}>📞 +91 9868114107</a>
                  <a href="tel:+919811914107" className="studio-phone" style={{ textDecoration: 'none', color: 'inherit' }}>📞 +91 9811914107</a>
                  <a href="tel:+919891002404" className="studio-phone" style={{ textDecoration: 'none', color: 'inherit' }}>📞 +91 9891002404</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © {currentYear} Mala Roll Forming (Mala Engg. Works). All rights reserved. | Bawana Industrial Area, Delhi.
          </div>

          <div className="footer-socials">
            <Link to="/contact" className="social-link">Visit Factory</Link>
            <Link to="/services" className="social-link">Technical Specs</Link>
            <span className="footer-separator">|</span>
            <a href="tel:+919870262404" className="social-link">+91 9870262404</a>
            <a href="mailto:malaenggworks@gmail.com" className="social-link">Email Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
