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
    category: 'Structural Metallurgy',
    date: 'February 12, 2026',
    title: 'Advancements in High-Yield Structural Steels for Megastructures',
    excerpt: 'Examining how thermo-mechanically controlled rolling processes are transforming load capacity across European infrastructure.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 2,
    category: 'Engineering Analysis',
    date: 'January 28, 2026',
    title: 'Algorithmic Optimization in Long-Span Industrial Roof Trusses',
    excerpt: 'Deploying evolutionary algorithms to reduce truss mass by 28% while simultaneously increasing deflection resistance.',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 3,
    category: 'Circular Construction',
    date: 'January 14, 2026',
    title: 'Reversible Mechanical Joints for Industrial Deconstruction',
    excerpt: 'Developing standardized high-strength friction-grip bolted assemblies for closed-loop lifecycle infrastructure.',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=900&auto=format&fit=crop'
  }
];

export default function Insights() {
  const revealRef = useScrollReveal();

  return (
    <section className="insights-section section-padding" ref={revealRef}>
      <div className="container">
        <SectionTitle
          tagline="LATEST INSIGHTS"
          title="Research, Publications & Engineering Whitepapers"
          description="Technical dispatches, metallurgical analyses, and case studies authored by our structural engineering and computational design specialists."
          action={
            <ArrowButton to="/about" variant="outline">
              All Articles
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
