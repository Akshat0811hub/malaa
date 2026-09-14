import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../Common/SectionTitle';
import ArrowButton from '../Common/ArrowButton';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Services.css';

const servicesData = [
  {
    id: '01',
    title: 'Structural Engineering',
    description: 'Finite element structural modeling, seismic load optimization, and load-bearing framework design for monumental industrial developments.',
    specs: ['Computational Stress Analysis', 'Parametric Steel Frameworks', 'Seismic Resilience']
  },
  {
    id: '02',
    title: 'Industrial Fabrication',
    description: 'Heavy structural metallurgy, custom high-tensile steel assemblies, and automated robotic welding protocols adhering to EN 1090-2 EXC4.',
    specs: ['Automated Arc Welding', 'High-Tolerance Subassemblies', 'Corrosion Shielding']
  },
  {
    id: '03',
    title: 'Project Development',
    description: 'Comprehensive technical planning, lifecycle risk mitigation, environmental compliance, and site-specific structural logistics management.',
    specs: ['Site Feasibility Studies', 'BIM Level 3 Coordination', 'Zoning & Permitting']
  },
  {
    id: '04',
    title: 'Engineering Solutions',
    description: 'Custom structural interventions for demanding industrial contexts, including high-heat smelters, offshore terminals, and logistics hubs.',
    specs: ['Dynamic Load Mitigation', 'Thermal Expansion Tuning', 'Modular Cantilevers']
  },
  {
    id: '05',
    title: 'Construction Management',
    description: 'Rigorous on-site execution oversight, contractor quality auditing, milestone tracking, and safety compliance under Swiss/Nordic standards.',
    specs: ['Turnkey Site Supervision', 'Quality Verification Protocols', 'Zero-Harm Safety Systems']
  },
  {
    id: '06',
    title: 'Technical Consulting',
    description: 'Independent structural forensics, legacy infrastructure reinforcement diagnostics, and decarbonization strategies for existing assets.',
    specs: ['Non-Destructive Testing', 'Adaptive Reuse Engineering', 'Carbon Lifecycle Audits']
  }
];

export default function Services() {
  const revealRef = useScrollReveal();

  return (
    <section className="services-section section-padding" ref={revealRef}>
      <div className="container">
        <SectionTitle
          tagline="OUR EXPERTISE"
          title="Engineered for Endurance"
          description="We deliver full-spectrum engineering capabilities from initial computational analysis to precision heavy fabrication and on-site assembly."
          action={
            <ArrowButton to="/services" variant="outline">
              All Disciplines
            </ArrowButton>
          }
          className="reveal"
        />

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`service-card reveal delay-${(index % 3) + 1}`}
            >
              <div className="service-card-top">
                <span className="service-number">{service.id}</span>
                <span className="service-discipline-tag">DISCIPLINE</span>
              </div>

              <div className="service-card-body">
                <h3 className="service-title">
                  <span className="title-text">{service.title}</span>
                  <span className="service-underline"></span>
                </h3>
                <p className="service-desc">{service.description}</p>

                <ul className="service-specs-list">
                  {service.specs.map((spec, i) => (
                    <li key={i} className="spec-bullet">
                      <span className="bullet-dash">—</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-card-footer">
                <Link to="/services" className="service-link">
                  <span className="service-link-text">Explore Capability</span>
                  <svg className="service-arrow" viewBox="0 0 36 12" fill="none">
                    <line x1="1" y1="6" x2="33" y2="6" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M29 2L33 6L29 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
