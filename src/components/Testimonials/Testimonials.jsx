import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Testimonials.css';

const testimonialsList = [
  {
    id: 1,
    quote: "Installed a 16-station Automatic Rolling Shutter line from Bawana works. The EN-31 hardened rollers deliver completely distortion-free patti profiles even on 1.0mm GI sheet. Daily 3+ tonnes output with zero breakdown.",
    author: "Rajesh Sharma",
    title: "Managing Director",
    company: "Shree Ram Rolling Shutters",
    location: "Mayapuri Industrial Area, Delhi"
  },
  {
    id: 2,
    quote: "Their T-Grid false ceiling machine and POP channel line have been running at our plant for 3 years now. Rotary stitching and clip punching systems work seamlessly with instant Bawana factory support.",
    author: "Amit Patel",
    title: "Proprietor",
    company: "Gujarat Ceiling Systems",
    location: "Ahmedabad, Gujarat"
  },
  {
    id: 3,
    quote: "Mala Engg. Works supplied us an integrated Slotted Angle machine and a heavy hydraulic sheet shearing machine. The chassis rigidity and continuous gang-punching performance are top notch.",
    author: "Vikram Deshmukh",
    title: "Operations Head",
    company: "Apex Storage Racks & Shelving",
    location: "Pune, Maharashtra"
  },
  {
    id: 4,
    quote: "Commissioned their industrial sheet shearing line and shutter spring machine. High speed, burr-free shearing and heavy bed fabrication ensure rock-solid production round the clock.",
    author: "Sanjay Singhal",
    title: "Director",
    company: "Singhal Steel Fabricators",
    location: "Ghaziabad, Uttar Pradesh"
  }
];

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const revealRef = useScrollReveal();

  const totalPages = Math.ceil(testimonialsList.length / 2);
  const currentPair = testimonialsList.slice(page * 2, page * 2 + 2);

  const prevPage = () => {
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextPage = () => {
    setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section className="testimonials-section section-padding" ref={revealRef}>
      <div className="container">
        <div className="testimonials-header reveal">
          <div className="testimonials-title-wrap">
            <span className="eyebrow-label">CLIENT TESTIMONIALS</span>
            <h2 className="testimonials-heading">Trusted by Industrial Manufacturers Across India</h2>
          </div>
          <div className="testimonials-controls">
            <span className="testimonials-page-counter">
              0{page + 1} / 0{totalPages}
            </span>
            <div className="testimonials-arrows">
              <button
                className="testimonial-nav-btn"
                onClick={prevPage}
                aria-label="Previous testimonials"
              >
                ←
              </button>
              <button
                className="testimonial-nav-btn"
                onClick={nextPage}
                aria-label="Next testimonials"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div className="testimonials-dual-grid" key={page}>
          {currentPair.map((item, idx) => (
            <div
              key={item.id}
              className={`testimonial-compact-card reveal delay-${idx + 1}`}
            >
              <div className="compact-card-top">
                <span className="compact-badge">VERIFIED CLIENT</span>
                <span className="compact-quote-mark" aria-hidden="true">“</span>
              </div>
              <p className="compact-quote-text">"{item.quote}"</p>
              <div className="compact-author-block">
                <div className="compact-author-name">{item.author}</div>
                <div className="compact-author-meta">
                  <span className="author-title-text">{item.title}</span> — <span className="compact-company">{item.company}</span>
                </div>
                <div className="compact-author-location">{item.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
