import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Testimonials.css';

const testimonialsList = [
  {
    id: 1,
    quote: "Precision, quality, and structural consistency define every complex framework delivered by the MALAA engineering team. Their metallurgical expertise on the Luleå terminal saved us four months of assembly time.",
    author: "Henrik Lindqvist",
    title: "Chief Technical Officer",
    company: "Nordic Smelting & Metallurgy AG",
    location: "Stockholm"
  },
  {
    id: 2,
    quote: "In thirty years of industrial project development, I have rarely encountered a team that harmonizes structural engineering rigor with architectural clarity so seamlessly.",
    author: "Elena Rostova-Meier",
    title: "Head of Infrastructure Development",
    company: "Alpine Logistics Consortium",
    location: "Zurich"
  },
  {
    id: 3,
    quote: "Their computational stress simulations and custom cantilever joints allowed us to realize an open-span design that others deemed technically unfeasible.",
    author: "Marcus Vane",
    title: "Principal Partner",
    company: "Studio Vane Architects",
    location: "Vienna"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const revealRef = useScrollReveal();

  const current = testimonialsList[currentIndex];

  return (
    <section className="testimonials-section section-padding" ref={revealRef}>
      <div className="container">
        <div className="testimonial-card-wrap reveal">
          <div className="testimonial-eyebrow">
            <span className="eyebrow-label">CLIENT TESTIMONIALS</span>
            <span className="testimonial-tracker">
              0{currentIndex + 1} / 0{testimonialsList.length}
            </span>
          </div>

          <div className="testimonial-quote-area">
            {/* Minimalist large quotation mark */}
            <div className="quote-mark" aria-hidden="true">“</div>

            <blockquote className="quote-body" key={current.id}>
              "{current.quote}"
            </blockquote>

            <div className="quote-attribution">
              <div className="author-name">{current.author}</div>
              <div className="author-credentials">
                {current.title} — <span className="company-text">{current.company}</span> ({current.location})
              </div>
            </div>
          </div>

          {/* Minimalist Tab Navigation */}
          <div className="testimonial-controls">
            <div className="control-tabs">
              {testimonialsList.map((item, idx) => (
                <button
                  key={item.id}
                  className={`tab-btn ${currentIndex === idx ? 'tab-btn--active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Show testimonial ${idx + 1}`}
                >
                  <span className="tab-num">0{idx + 1}</span>
                  <span className="tab-author-preview">{item.author.split(' ')[1]}</span>
                </button>
              ))}
            </div>

            <div className="arrow-controls">
              <button
                className="testimonial-nav-btn"
                onClick={() => setCurrentIndex((prev) => (prev === 0 ? testimonialsList.length - 1 : prev - 1))}
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button
                className="testimonial-nav-btn"
                onClick={() => setCurrentIndex((prev) => (prev === testimonialsList.length - 1 ? 0 : prev + 1))}
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
