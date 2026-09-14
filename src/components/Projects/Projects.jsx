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
    title: 'Nordic Metallurgy Plant & Turbine Hall',
    category: 'Heavy Industry',
    year: '2026',
    location: 'Luleå, Sweden',
    layout: 'large', // editorial layout flag
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop',
    excerpt: 'A 42,000 m² zero-emission smelting and alloy casting facility engineered with modular high-strength steel arches.'
  },
  {
    id: 2,
    title: 'Bregenz Cantilever Logistics Terminal',
    category: 'Structural Engineering',
    year: '2025',
    location: 'Lake Constance, Austria',
    layout: 'medium',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    excerpt: '38-meter column-free structural cantilevers supporting multi-tier automated intermodal freight routing.'
  },
  {
    id: 3,
    title: 'Gothenburg Cold-Rolled Assembly Node',
    category: 'Industrial Complex',
    year: '2026',
    location: 'Gothenburg, Sweden',
    layout: 'medium',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Automated fabrication pavilion constructed with pre-stressed structural steel and high-efficiency thermal insulation.'
  },
  {
    id: 4,
    title: 'Alpine Renewable Pumped-Storage Infrastructure',
    category: 'Infrastructure',
    year: '2025',
    location: 'Valais, Switzerland',
    layout: 'wide',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
    excerpt: 'Monolithic subterranean intake chamber with subterranean reinforced concrete tunnels designed for high-head hydraulic loads.'
  }
];

const categories = ['All', 'Heavy Industry', 'Structural Engineering', 'Industrial Complex', 'Infrastructure'];

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
          tagline="SELECTED PROJECTS"
          title="Architectural Precision at Industrial Scale"
          description="A curated selection of our most demanding structural and architectural commissions delivered across Scandinavia and Central Europe."
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
