import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../Common/SectionTitle';
import ArrowButton from '../Common/ArrowButton';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { handleImageError } from '../../utils/imageFallbacks';
import './Projects.css';

const projectsList = [
  {
    id: 1,
    title: '16-Station Automatic Rolling Shutter Line',
    category: 'Rolling Shutter Lines',
    year: '2026',
    location: 'Delhi NCR Industrial Hub',
    layout: 'large',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop',
    excerpt: 'Continuous automated roll forming line producing 75mm & 100mm shutter patti / slats with EN-31 hardened rollers and hydraulic flying shear cut-off.'
  },
  {
    id: 2,
    title: 'False Ceiling T-Grid & Section Plant',
    category: 'Ceiling & POP Lines',
    year: '2025',
    location: 'Ahmedabad, Gujarat',
    layout: 'medium',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'High-precision ceiling line producing Main Tee, Cross Tee, and intermediate knurled channels with rotary stitching and auto clip punch.'
  },
  {
    id: 3,
    title: 'Continuous Slotted Angle Racking Line',
    category: 'Storage & Racks',
    year: '2026',
    location: 'Pune, Maharashtra',
    layout: 'medium',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Heavy-duty 40x40mm & 50x50mm slotted angle roll forming line with continuous mechanical gang punching press for industrial shelving.'
  },
  {
    id: 4,
    title: 'Hydraulic Sheet Cutter & Spring Coiler Unit',
    category: 'Industrial Shearing',
    year: '2025',
    location: 'Jaipur, Rajasthan',
    layout: 'wide',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
    excerpt: 'Heavy 4mm hydraulic sheet metal shearing machine paired with an automatic rolling shutter tension spring coiling machine for commercial shutters.'
  }
];

const categories = ['All', 'Rolling Shutter Lines', 'Ceiling & POP Lines', 'Storage & Racks', 'Industrial Shearing'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const revealRef = useScrollReveal();

  const filteredProjects = activeCategory === 'All'
    ? projectsList
    : projectsList.filter(p => p.category === activeCategory);

  return (
    <section className="projects-section section-padding" ref={revealRef}>
      <div className="container">
        <SectionTitle
          tagline="FACTORY COMMISSIONS"
          title="Installed Machinery & Production Lines Across India"
          description="A survey of heavy-duty roll forming machinery, automatic shutter lines, and ceiling section setups built at our Bawana works and running at client factories."
          action={
            <ArrowButton to="/projects" variant="outline">
              Full Archive
            </ArrowButton>
          }
          className="reveal"
        />

        {/* Category Filters */}
        <div className="project-filter-bar reveal delay-1">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              <span>{cat}</span>
              <span className="filter-line"></span>
            </button>
          ))}
        </div>

        {/* Editorial Asymmetrical Grid */}
        <div className="editorial-project-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card project-card--${project.layout} reveal delay-${(index % 3) + 1}`}
            >
              <Link to="/projects" className="project-card-inner">
                {/* Media Container with Zoom */}
                <div className="project-media-frame">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                    onError={handleImageError}
                  />
                  <div className="project-overlay"></div>
                  
                  <div className="project-floating-tags">
                    <span className="project-year-badge">{project.year}</span>
                    <span className="project-location-badge">{project.location}</span>
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="project-info-block">
                  <div className="project-meta-top">
                    <span className="project-cat-name">{project.category}</span>
                    <span className="project-view-cta">
                      <span className="cta-txt">View Project</span>
                      <svg className="project-arrow" viewBox="0 0 40 12" fill="none">
                        <line x1="1" y1="6" x2="37" y2="6" stroke="currentColor" strokeWidth="1.4" />
                        <path d="M33 2L37 6L33 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
                      </svg>
                    </span>
                  </div>

                  <h3 className="project-headline">{project.title}</h3>
                  <p className="project-excerpt">{project.excerpt}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
