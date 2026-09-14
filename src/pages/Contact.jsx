import React, { useState } from 'react';
import SectionTitle from '../components/Common/SectionTitle';
import ArrowButton from '../components/Common/ArrowButton';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './ContactPage.css';

const disciplinesList = [
  'Structural Engineering',
  'Industrial Heavy Fabrication',
  'BIM Level 3 Coordination',
  'Specialized High-Load Solutions',
  'Structural Forensics & Diagnostics'
];

export default function ContactPage() {
  const revealRef = useScrollReveal();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    location: '',
    timeline: 'Within 6 Months',
    message: ''
  });

  const [selectedDisciplines, setSelectedDisciplines] = useState(['Structural Engineering']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleDiscipline = (disc) => {
    if (selectedDisciplines.includes(disc)) {
      if (selectedDisciplines.length > 1) {
        setSelectedDisciplines(selectedDisciplines.filter(d => d !== disc));
      }
    } else {
      setSelectedDisciplines([...selectedDisciplines, disc]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="page-contact" ref={revealRef}>
      {/* Page Header */}
      <section className="page-hero-banner">
        <div className="container">
          <div className="page-hero-content reveal">
            <span className="eyebrow-label">COMMENCE COLLABORATION</span>
            <h1 className="page-title">
              Direct Studio Intake &<br />
              Structural RFP Desk
            </h1>
            <p className="page-lead">
              Our partners and senior structural directors review all RFPs and engineering
              inquiries directly. Typical diagnostic feedback is issued within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Split Grid */}
      <section className="contact-main-section section-padding">
        <div className="container">
          <div className="contact-split-grid">
            {/* Left Column: Coordinates, Offices & Protocols */}
            <div className="contact-info-col reveal">
              <div className="studio-block">
                <span className="studio-type-badge">HEADQUARTERS // SWITZERLAND</span>
                <h3 className="studio-name">Zurich Design Studio</h3>
                <p className="studio-address">
                  Bleicherweg 10, CH-8002 Zurich<br />
                  Switzerland
                </p>
                <div className="studio-contact-links">
                  <a href="tel:+41442891100" className="studio-link">+41 44 289 1100</a>
                  <a href="mailto:zurich@malaa-group.com" className="studio-link">zurich@malaa-group.com</a>
                </div>
              </div>

              <div className="studio-block">
                <span className="studio-type-badge">FABRICATION & METALLURGY // SWEDEN</span>
                <h3 className="studio-name">Stockholm Assembly Facility</h3>
                <p className="studio-address">
                  Strandvägen 7A, SE-114 56 Stockholm<br />
                  Sweden (Fabrication Hub Luleå)
                </p>
                <div className="studio-contact-links">
                  <a href="tel:+4685052240" className="studio-link">+46 8 505 2240</a>
                  <a href="mailto:stockholm@malaa-group.com" className="studio-link">stockholm@malaa-group.com</a>
                </div>
              </div>

              <div className="intake-protocols-card">
                <h4 className="protocols-title">Confidentiality & Compliance</h4>
                <p className="protocols-text">
                  All structural blueprints, CAD models, and feasibility specifications submitted
                  via our intake portal are protected under bilateral non-disclosure protocols.
                </p>
                <div className="protocols-tags">
                  <span className="proto-tag">ISO 27001 Data Security</span>
                  <span className="proto-tag">Eurocode 3 Compliant</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Precision RFP Intake Form */}
            <div className="contact-form-col reveal delay-2">
              <div className="intake-form-box">
                {submitted ? (
                  <div className="submission-success-card">
                    <div className="success-icon">✓</div>
                    <span className="eyebrow-label">DISPATCH CONFIRMED</span>
                    <h2 className="success-title">Engineering Inquiry Logged</h2>
                    <p className="success-desc">
                      Thank you, <strong>{formData.name || 'Client'}</strong>. Your project inquiry has been
                      registered in our central engineering repository under Reference ID:
                    </p>
                    <div className="reference-code-badge">
                      <span>REF: ML-2026-{Math.floor(10000 + Math.random() * 90000)}</span>
                    </div>
                    <p className="success-sub">
                      A senior project partner will examine the structural scope and respond to{' '}
                      <strong>{formData.email}</strong> within 24 business hours.
                    </p>
                    <button
                      className="reset-form-btn"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          company: '',
                          location: '',
                          timeline: 'Within 6 Months',
                          message: ''
                        });
                      }}
                    >
                      Submit Another Scope
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="intake-form">
                    <div className="form-header">
                      <span className="eyebrow-label">PROJECT SPECIFICATION FORM</span>
                      <h3 className="form-title">Scope & Parameter Intake</h3>
                    </div>

                    {/* Discipline Multi-Select */}
                    <div className="form-group">
                      <label className="input-group-label">Required Engineering Disciplines</label>
                      <div className="discipline-chips">
                        {disciplinesList.map(disc => {
                          const isSelected = selectedDisciplines.includes(disc);
                          return (
                            <button
                              type="button"
                              key={disc}
                              className={`chip-btn ${isSelected ? 'chip-btn--active' : ''}`}
                              onClick={() => toggleDiscipline(disc)}
                            >
                              <span className="chip-indicator">{isSelected ? '■' : '□'}</span>
                              <span className="chip-text">{disc}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Dual Inputs */}
                    <div className="form-row-2">
                      <div className="form-field">
                        <label htmlFor="name" className="field-label">Full Name *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Henrik Larsson"
                          className="field-input"
                        />
                      </div>

                      <div className="form-field">
                        <label htmlFor="email" className="field-label">Corporate Email *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="h.larsson@industry.com"
                          className="field-input"
                        />
                      </div>
                    </div>

                    <div className="form-row-2">
                      <div className="form-field">
                        <label htmlFor="company" className="field-label">Organization / Firm *</label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. Nordic Structural Group"
                          className="field-input"
                        />
                      </div>

                      <div className="form-field">
                        <label htmlFor="location" className="field-label">Proposed Site Location</label>
                        <input
                          id="location"
                          name="location"
                          type="text"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="City, Country"
                          className="field-input"
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="timeline" className="field-label">Anticipated Schedule</label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="field-select"
                      >
                        <option value="Immediate / Emergency Review">Immediate / Emergency Review</option>
                        <option value="Within 3 Months">Within 3 Months</option>
                        <option value="Within 6 Months">Within 6 Months</option>
                        <option value="2027 Project Planning">2027 Project Planning</option>
                      </select>
                    </div>

                    <div className="form-field">
                      <label htmlFor="message" className="field-label">Structural Scope & Technical Requirements *</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Detail expected tonnage, spans, environmental conditions, or BIM integration expectations..."
                        className="field-textarea"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="intake-submit-btn"
                    >
                      <span>{isSubmitting ? 'Transmitting Scope...' : 'Transmit Project Specification'}</span>
                      <svg className="submit-arrow" viewBox="0 0 36 12" fill="none">
                        <line x1="1" y1="6" x2="33" y2="6" stroke="currentColor" strokeWidth="1.4" />
                        <path d="M29 2L33 6L29 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
                      </svg>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Addressed Inquiries */}
      <section className="faq-section section-padding">
        <div className="container">
          <SectionTitle
            tagline="ENGAGEMENT PROTOCOLS"
            title="Intake & Commissioning FAQ"
            description="Clear expectations regarding structural feasibility diagnostics, procurement phases, and fabrication timelines."
            className="reveal"
          />

          <div className="faq-grid">
            <div className="faq-card reveal delay-1">
              <span className="faq-num">01</span>
              <h4 className="faq-title">What is the typical timeframe for structural analysis?</h4>
              <p className="faq-text">
                Preliminary finite element feasibility reviews are typically delivered in 5–10 business days. Full certified Eurocode 3 calculation packages vary with scale, typically requiring 3–6 weeks.
              </p>
            </div>

            <div className="faq-card reveal delay-2">
              <span className="faq-num">02</span>
              <h4 className="faq-title">Do you accept international fabrication commissions?</h4>
              <p className="faq-text">
                Yes. While our primary fabrication plants are located in Sweden, we coordinate logistics, rail delivery, and certified on-site assembly supervision across Europe and worldwide.
              </p>
            </div>

            <div className="faq-card reveal delay-3">
              <span className="faq-num">03</span>
              <h4 className="faq-title">Can you integrate with existing architect BIM models?</h4>
              <p className="faq-text">
                Yes. We operate directly within Revit, Tekla, and IFC 4 open standard workflows, maintaining real-time bi-directional synchronization with lead architects and general contractors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
