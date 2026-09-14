import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logoImg from '../../assets/logo-cropped.png';
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
          <Link to="/" className="site-logo" aria-label="MALA Engg. Works Home">
            <img src={logoImg} alt="MALA Engg. Works" className="site-logo-img" />
            <div className="logo-text-block">
              <span className="logo-brand-title">MALA ENGG. WORKS</span>
              <span className="logo-descriptor">ARCHITECTURE & STEEL</span>
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
                    <span className="nav-link-underline"></span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Header Action Contact Button */}
          <div className="header-right-actions">
            <Link to="/contact" className="header-cta-btn">
              <span>Inquire</span>
              <svg className="cta-arrow" viewBox="0 0 20 12" fill="none">
                <line x1="1" y1="6" x2="18" y2="6" stroke="currentColor" strokeWidth="1.3" />
                <path d="M14 2L18 6L14 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" />
              </svg>
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
              <img src={logoImg} alt="MALA Engg. Works" className="site-logo-img" />
              <div className="logo-text-block">
                <span className="logo-brand-title">MALA ENGG. WORKS</span>
                <span className="logo-descriptor">ARCHITECTURE & STEEL</span>
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
              <p className="mobile-contact-label">Direct Studio Inquiries</p>
              <a href="mailto:inquiry@malaa-group.com" className="mobile-contact-email">
                inquiry@malaa-group.com
              </a>
              <p className="mobile-contact-phone">+41 44 289 1100</p>
            </div>
            <div className="mobile-socials">
              <span>Zurich</span>
              <span>•</span>
              <span>Stockholm</span>
              <span>•</span>
              <span>New York</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
