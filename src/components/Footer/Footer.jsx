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
              <li><Link to="/careers" className="footer-link">Careers & Vacancies</Link></li>
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

          {/* Column 4: Factory Coordinates, Contact & Socials */}
          <div className="footer-col footer-col--contact">
            <h4 className="footer-heading">Factory & Office</h4>
            <div className="footer-contact-details">
              {/* Factory Address */}
              <div className="footer-contact-block">
                <span className="contact-block-title">Manufacturing Works (Delhi)</span>
                <a 
                  href="https://maps.google.com/?q=J-43,+Sec-3,+Bawana+Industrial+Area,+Delhi-110039" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-contact-link footer-contact-link--addr"
                  title="Open Bawana Factory Location on Google Maps"
                >
                  <svg className="footer-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>J-43, Sec-3, Bawana Industrial Area, Delhi-110039</span>
                </a>
                <a 
                  href="mailto:malaenggworks@gmail.com" 
                  className="footer-contact-link footer-contact-link--email"
                  title="Email Mala Roll Forming"
                >
                  <svg className="footer-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>malaenggworks@gmail.com</span>
                </a>
              </div>

              {/* Phone Numbers & Direct Desk */}
              <div className="footer-contact-block">
                <div className="contact-desk-header">
                  <span className="contact-block-title">Direct Sales & Machinery Inquiries</span>
                  <span className="contact-live-pill">Direct Factory Desk</span>
                </div>

                {/* Primary WhatsApp / Call Card */}
                <a 
                  href="tel:+919870262404" 
                  className="footer-primary-phone" 
                  title="Direct Call / WhatsApp to Factory Head"
                >
                  <div className="phone-pulse-box">
                    <svg className="phone-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="phone-meta">
                    <span className="phone-subtext">CALL / WHATSAPP (PRIMARY)</span>
                    <span className="phone-digit">+91 9870262404</span>
                  </div>
                </a>

                {/* Additional Factory Phone Lines */}
                <div className="footer-phone-grid">
                  <a href="tel:+919868114107" className="footer-secondary-phone" title="Call +91 9868114107">
                    <svg className="phone-tiny-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>+91 9868114107</span>
                  </a>
                  <a href="tel:+919811914107" className="footer-secondary-phone" title="Call +91 9811914107">
                    <svg className="phone-tiny-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>+91 9811914107</span>
                  </a>
                  <a href="tel:+919891002404" className="footer-secondary-phone" title="Call +91 9891002404">
                    <svg className="phone-tiny-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>+91 9891002404</span>
                  </a>
                </div>
              </div>

              {/* SOCIAL ICONS (Directly below numbers) */}
              <div className="footer-social-section">
                <div className="social-section-heading">
                  <span className="social-label">Connect & Social Media</span>
                  <span className="social-sublabel">Follow Us</span>
                </div>

                <div className="footer-social-icons">
                  {/* WhatsApp */}
                  <a 
                    href="https://wa.me/919870262404?text=Hi%20Mala%20Roll%20Forming,%20I%20am%20interested%20in%20your%20roll%20forming%20machines%20and%20want%20a%20quotation." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-btn social-btn--wa" 
                    aria-label="WhatsApp"
                    title="Chat on WhatsApp (+91 9870262404)"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a 
                    href="https://www.youtube.com/@MalaRollForming" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-btn social-btn--yt" 
                    aria-label="YouTube"
                    title="Watch Machine Trials & Demos on YouTube"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a 
                    href="https://www.instagram.com/malarollforming" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-btn social-btn--ig" 
                    aria-label="Instagram"
                    title="Follow on Instagram"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a 
                    href="https://www.facebook.com/malarollforming" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-btn social-btn--fb" 
                    aria-label="Facebook"
                    title="Follow on Facebook"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/company/mala-roll-forming" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-btn social-btn--in" 
                    aria-label="LinkedIn"
                    title="Connect on LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  {/* Google Maps / Directions */}
                  <a 
                    href="https://maps.google.com/?q=J-43,+Sec-3,+Bawana+Industrial+Area,+Delhi-110039" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-btn social-btn--map" 
                    aria-label="Factory Directions"
                    title="Directions to Bawana Factory on Google Maps"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </a>
                </div>

                {/* Instant WhatsApp Quick Pill */}
                <a 
                  href="https://wa.me/919870262404?text=Hi%20Mala%20Roll%20Forming,%20I%20am%20interested%20in%20your%20roll%20forming%20machines%20and%20want%20a%20quotation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-wa-quick-pill"
                  title="Direct WhatsApp Quotation Support"
                >
                  <span className="wa-pulse-dot"></span>
                  <span className="wa-quick-text">Instant WhatsApp Quotation</span>
                  <span className="wa-quick-arrow">➔</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © {currentYear} Mala Roll Forming (Mala Engg. Works). All rights reserved. | Bawana Industrial Area, Delhi.
          </div>

          <div className="footer-bottom-nav">
            <Link to="/contact" className="bottom-nav-link">Visit Factory</Link>
            <Link to="/careers" className="bottom-nav-link">Careers</Link>
            <Link to="/services" className="bottom-nav-link">Technical Specs</Link>
            <span className="footer-separator">|</span>
            <a href="tel:+919870262404" className="bottom-nav-link">+91 9870262404</a>
            <a href="mailto:malaenggworks@gmail.com" className="bottom-nav-link">Email Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
