import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/Common/SectionTitle';
import ArrowButton from '../components/Common/ArrowButton';
import CTA from '../components/CTA/CTA';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { handleImageError } from '../utils/imageFallbacks';
import banner3 from '../assets/banner 3.png';
import './ProjectsPage.css';

const detailedProjects = [
  {
    id: 'proj-01',
    title: '16-Station Automatic Rolling Shutter Line',
    category: 'Rolling Shutter Lines',
    year: '2026',
    location: 'Mayapuri Industrial Area, Delhi',
    client: 'Shree Ram Rolling Shutters',
    tonnage: '20 m/min Speed',
    span: '75mm & 100mm Slat',
    steelGrade: 'EN-31 Hardened (62 HRC)',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop',
    featured: true,
    description: 'High-speed automated production line for commercial rolling shutter patti / slats with motorized uncoiler, EN-31 hardened tooling rollers, and continuous PLC flying shear cut-off.',
    highlights: [
      'Continuous production speed up to 20 m/min with zero slat scratching',
      'Hydraulic flying shear cutoff synchronized via high-resolution optical encoder',
      'Heavy ISMC channel bed with reduction gearbox transmission for 24×7 commercial duty'
    ]
  },
  {
    id: 'proj-02',
    title: 'False Ceiling T-Grid Automated Line Setup',
    category: 'False Ceiling Lines',
    year: '2025',
    location: 'Ahmedabad Industrial Zone, Gujarat',
    client: 'Gujarat Ceiling Systems',
    tonnage: '25 m/min Speed',
    span: 'Main & Cross Tee',
    steelGrade: 'D3 / EN-31 Tool Steel',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop',
    featured: false,
    description: 'Complete automated manufacturing plant for modular false ceiling T-grid profiles with continuous rotary stitching, auto hole punching, and alloy clip insertion.',
    highlights: [
      'High-speed rotary stitching disc ensuring tight web seam between body and capping strip',
      'Automated clip riveting unit delivering 100% secure connection fitment',
      'Pre-punched hanger wire holes and cross-tee interlocking slots'
    ]
  },
  {
    id: 'proj-03',
    title: 'Continuous Slotted Angle Roll Forming Plant',
    category: 'Racking & Angles',
    year: '2026',
    location: 'Chakan Industrial Belt, Pune',
    client: 'Apex Storage Racks & Shelving',
    tonnage: '15 m/min (Continuous)',
    span: '40×40 & 50×50mm',
    steelGrade: 'Heavy HCHCR & EN-31',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    featured: false,
    description: 'Integrated continuous roll forming line paired with a high-tonnage mechanical gang-punch press for slotted angles used in commercial warehouse storage racks.',
    highlights: [
      'Continuous mechanical gang punch press punching oval and round slots before forming',
      'Heavy structural steel frame absorbing continuous mechanical press shocks',
      'Precision hole-to-cut synchronization preventing misaligned shelving holes'
    ]
  },
  {
    id: 'proj-04',
    title: 'P.O.P. Channel & Drywall Stud High-Speed Line',
    category: 'False Ceiling Lines',
    year: '2025',
    location: 'Jaipur Industrial Area, Rajasthan',
    client: 'National Gypsum & Drywall Corp',
    tonnage: '28 m/min Speed',
    span: 'POP & Stud Profiles',
    steelGrade: 'EN-31 Hard Chrome Plated',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
    featured: true,
    description: 'High-output drywall gypsum framing line with specialized embossing knurling rollers that imprint anti-slip textures for self-tapping drywall screws.',
    highlights: [
      'Knurling embossing rollers creating non-slip surface for self-tapping screws',
      'Dual-cone motorized decoiler for rapid coil changeover and zero downtime',
      'Hydraulic post-cut die delivering clean 90-degree square cuts without deformation'
    ]
  },
  {
    id: 'proj-05',
    title: 'Rolling Shutter Guide Slide & U-Channel System',
    category: 'Rolling Shutter Lines',
    year: '2025',
    location: 'Bawana Industrial Area, Delhi',
    client: 'North India Shutter Components',
    tonnage: '18 m/min Speed',
    span: '65mm, 75mm, 100mm',
    steelGrade: 'EN-31 Vacuum Hardened',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1200&auto=format&fit=crop',
    featured: false,
    description: 'Heavy roll forming line dedicated to shutter guide channels and slide rails up to 2.0mm thickness, ensuring parallel edges and smooth shutter travel.',
    highlights: [
      'Vertical side-guide stands preventing sideways channel bowing',
      'Engineered for deep-groove wind-lock guide profiles',
      'Flying shear cutting die producing clean burr-free ends'
    ]
  },
  {
    id: 'proj-06',
    title: 'Heavy Hydraulic Sheet Shearing Machine Setup',
    category: 'Shearing & Spring Units',
    year: '2026',
    location: 'Faridabad Industrial Sector, Haryana',
    client: 'Pinnacle Sheet Metal Fabricators',
    tonnage: 'Up to 4.0 mm Sheet',
    span: '2000mm Bed Length',
    steelGrade: 'HCHCR D2 Reversible Blades',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    featured: false,
    description: 'Industrial hydraulic guillotine sheet shearing machine engineered for high-precision, clean cutting of mild steel, galvanized, and stainless steel sheets.',
    highlights: [
      'HCHCR D2 4-edge reversible shearing blades with minimal rake angle',
      'Compact low-noise hydraulic power pack with overload protection',
      'Motorized digital back gauge for quick cut-length adjustment'
    ]
  },
  {
    id: 'proj-07',
    title: 'Automatic Rolling Shutter Spring Coiling Unit',
    category: 'Shearing & Spring Units',
    year: '2024',
    location: 'Ghaziabad Industrial Zone, UP',
    client: 'Capital Shutter Hardware Works',
    tonnage: '< 60 Sec / Coil',
    span: '3.0mm – 8.0mm Wire',
    steelGrade: 'Hardened Alloy Tooling Cam',
    image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=1200&auto=format&fit=crop',
    featured: false,
    description: 'Automatic high-tension wire spring coiling machine delivering uniform pitch and extended fatigue life for rolling shutter counterbalance assemblies.',
    highlights: [
      'Automatic cam-guided pitch expansion for consistent spring rate',
      'High-torque reduction gear drive handling heavy Grade-II spring steel wire',
      'Rapid spring OD diameter adjustment from 50mm to 150mm'
    ]
  },
  {
    id: 'proj-08',
    title: 'Shutter Bottom Lock Plate & Punching Line',
    category: 'Rolling Shutter Lines',
    year: '2025',
    location: 'Ludhiana Industrial Focal Point, Punjab',
    client: 'Security Shutter Systems Ltd.',
    tonnage: '15 m/min Speed',
    span: 'Heavy Bottom Stiffener',
    steelGrade: 'EN-31 / D3 Tool Steel',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
    featured: false,
    description: 'Heavy roll forming line with integrated hydraulic lock-hole punching for bottom shutter plates and interlocking stiffener channels.',
    highlights: [
      'Hydraulic gang punch unit creating padlock slots and rivet holes',
      'Heavy structural steel bed ensuring long-term roll alignment',
      'Delta PLC control panel with automated order quantity presets'
    ]
  }
];

const filterCategories = ['All', 'Rolling Shutter Lines', 'False Ceiling Lines', 'Racking & Angles', 'Shearing & Spring Units'];

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
      window.__lenis?.stop();
    } else {
      document.body.style.overflow = 'unset';
      window.__lenis?.start();
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.__lenis?.start();
    };
  }, [activeModalProject]);

  return (
    <div className="page-projects" ref={revealRef}>
      {/* Page Header */}
      <section className="page-hero-banner">
        <div className="page-hero-banner-bg">
          <img
            src={banner3}
            alt="Installed Roll Forming Machinery and Production Lines Pan-India"
            className="page-hero-banner-img"
            onError={handleImageError}
          />
          <div className="page-hero-banner-scrim"></div>
        </div>
        <div className="container">
          <div className="page-hero-content reveal">
            <span className="eyebrow-label">MACHINE COMMISSIONS • PAN-INDIA</span>
            <h1 className="page-title">
              Installed Machinery &<br />
              Client Production Lines
            </h1>
            <p className="page-lead">
              A comprehensive survey of heavy-duty roll forming machinery, automatic rolling shutter lines,
              false ceiling systems, and sheet shearing equipment engineered and commissioned across India by Mala Roll Forming.
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
              <span>Showing {filtered.length} of {detailedProjects.length} Machinery Installations</span>
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
                      <span className="spec-k">Profile Spec</span>
                      <span className="spec-v">{item.span}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-k">Tooling Grade</span>
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
              aria-label="Close Machine Detail"
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
                  <span className="meta-label">Output Capacity</span>
                  <span className="meta-val">{activeModalProject.tonnage}</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">Profile Specification</span>
                  <span className="meta-val">{activeModalProject.span}</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">Tooling Metallurgy</span>
                  <span className="meta-val">{activeModalProject.steelGrade}</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">Automation Standards</span>
                  <span className="meta-val">Delta / Schneider PLC</span>
                </div>
              </div>

              <div className="modal-highlights">
                <h4 className="highlights-heading">Key Technical & Operational Highlights</h4>
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
                  Inquire For Similar Setup
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
