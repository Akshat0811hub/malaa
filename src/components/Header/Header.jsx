import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.__lenis?.stop();
    } else {
      document.body.style.overflow = '';
      window.__lenis?.start();
    }
    return () => {
      document.body.style.overflow = '';
      window.__lenis?.start();
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    // { label: 'Projects', path: '/projects' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
        <div className="container header-container">
          {/* Logo Mark */}
          <Link to="/" className="site-logo" aria-label="Mala Roll Forming Home">
            <img src={logoImg} alt="Mala Roll Forming Machine Manufacturer" className="site-logo-img" />
            <div className="logo-text-block">
              <div className="logo-title-row">
                <span className="logo-brand-title">MALA ROLL FORMING</span>
                
              </div>
              <span className="logo-descriptor">INDUSTRIAL MACHINERY</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {navLinks.map((item) => (
                <li key={item.path} className="nav-item">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? 'nav-link--active' : ''}`
                    }
                    end={item.path === '/'}
                  >
                    <span className="nav-link-text">{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Header Right Actions */}
          <div className="header-right-actions">
            <a href="tel:+919870262404" className="header-phone-quick" title="Call Mala Roll Forming Factory">
              <span className="phone-icon">📞</span>
              <span className="phone-num">9870262404</span>
            </a>

            <Link to="/contact" className="header-cta-btn">
              <span className="header-cta-txt">Get Quote</span>
              <span className="cta-arrow-box">
                <svg className="cta-arrow" viewBox="0 0 16 12" fill="none">
                  <line x1="1" y1="6" x2="14" y2="6" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10 2L14 6L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                </svg>
              </span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              className={`hamburger-btn ${mobileMenuOpen ? 'hamburger-btn--open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span className="hamburger-line line-1"></span>
              <span className="hamburger-line line-2"></span>
              <span className="hamburger-line line-3"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop & Drawer */}
      <div className={`mobile-drawer-overlay ${mobileMenuOpen ? 'is-open' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
      <aside className={`mobile-drawer ${mobileMenuOpen ? 'is-open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-drawer-inner">
          <div className="mobile-drawer-header">
            <Link to="/" className="site-logo" onClick={() => setMobileMenuOpen(false)}>
              <img src={logoImg} alt="Mala Roll Forming" className="site-logo-img" />
              <div className="logo-text-block">
                <span className="logo-brand-title">MALA ROLL FORMING</span>
                <span className="logo-descriptor">MALA ENGG. WORKS • BAWANA</span>
              </div>
            </Link>
            <button
              className="close-drawer-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Navigation"
            >
              ✕
            </button>
          </div>

          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navLinks.map((item, index) => (
                <li key={item.path} className="mobile-nav-item" style={{ animationDelay: `${index * 60}ms` }}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `mobile-nav-link ${isActive ? 'mobile-nav-link--active' : ''}`
                    }
                    end={item.path === '/'}
                  >
                    <span className="mobile-nav-num">0{index + 1}</span>
                    <span className="mobile-nav-title">{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-drawer-footer">
            {/* Direct Tap-To-Call Action Box */}
            <div className="mobile-call-action-box">
              <div className="mobile-call-badge">
                <span className="mobile-call-pulse"></span>
                <span>Direct Factory Line • Bawana</span>
              </div>

              {/* Primary Tap-To-Call Direct Button */}
              <a 
                href="tel:+919870262404" 
                className="mobile-primary-call-btn" 
                title="Direct Phone Call to Factory"
              >
                <div className="mobile-call-btn-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="call-svg-icon">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="mobile-call-btn-text">
                  <span className="mobile-call-label">TAP TO CALL NOW</span>
                  <span className="mobile-call-number">+91 9870262404</span>
                </div>
                <span className="mobile-call-arrow">➔</span>
              </a>

              {/* WhatsApp Quick Chat */}
              <a 
                href="https://wa.me/919870262404?text=Hi%20Mala%20Roll%20Forming,%20I%20am%20interested%20in%20your%20roll%20forming%20machines%20and%20want%20a%20quotation." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mobile-wa-chat-btn"
                title="Chat with Mala Engg. Works on WhatsApp"
              >
                <svg className="wa-svg-icon" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>WhatsApp Quotation Chat</span>
              </a>

              {/* Secondary Factory Phone Lines */}
              <div className="mobile-secondary-calls">
                <span className="mobile-sub-label">Other Factory & Sales Lines:</span>
                <div className="mobile-chips-grid">
                  <a href="tel:+919868114107" className="mobile-chip-call" title="Call 9868114107">
                    <span className="chip-icon">📞</span>
                    <span className="chip-num">9868114107</span>
                  </a>
                  <a href="tel:+919811914107" className="mobile-chip-call" title="Call 9811914107">
                    <span className="chip-icon">📞</span>
                    <span className="chip-num">9811914107</span>
                  </a>
                  <a href="tel:+919891002404" className="mobile-chip-call" title="Call 9891002404">
                    <span className="chip-icon">📞</span>
                    <span className="chip-num">9891002404</span>
                  </a>
                </div>
              </div>

              {/* Instant Quote Button */}
              <Link 
                to="/contact" 
                className="mobile-quote-cta-btn" 
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Request Custom Machine Quote</span>
                <span className="cta-arrow-mini">➔</span>
              </Link>
            </div>

            {/* Factory Address Info */}
            <div className="mobile-contact-info">
              <p className="mobile-contact-label">Factory & Works Location</p>
              <p className="mobile-factory-addr">
                📍 J-43, Sec-3, Bawana Industrial Area, Delhi-110039
              </p>
              <a href="mailto:malaenggworks@gmail.com" className="mobile-contact-email">
                ✉️ malaenggworks@gmail.com
              </a>
            </div>

            <div className="mobile-socials">
              <span>Bawana Sec-3</span>
              <span>•</span>
              <span>Delhi</span>
              <span>•</span>
              <span>Pan-India Delivery</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
