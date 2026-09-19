import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../Common/SectionTitle';
import ArrowButton from '../Common/ArrowButton';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { handleImageError } from '../../utils/imageFallbacks';
import './Insights.css';

const articles = [
  {
    id: 1,
    category: 'Machinery Guide',
    date: 'Industrial Guide',
    title: 'Automatic Rolling Shutter Machine: Stations, Thickness & Flying Shear Output',
    excerpt: 'A technical guide on selecting the right roll forming line, station count (12 vs 16 stations), and flying cutter benefits for shutter patti production.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 2,
    category: 'Tooling Metallurgy',
    date: 'Tooling Whitepaper',
    title: 'Why EN-31 & D3 Hardened Rollers Prevent Profile Distortion & Slat Scratching',
    excerpt: 'Why vacuum hardening to 60–62 HRC and hard chrome plating are essential for handling galvanized and pre-painted sheet coils without roller wear.',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 3,
    category: 'Ceiling & POP Setup',
    date: 'Setup Advisory',
    title: 'Starting a False Ceiling T-Grid & POP Channel Manufacturing Unit in India',
    excerpt: 'Key machinery requirements, rotary stitching mechanisms, power load, and daily production capacity for profitable false ceiling profile supply.',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=900&auto=format&fit=crop'
  }
];

export default function Insights() {
  const revealRef = useScrollReveal();

  return (
    <section className="insights-section section-padding" ref={revealRef}>
      <div className="container">
        <SectionTitle
          tagline="TECHNICAL GUIDES"
          title="Roll Forming Knowledge & Machine Guides"
          description="Practical manufacturing guides, tooling steel analyses, and plant setup advice from the engineering team at Mala Roll Forming, Bawana Delhi."
          action={
            <ArrowButton to="/services" variant="outline">
              All Machines
            </ArrowButton>
          }
          className="reveal"
        />

        <div className="insights-grid">
          {articles.map((article, idx) => (
            <article key={article.id} className={`insight-card reveal delay-${idx + 1}`}>
              <Link to="/about" className="insight-card-link">
                <div className="insight-media-wrap">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="insight-image"
                    loading="lazy"
                    onError={handleImageError}
                  />
                  <div className="insight-media-overlay"></div>
                </div>

                <div className="insight-meta">
                  <span className="insight-category">{article.category}</span>
                  <span className="insight-date">{article.date}</span>
                </div>

                <h3 className="insight-title">
                  <span className="insight-title-text">{article.title}</span>
                  <span className="insight-title-underline"></span>
                </h3>

                <p className="insight-excerpt">{article.excerpt}</p>

                <div className="insight-read-more">
                  <span className="read-more-text">Read Article</span>
                  <svg className="read-more-arrow" viewBox="0 0 32 12" fill="none">
                    <line x1="1" y1="6" x2="29" y2="6" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M25 2L29 6L25 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" />
                  </svg>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
