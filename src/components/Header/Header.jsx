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
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
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
                <span className="header-status-indicator" title="Bawana Factory Open For Orders">
                  <span className="status-ping-dot"></span>
                  <span className="status-label">BAWANA, DELHI</span>
                </span>
              </div>
              <span className="logo-descriptor">MALA ENGG. WORKS • INDUSTRIAL MACHINERY</span>
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
            <div className="mobile-contact-info">
              <p className="mobile-contact-label">Bawana Factory & Sales Desk</p>
              <a href="mailto:malaenggworks@gmail.com" className="mobile-contact-email">
                malaenggworks@gmail.com
              </a>
              <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.88rem' }}>
                <a href="tel:+919870262404" style={{ color: 'inherit', textDecoration: 'none' }}>📞 +91 9870262404</a>
                <a href="tel:+919868114107" style={{ color: 'inherit', textDecoration: 'none' }}>📞 +91 9868114107</a>
                <a href="tel:+919811914107" style={{ color: 'inherit', textDecoration: 'none' }}>📞 +91 9811914107</a>
                <a href="tel:+919891002404" style={{ color: 'inherit', textDecoration: 'none' }}>📞 +91 9891002404</a>
              </div>
              <p style={{ marginTop: '10px', fontSize: '0.82rem', color: '#666' }}>
                J-43, Sec-3, Bawana Industrial Area, Delhi-110039
              </p>
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
