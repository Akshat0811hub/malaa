import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/Common/SectionTitle';
import ArrowButton from '../components/Common/ArrowButton';
import CTA from '../components/CTA/CTA';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { handleImageError } from '../utils/imageFallbacks';
import './ProjectsPage.css';

const detailedProjects = [
  {
    id: 'proj-01',
    title: 'Nordic Metallurgy Plant & Turbine Hall',
    category: 'Heavy Industry',
    year: '2026',
    location: 'Luleå, Sweden',
    client: 'Nordic Smelting & Metallurgy AG',
    tonnage: '14,800 Tonnes',
    span: '52m Clear Span',
    steelGrade: 'S460ML / S690QL',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop',
    featured: true,
    description: 'A 42,000 m² zero-emission smelting and alloy casting facility engineered with modular high-strength steel arches and high-temperature vibration mitigation systems.',
    highlights: [
      'Subterranean continuous foundation anchoring to Baltic bedrock',
      'High-velocity pneumatic filtration duct integrate frameworks',
      'EN 1090-2 Execution Class 4 validated robotic welds'
    ]
  },
  {
    id: 'proj-02',
    title: 'Bregenz Cantilever Logistics Terminal',
    category: 'Structural Engineering',
    year: '2025',
    location: 'Lake Constance, Austria',
    client: 'Alpine Logistics Consortium',
    tonnage: '6,400 Tonnes',
    span: '38m Cantilever Overhang',
    steelGrade: 'S355J2W Weathering Steel',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    featured: false,
    description: '38-meter column-free structural cantilevers supporting multi-tier automated intermodal freight routing over water edge topography.',
    highlights: [
      'Post-tensioned tie-back cables with active hydraulic tension sensors',
      'Corrosion resistant C5-M atmospheric coating barrier',
      'Wind buffet simulation executed via computational fluid dynamics (CFD)'
    ]
  },
  {
    id: 'proj-03',
    title: 'Gothenburg Cold-Rolled Assembly Node',
    category: 'Industrial Complex',
    year: '2026',
    location: 'Gothenburg, Sweden',
    client: 'Vanguard Industrial Automation',
    tonnage: '9,200 Tonnes',
    span: '44m Column Grid',
    steelGrade: 'S355NH Hollow Structural Sections',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop',
    featured: false,
    description: 'Automated fabrication pavilion constructed with pre-stressed structural steel and high-efficiency thermal insulation enclosures.',
    highlights: [
      'Overhead 50-tonne gantry crane runway beams aligned to sub-millimeter precision',
      'BIM Level 3 direct-to-machine fabrication protocol',
      'Integrated solar thermal envelope with dynamic louvers'
    ]
  },
  {
    id: 'proj-04',
    title: 'Alpine Renewable Pumped-Storage Infrastructure',
    category: 'Infrastructure',
    year: '2025',
    location: 'Valais, Switzerland',
    client: 'Swiss Hydro Energy Federation',
    tonnage: '11,500 Tonnes',
    span: 'Subterranean Cavern 65m',
    steelGrade: 'High-Yield Quenched & Tempered Alloy',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
    featured: true,
    description: 'Monolithic subterranean intake chamber with reinforced steel penstocks engineered to withstand extreme hydrostatic cyclic head pressures.',
    highlights: [
      'High-pressure penstock bifurcations engineered via finite element plastic analysis',
      'Rock bolt anchorage into crystalline Alpine granite',
      'Designed for 120-year operational service lifecycle'
    ]
  },
  {
    id: 'proj-05',
    title: 'Rotterdam Intermodal Maritime Gantry Arch',
    category: 'Infrastructure',
    year: '2025',
    location: 'Rotterdam, Netherlands',
    client: 'EuroPort Terminal Operations',
    tonnage: '8,100 Tonnes',
    span: '78m Portal Frame',
    steelGrade: 'S420ML Structural Plate',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1200&auto=format&fit=crop',
    featured: false,
    description: 'A monumentally scaled maritime transshipment arch enabling dual container barge handling under high North Sea cross-wind loads.',
    highlights: [
      'Tubular space-truss diagonals with cast steel node joints',
      'Autonomous ultrasonic strain gauges deployed across nodal coordinates',
      'Modular floating barge assembly and synchronized crane lifting'
    ]
  },
  {
    id: 'proj-06',
    title: 'Zurich Precision Robotics & Testing Facility',
    category: 'Industrial Complex',
    year: '2026',
    location: 'Zurich North, Switzerland',
    client: 'Helvetia Advanced Mechatronics',
    tonnage: '4,300 Tonnes',
    span: '32m Open Laboratory',
    steelGrade: 'Architectural Exposed Steel (AESS 4)',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    featured: false,
    description: 'Ultra-low vibration research complex engineered with tuned mass dampers to isolate micro-robotic calibration from adjacent rail transit vibrations.',
    highlights: [
      'Acoustic and kinetic decoupling floating concrete floor slabs',
      'Architecturally exposed structural steel with invisible connection bolts',
      'Class 100 cleanroom climate and structural isolation'
    ]
  },
  {
    id: 'proj-07',
    title: 'Kiruna Arctic Mining Logistics Pavilion',
    category: 'Metallurgy',
    year: '2024',
    location: 'Kiruna, Sweden',
    client: 'LKAB Mineral Extraction',
    tonnage: '13,200 Tonnes',
    span: '48m Monolithic Vault',
    steelGrade: 'Sub-Zero Impact Resistant Grade S355K2',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    featured: false,
    description: 'Deep-Arctic ore handling terminal engineered to function continuously at -45°C temperatures under extreme snow and permafrost variations.',
    highlights: [
      'Cryogenic fracture-toughness steel validation testing at -50°C',
      'Heated structural foundation columns to stabilize permafrost thaw cycles',
      'Self-shedding parabolic roof contour minimizing heavy snow pack accumulation'
    ]
  },
  {
    id: 'proj-08',
    title: 'Stuttgart Automated Rail Logistics Shed',
    category: 'Structural Engineering',
    year: '2024',
    location: 'Stuttgart, Germany',
    client: 'Trans-European Freight Hubs',
    tonnage: '7,800 Tonnes',
    span: '60m Long-Span Trusses',
    steelGrade: 'S355J2 + Hot Dip Galvanized',
    image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=1200&auto=format&fit=crop',
    featured: false,
    description: 'Continuous dual-track logistics terminal built with parabolic lattice girders, providing unobstructed loading clearance for heavy rolling stock.',
    highlights: [
      'Lightweight high-efficiency Vierendeel truss systems',
      'Reversible bolt joinery enabling rapid future expansion',
      'High-durability zinc corrosion protection engineered for 75-year maintenance-free lifespan'
    ]
  }
];

const filterCategories = ['All', 'Heavy Industry', 'Structural Engineering', 'Industrial Complex', 'Infrastructure', 'Metallurgy'];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const revealRef = useScrollReveal();

  const filtered = selectedCategory === 'All'
    ? detailedProjects
    : detailedProjects.filter(p => p.category === selectedCategory);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveModalProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (activeModalProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeModalProject]);

  return (
    <div className="page-projects" ref={revealRef}>
      {/* Page Header */}
      <section className="page-hero-banner">
        <div className="container">
          <div className="page-hero-content reveal">
            <span className="eyebrow-label">SELECTED PORTFOLIO</span>
            <h1 className="page-title">
              Monolithic Structures &<br />
              Industrial Architecture
            </h1>
            <p className="page-lead">
              A comprehensive survey of structural frameworks, metallurgy facilities, and heavy
              infrastructure engineered by MALA Engg. Works across Europe.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar & Project Count */}
      <section className="projects-archive-section section-padding">
        <div className="container">
          <div className="archive-top-bar reveal">
            <div className="filter-pill-group">
              {filterCategories.map(cat => (
                <button
                  key={cat}
                  className={`filter-tab-btn ${selectedCategory === cat ? 'is-active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  <span>{cat}</span>
                  <span className="filter-tab-underline"></span>
                </button>
              ))}
            </div>

            <div className="archive-count-meta">
              <span>Showing {filtered.length} of {detailedProjects.length} Structural Commissions</span>
            </div>
          </div>

          {/* Editorial Asymmetric Grid */}
          <div className="archive-projects-grid">
            {filtered.map((item, idx) => (
              <article
                key={item.id}
                className={`archive-card ${item.featured ? 'archive-card--featured' : ''} reveal delay-${(idx % 3) + 1}`}
                onClick={() => setActiveModalProject(item)}
              >
                <div className="archive-media-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="archive-card-image"
                    loading="lazy"
                    onError={handleImageError}
                  />
                  <div className="archive-card-overlay"></div>

                  <div className="archive-tag-strip">
                    <span className="badge-cat">{item.category}</span>
                    <span className="badge-year">{item.year}</span>
                  </div>

                  <div className="archive-hover-cta">
                    <span>Inspect Specification</span>
                    <svg className="cta-arrow" viewBox="0 0 36 12" fill="none">
                      <line x1="1" y1="6" x2="33" y2="6" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M29 2L33 6L29 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
                    </svg>
                  </div>
                </div>

                <div className="archive-card-body">
                  <div className="archive-card-header">
                    <div className="card-location-meta">
                      <span className="location-pin-icon">•</span>
                      <span>{item.location}</span>
                    </div>
                    <span className="card-tonnage">{item.tonnage}</span>
                  </div>

                  <h3 className="archive-card-title">{item.title}</h3>
                  <p className="archive-card-desc">{item.description}</p>

                  <div className="card-specs-bar">
                    <div className="spec-item">
                      <span className="spec-k">Clear Span</span>
                      <span className="spec-v">{item.span}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-k">Steel Grade</span>
                      <span className="spec-v">{item.steelGrade}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Project Detail Modal */}
      {activeModalProject && (
        <div className="project-modal-backdrop" onClick={() => setActiveModalProject(null)}>
          <div className="project-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setActiveModalProject(null)}
              aria-label="Close Project Detail"
            >
              ✕
            </button>

            <div className="modal-media-col">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="modal-image"
                onError={handleImageError}
              />
              <div className="modal-media-caption">
                <span>{activeModalProject.title} — {activeModalProject.location}</span>
              </div>
            </div>

            <div className="modal-info-col">
              <div className="modal-eyebrow">
                <span className="eyebrow-label">{activeModalProject.category}</span>
                <span className="modal-year-stamp">COMMISSIONED {activeModalProject.year}</span>
              </div>

              <h2 className="modal-title">{activeModalProject.title}</h2>
              <p className="modal-desc">{activeModalProject.description}</p>

              <div className="modal-meta-grid">
                <div className="meta-box">
                  <span className="meta-label">Client</span>
                  <span className="meta-val">{activeModalProject.client}</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">Location</span>
                  <span className="meta-val">{activeModalProject.location}</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">Structural Tonnage</span>
                  <span className="meta-val">{activeModalProject.tonnage}</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">Clear Span</span>
                  <span className="meta-val">{activeModalProject.span}</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">Specified Metallurgy</span>
                  <span className="meta-val">{activeModalProject.steelGrade}</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">BIM Standards</span>
                  <span className="meta-val">Level 3 / IFC 4.3 Compliant</span>
                </div>
              </div>

              <div className="modal-highlights">
                <h4 className="highlights-heading">Structural Engineering Verification</h4>
                <ul className="highlights-list">
                  {activeModalProject.highlights.map((h, i) => (
                    <li key={i} className="highlight-item">
                      <span className="highlight-bullet">—</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-actions">
                <ArrowButton to="/contact" variant="outline">
                  Inquire For Similar Scope
                </ArrowButton>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Footer */}
      <CTA />
    </div>
  );
}
