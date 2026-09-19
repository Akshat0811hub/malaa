import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import wallpaperImg from '../../assets/career-wallpaper.jpg';
import './Career.css';

const compactRoles = [
  {
    id: 'tool-designer',
    title: 'Tool & Die Designer',
    dept: 'CAD / SolidWorks',
    exp: '3+ Yrs',
    type: 'Full-Time',
    desc: 'Roll forming flower development, EN-31 roller profiling & strip width calculation.'
  },
  {
    id: 'cnc-machinist',
    title: 'CNC & Lathe Machinist',
    dept: 'Machine Shop',
    exp: '2+ Yrs',
    type: 'Full-Time',
    desc: 'Precision turning of heavy EN-31 / D3 hardened roller sets to micron tolerances.'
  },
  {
    id: 'plc-engineer',
    title: 'PLC Automation Engineer',
    dept: 'Electrical & Panels',
    exp: '2+ Yrs',
    type: 'Full-Time',
    desc: 'Delta / Schneider PLC programming, high-speed flying shear & encoder synchronization.'
  },
  {
    id: 'assembly-tech',
    title: 'Machine Assembly Tech',
    dept: 'Factory Works',
    exp: '2+ Yrs',
    type: 'Full-Time',
    desc: 'Heavy ISMC frame erection, reduction gearbox alignment & live GI coil test runs.'
  }
];

export default function Career({ id = "careers" }) {
  const [activeModalRole, setActiveModalRole] = useState(null);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    role: '',
    experience: ''
  });

  const revealRef = useScrollReveal();

  const handleOpenModal = (roleTitle) => {
    setActiveModalRole(roleTitle);
    setFormData(prev => ({ ...prev, role: roleTitle }));
    setApplicationSubmitted(false);
  };

  const handleCloseModal = () => {
    setActiveModalRole(null);
    setApplicationSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setApplicationSubmitted(true);
  };

  const getWhatsAppLink = (roleTitle = '') => {
    const text = encodeURIComponent(
      `Hi Mala Roll Forming (Mala Engg. Works), I want to apply for the position: *${roleTitle || 'Machinery Job Opening'}*.\nName: ${formData.name || ''}\nPhone: ${formData.phone || ''}\nExperience: ${formData.experience || ''}\nPlant Location: Bawana Sec-3, Delhi.`
    );
    return `https://wa.me/919870262404?text=${text}`;
  };

  return (
    <section id={id} className="career-section-compact" ref={revealRef}>
      {/* Fixed Wallpaper Background Window */}
      <div 
        className="career-wallpaper-bg"
        style={{ backgroundImage: `url(${wallpaperImg})` }}
      >
        <div className="career-wallpaper-overlay"></div>
        <div className="career-wallpaper-gridlines"></div>
      </div>

      <div className="career-compact-container container">
        {/* Compact Header */}
        <div className="career-compact-header reveal">
          <div className="career-compact-badge">
            <span className="career-pulse-dot"></span>
            <span>WE ARE HIRING • BAWANA WORKS</span>
          </div>

          <h2 className="career-compact-title">
            Build Industrial Machinery With <span className="career-title-accent">Mala Engg. Works</span>
          </h2>

          <p className="career-compact-lead">
            Join Delhi’s premier roll forming machine manufacturer. We are expanding our in-house tooling,
            CNC machining, and PLC automation team at J-43, Sec-3, Bawana Industrial Area.
          </p>
        </div>

        {/* 4 Compact Position Cards */}
        <div className="career-compact-grid reveal delay-1">
          {compactRoles.map((role) => (
            <div key={role.id} className="compact-role-card">
              <div className="role-top-meta">
                <span className="role-dept-pill">{role.dept}</span>
                <span className="role-exp-pill">{role.exp} Exp</span>
              </div>
              <h4 className="role-card-title">{role.title}</h4>
              <p className="role-card-desc">{role.desc}</p>
              <div className="role-card-action">
                <button 
                  className="role-quick-apply-btn"
                  onClick={() => handleOpenModal(role.title)}
                >
                  <span>Quick Apply</span>
                  <span className="role-arrow">➔</span>
                </button>
                <a
                  href={`https://wa.me/919870262404?text=Hi%20Mala%20Roll%20Forming,%20I%20want%20to%20apply%20for%20the%20${encodeURIComponent(role.title)}%20role%20at%20Bawana%20works.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="role-wa-icon-btn"
                  title="Apply via WhatsApp"
                >
                  📱
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Quick Action Strip */}
        <div className="career-compact-bottom reveal delay-2">
          <div className="compact-bottom-left">
            <span className="direct-hire-tag">DIRECT PLANT HIRING</span>
            <span className="direct-hire-text">
              Looking for Lathe / Milling / Assembly roles? Walk in Mon–Sat (10am–5pm) or call directly.
            </span>
          </div>

          <div className="compact-bottom-actions">
            <a 
              href="https://wa.me/919870262404?text=Hi%20Mala%20Roll%20Forming,%20I%20want%20to%20send%20my%20resume%20for%20factory%20job%20vacancies%20at%20Bawana." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="compact-btn-wa"
            >
              <span>Apply Via WhatsApp</span>
              <span className="wa-icon">➔</span>
            </a>
            <a href="tel:+919870262404" className="compact-btn-call">
              <span>📞 +91 9870262404</span>
            </a>
            <a href="mailto:malaenggworks@gmail.com" className="compact-btn-mail">
              <span>✉️ Send CV</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightweight Application Modal */}
      {activeModalRole && (
        <div className="career-modal-backdrop" onClick={handleCloseModal}>
          <div className="career-modal-box compact-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="career-modal-header">
              <div>
                <span className="modal-eyebrow">QUICK APPLY • BAWANA WORKS</span>
                <h3 className="modal-role-title">{activeModalRole}</h3>
              </div>
              <button className="modal-close-btn" onClick={handleCloseModal} aria-label="Close">
                ✕
              </button>
            </div>

            <div className="career-modal-body">
              {applicationSubmitted ? (
                <div className="modal-success-state">
                  <div className="success-icon-bubble">✓</div>
                  <h4 className="success-heading">Application Sent!</h4>
                  <p className="success-text">
                    Thank you! Our recruitment team at Bawana works will review your profile. You can also connect directly on WhatsApp:
                  </p>
                  <a href={getWhatsAppLink(activeModalRole)} target="_blank" rel="noopener noreferrer" className="success-wa-btn">
                    Chat on WhatsApp Directly
                  </a>
                  <button className="modal-done-btn" onClick={handleCloseModal} style={{ marginTop: '16px' }}>
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="modal-form">
                  <div className="form-group">
                    <label className="form-label">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Years of Relevant Experience</label>
                    <input
                      type="text"
                      placeholder="e.g. 3 Years"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  {/* WhatsApp Direct Option */}
                  <a
                    href={getWhatsAppLink(activeModalRole)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-fast-wa-btn"
                  >
                    <span>📱 Fast-Track: Apply Via WhatsApp</span>
                  </a>

                  <div className="modal-footer-actions">
                    <button type="button" className="btn-cancel" onClick={handleCloseModal}>
                      Cancel
                    </button>
                    <button type="submit" className="btn-submit-app">
                      Submit Online
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
