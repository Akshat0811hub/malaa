import React, { useState } from 'react';
import SectionTitle from '../components/Common/SectionTitle';
import ArrowButton from '../components/Common/ArrowButton';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { handleImageError } from '../utils/imageFallbacks';
import banner1 from '../assets/banner1.png';
import './ContactPage.css';

const machineryList = [
  'Automatic Rolling Shutter Machine',
  'Tee Grid Machine (Ceiling Line)',
  'Industrial Sheet Cutter & Shearing Machine',
  'Rolling Shutter Spring Machine',
  'Ceiling Section Machine',
  'P.O.P. Channel Machine',
  'Slotted Angle Roll Line',
  'Shutter Slide & Guide Rail',
  'Lock Plate Machine',
  'Custom Roll Tooling / Spare Rollers'
];

export default function ContactPage() {
  const revealRef = useScrollReveal();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    location: '',
    timeline: 'Within 1 Month',
    message: ''
  });

  const [selectedMachinery, setSelectedMachinery] = useState(['Automatic Rolling Shutter Machine']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleMachine = (item) => {
    if (selectedMachinery.includes(item)) {
      if (selectedMachinery.length > 1) {
        setSelectedMachinery(selectedMachinery.filter(m => m !== item));
      }
    } else {
      setSelectedMachinery([...selectedMachinery, item]);
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
        <div className="page-hero-banner-bg">
          <img
            src={banner1}
            alt="Contact Mala Roll Forming Factory Bawana Delhi"
            className="page-hero-banner-img"
            onError={handleImageError}
          />
          <div className="page-hero-banner-scrim"></div>
        </div>
        <div className="container">
          <div className="page-hero-content reveal">
            <span className="eyebrow-label">FACTORY CONTACT & QUOTATION DESK</span>
            <h1 className="page-title">
              Contact Mala Roll Forming<br />
              Bawana Industrial Works
            </h1>
            <p className="page-lead">
              Get direct factory pricing, request custom roller profile flower drawings, or schedule
              a live machine trial at our factory located at J-43, Sec-3, Bawana Industrial Area, Delhi.
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
                <span className="studio-type-badge">FACTORY HEADQUARTERS // DELHI</span>
                <h3 className="studio-name">Mala Roll Forming (Mala Engg. Works)</h3>
                <p className="studio-address">
                  J-43, Sec-3, Bawana Industrial Area<br />
                  Delhi – 110039, India
                </p>
                <div className="studio-contact-links">
                  <a href="tel:+919870262404" className="studio-link">📞 +91 9870262404</a>
                  <a href="tel:+919868114107" className="studio-link">📞 +91 9868114107</a>
                  <a href="mailto:malaenggworks@gmail.com" className="studio-link">✉ malaenggworks@gmail.com</a>
                </div>
              </div>

              <div className="studio-block">
                <span className="studio-type-badge">DIRECT SALES & WHATSAPP DESK</span>
                <h3 className="studio-name">Technical Inquiries & Trials</h3>
                <p className="studio-address">
                  Direct calling and WhatsApp support for technical parameters, machine trial bookings, and pan-India dispatch details.
                </p>
                <div className="studio-contact-links">
                  <a href="tel:+919811914107" className="studio-link">📞 +91 9811914107</a>
                  <a href="tel:+919891002404" className="studio-link">📞 +91 9891002404</a>
                </div>
              </div>

              <div className="intake-protocols-card">
                <h4 className="protocols-title">Direct Factory Assurance</h4>
                <p className="protocols-text">
                  We invite every buyer to visit our Bawana facility for live machine testing on their own sheet metal coils.
                  Direct manufacturer rates with complete on-site commissioning and training support.
                </p>
                <div className="protocols-tags">
                  <span className="proto-tag">Live Coil Trials</span>
                  <span className="proto-tag">Pan-India Delivery</span>
                  <span className="proto-tag">1-Year Warranty</span>
                </div>
              </div>
            </div>

            {/* Right Column: Machinery RFQ Intake Form */}
            <div className="contact-form-col reveal delay-2">
              <div className="intake-form-box">
                {submitted ? (
                  <div className="submission-success-card">
                    <div className="success-icon">✓</div>
                    <span className="eyebrow-label">INQUIRY LOGGED</span>
                    <h2 className="success-title">Factory Quotation Requested</h2>
                    <p className="success-desc">
                      Thank you, <strong>{formData.name || 'Customer'}</strong>. Your machinery requirement has been
                      registered at our Bawana works under Inquiry Reference:
                    </p>
                    <div className="reference-code-badge">
                      <span>REF: MRF-2026-{Math.floor(10000 + Math.random() * 90000)}</span>
                    </div>
                    <p className="success-sub">
                      Our machine engineering team will review your specifications and contact you at{' '}
                      <strong>{formData.email || formData.phone}</strong> with complete technical details and factory pricing within 24 hours.
                    </p>
                    <button
                      className="reset-form-btn"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          company: '',
                          location: '',
                          timeline: 'Within 1 Month',
                          message: ''
                        });
                      }}
                    >
                      Submit Another Requirement
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="intake-form">
                    <div className="form-header">
                      <span className="eyebrow-label">MACHINERY QUOTATION REQUEST</span>
                      <h3 className="form-title">Select Machines & Parameters</h3>
                    </div>

                    {/* Machine Multi-Select */}
                    <div className="form-group">
                      <label className="input-group-label">Select Required Machinery</label>
                      <div className="discipline-chips">
                        {machineryList.map(mach => {
                          const isSelected = selectedMachinery.includes(mach);
                          return (
                            <button
                              type="button"
                              key={mach}
                              className={`chip-btn ${isSelected ? 'chip-btn--active' : ''}`}
                              onClick={() => toggleMachine(mach)}
                            >
                              <span className="chip-indicator">{isSelected ? '■' : '□'}</span>
                              <span className="chip-text">{mach}</span>
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
                          placeholder="e.g. Rajesh Sharma"
                          className="field-input"
                        />
                      </div>

                      <div className="form-field">
                        <label htmlFor="phone" className="field-label">Phone / WhatsApp Number *</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +91 9870262404"
                          className="field-input"
                        />
                      </div>
                    </div>

                    <div className="form-row-2">
                      <div className="form-field">
                        <label htmlFor="email" className="field-label">Email Address *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. rajesh@shutterworks.com"
                          className="field-input"
                        />
                      </div>

                      <div className="form-field">
                        <label htmlFor="company" className="field-label">Company / Workshop Name</label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. Shree Ram Rolling Shutters"
                          className="field-input"
                        />
                      </div>
                    </div>

                    <div className="form-row-2">
                      <div className="form-field">
                        <label htmlFor="location" className="field-label">Your Factory Location / City *</label>
                        <input
                          id="location"
                          name="location"
                          type="text"
                          required
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="e.g. Delhi, Jaipur, Ahmedabad, Pune"
                          className="field-input"
                        />
                      </div>

                      <div className="form-field">
                        <label htmlFor="timeline" className="field-label">Purchase Timeline</label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="field-select"
                        >
                          <option value="Immediate (Ready Stock / Running Line)">Immediate (Ready Stock / Running Line)</option>
                          <option value="Within 1 Month">Within 1 Month</option>
                          <option value="Within 2–3 Months">Within 2–3 Months</option>
                          <option value="New Plant Project Planning">New Plant Project Planning</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="message" className="field-label">Machine Specifications & Profile Requirements *</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Detail required profile type (e.g. 75mm shutter slat, T-grid, POP channel, slotted angle), coil thickness (e.g. 0.8mm GI), power supply, and target daily output..."
                        className="field-textarea"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="intake-submit-btn"
                    >
                      <span>{isSubmitting ? 'Submitting Inquiry...' : 'Request Direct Factory Quotation'}</span>
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
            tagline="BUYER FAQ"
            title="Machinery Procurement & Factory Trials"
            description="Clear answers regarding factory visits, coil trial testing, payment options, and pan-India machinery transport."
            className="reveal"
          />

          <div className="faq-grid">
            <div className="faq-card reveal delay-1">
              <span className="faq-num">01</span>
              <h4 className="faq-title">Can I visit the Bawana factory to see live machine trials?</h4>
              <p className="faq-text">
                Yes, absolutely! We welcome all prospective buyers to visit our facility at J-43, Sec-3, Bawana Industrial Area, Delhi-110039. You can inspect machines under fabrication and test running machines with your own sample coils.
              </p>
            </div>

            <div className="faq-card reveal delay-2">
              <span className="faq-num">02</span>
              <h4 className="faq-title">Do you deliver and install machines across India?</h4>
              <p className="faq-text">
                Yes. We handle pan-India dispatch and logistics coordination. Our commissioning technicians can be deputed to your factory to install, align the machine, and provide complete operational training to your operators.
              </p>
            </div>

            <div className="faq-card reveal delay-3">
              <span className="faq-num">03</span>
              <h4 className="faq-title">What is the warranty and spare parts availability?</h4>
              <p className="faq-text">
                All machines come with a 1-year warranty on critical mechanical components. Since all EN-31 rollers, shafts, and cutters are manufactured directly in our Bawana works, replacement spares and extra profile tooling are readily available.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
