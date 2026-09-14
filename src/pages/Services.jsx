import React, { useState } from 'react';
import SectionTitle from '../components/Common/SectionTitle';
import ArrowButton from '../components/Common/ArrowButton';
import CTA from '../components/CTA/CTA';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { handleImageError } from '../utils/imageFallbacks';
import './ServicesPage.css';

const detailedDisciplines = [
  {
    id: '01',
    slug: 'structural-engineering',
    title: 'Structural Engineering & Analysis',
    tagline: 'Computational Statics, Dynamics & Seismic Engineering',
    lead: 'We perform multi-variable finite element analysis and non-linear dynamic modeling to construct frameworks with exceptional load-to-weight ratios.',
    deliverables: [
      '3D Finite Element Method (FEM) Static & Dynamic Modeling',
      'Non-linear Pushover & Seismic Fragility Analysis',
      'Wind Tunnel Aerodynamic Load Verification',
      'Eurocode 3 & Swiss SIA 263 Fully Certified Calculations'
    ],
    software: ['ANSYS Mechanical', 'Dlubal RFEM 6', 'Grasshopper / Karamba3D', 'Tekla Structures'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '02',
    slug: 'industrial-fabrication',
    title: 'Industrial Heavy Fabrication',
    tagline: 'Precision Metallurgy & Submerged Arc Robotic Assembly',
    lead: 'Operating two proprietary European fabrication facilities with direct rail access, handling single structural steel members up to 85 tonnes.',
    deliverables: [
      'Multi-axis CNC Plasma & Laser Profiling',
      'Automated Submerged Arc Beam Welding (SAW)',
      '100% Ultrasonic & Radiographic Weld Inspection',
      'C5-M Heavy Industrial Protective Coating Systems'
    ],
    software: ['RobotStudio', 'SigmaNEST', 'Tekla PowerFab', 'WeldEye QMS'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '03',
    slug: 'project-development',
    title: 'Project Development & BIM Coordination',
    tagline: 'Model-Based Execution & Parametric Constructability',
    lead: 'BIM Level 3 integration connecting initial architectural sketches directly to CNC fabrication tooling, eliminating dimensional discrepancies.',
    deliverables: [
      'Federated 4D/5D Building Information Models',
      'Automated Clash Detection & Resolution Protocols',
      'Parametric Steel Joint Detailing',
      'Site Logistics Sequencing & Crane Positioning Models'
    ],
    software: ['Autodesk Revit', 'Navisworks Manage', 'Solibri Model Checker', 'Trimble Connect'],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '04',
    slug: 'engineering-solutions',
    title: 'Specialized Industrial Solutions',
    tagline: 'Extreme High-Heat, Off-Shore & Subterranean Environments',
    lead: 'Custom engineering solutions for heavy metallurgy smelters, high-temperature chemical facilities, and corrosive marine intermodal hubs.',
    deliverables: [
      'High-Temperature Thermal Expansion Joints (up to 850°C)',
      'Vibration Isolation for 5,000-Tonne Dynamic Forging Presses',
      'Corrosive Atmospheric Barrier Engineering',
      'Pre-stressed Post-Tensioned Subterranean Anchor Ties'
    ],
    software: ['Abaqus FEA', 'COMSOL Multiphysics', 'AutoPIPE', 'SAP2000'],
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '05',
    slug: 'construction-management',
    title: 'Construction & Erection Oversight',
    tagline: 'Turnkey On-Site Engineering Management',
    lead: 'Resident structural directors stationed on-site to verify millimeter tolerances, validate torque-controlled bolt tensions, and guarantee zero site accidents.',
    deliverables: [
      'Independent Resident Engineering Supervision',
      'Real-Time Laser Tracker Geometric Verification',
      'Bolt Pretension Verification via Ultrasonic Sensor Bolts',
      'Turnkey As-Built Structural Certification Handover'
    ],
    software: ['Leica Geosystems Cyclone', 'FARO Scene', 'Procore', 'PlanGrid'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '06',
    slug: 'technical-consulting',
    title: 'Forensics & Technical Consulting',
    tagline: 'Structural Integrity Diagnostics & Asset Repurposing',
    lead: 'Scientific investigation into structural fatigue, micro-fissure propagation, and structural capacity upgrades for 20th-century industrial complexes.',
    deliverables: [
      'Non-Destructive Ultrasonic & Eddy-Current Testing',
      'Remaining Fatigue Life Mathematical Predictions',
      'Carbon-Fiber Reinforced Polymer (CFRP) Strengthening',
      'Circular Industrial Adaptive Reuse Assessments'
    ],
    software: ['Olympus NDT Suite', 'DIANA FEA', 'Mathcad', 'OpenSees'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop'
  }
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(detailedDisciplines[0].id);
  const revealRef = useScrollReveal();

  const selected = detailedDisciplines.find(d => d.id === activeTab) || detailedDisciplines[0];

  return (
    <div className="page-services" ref={revealRef}>
      {/* Services Hero Header */}
      <section className="page-hero-banner">
        <div className="container">
          <div className="page-hero-content reveal">
            <span className="eyebrow-label">CORE CAPABILITIES</span>
            <h1 className="page-title">
              Engineering Disciplines &<br />
              Industrial Fabrication
            </h1>
            <p className="page-lead">
              From advanced computational structural physics to heavy robotic steel assembly,
              MALAA provides end-to-end capabilities certified to the highest European standards.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Discipline Explorer */}
      <section className="discipline-explorer section-padding">
        <div className="container">
          <div className="explorer-layout">
            {/* Left Selector List */}
            <div className="explorer-sidebar reveal">
              <span className="sidebar-header">SELECT DISCIPLINE</span>
              <div className="discipline-nav-list">
                {detailedDisciplines.map((item) => (
                  <button
                    key={item.id}
                    className={`nav-discipline-btn ${activeTab === item.id ? 'is-active' : ''}`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <span className="btn-num">{item.id}</span>
                    <span className="btn-title">{item.title}</span>
                    <span className="btn-arrow">→</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Detailed Panel */}
            <div className="explorer-panel reveal delay-1" key={selected.id}>
              <div className="panel-media-wrap">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="panel-img"
                  loading="lazy"
                  onError={handleImageError}
                />
                <div className="panel-overlay"></div>
                <div className="panel-badge">
                  <span>DISCIPLINE SPECIFICATION // {selected.id}</span>
                </div>
              </div>

              <div className="panel-content">
                <div className="panel-eyebrow">{selected.tagline}</div>
                <h2 className="panel-title">{selected.title}</h2>
                <p className="panel-lead">{selected.lead}</p>

                <div className="panel-columns">
                  <div className="panel-col">
                    <h4 className="col-subheading">Key Deliverables & Verification</h4>
                    <ul className="panel-bullet-list">
                      {selected.deliverables.map((deliv, idx) => (
                        <li key={idx} className="bullet-row">
                          <span className="bullet-point">/</span>
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="panel-col">
                    <h4 className="col-subheading">Analytical & Fabrication Suites</h4>
                    <div className="software-pills">
                      {selected.software.map((sw, idx) => (
                        <span key={idx} className="software-pill">{sw}</span>
                      ))}
                    </div>

                    <div className="panel-action-box">
                      <p className="inquire-lead">Need custom calculations for this discipline?</p>
                      <ArrowButton to="/contact" variant="outline">
                        Request Technical Scope
                      </ArrowButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards & Certifications Bar */}
      <section className="standards-section section-padding">
        <div className="container">
          <SectionTitle
            tagline="COMPLIANCE & TESTING"
            title="Rigorous European Certifications"
            description="Our fabrication hubs and structural designs are audited annually by external accreditation bodies to guarantee unwavering structural safety."
            className="reveal"
          />

          <div className="standards-grid">
            <div className="standard-card reveal delay-1">
              <span className="std-code">EN 1090-2</span>
              <h4 className="std-title">Execution Class 4 (EXC4)</h4>
              <p className="std-text">Highest certification class for critical structural steelworks subjected to dynamic fatigue loads.</p>
            </div>
            <div className="standard-card reveal delay-2">
              <span className="std-code">ISO 3834-2</span>
              <h4 className="std-title">Comprehensive Fusion Welding</h4>
              <p className="std-text">Full traceability of welding procedures, robotic arc parameters, and personnel accreditation.</p>
            </div>
            <div className="standard-card reveal delay-3">
              <span className="std-code">SIA 263</span>
              <h4 className="std-title">Swiss Steel Building Code</h4>
              <p className="std-text">Compliant with Swiss Society of Engineers & Architects high-standard seismic criteria.</p>
            </div>
            <div className="standard-card reveal delay-4">
              <span className="std-code">BIM Level 3</span>
              <h4 className="std-title">Fully Integrated Digital Twin</h4>
              <p className="std-text">Direct computational coupling between finite element simulation models and robotic CNC fabrication.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
