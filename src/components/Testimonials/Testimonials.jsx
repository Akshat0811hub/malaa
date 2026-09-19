import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Testimonials.css';

const testimonialsList = [
  {
    id: 1,
    quote: "We installed a 16-station Automatic Rolling Shutter Machine from Mala Roll Forming in Bawana. The EN-31 hardened rollers give completely distortion-free patti profiles even on 1.0mm heavy GI sheet. The PLC flying shear cuts with millimeter precision, running 3+ tonnes daily with zero breakdown.",
    author: "Rajesh Sharma",
    title: "Managing Director",
    company: "Shree Ram Rolling Shutters",
    location: "Mayapuri Industrial Area, Delhi"
  },
  {
    id: 2,
    quote: "Their T-Grid false ceiling machine and POP channel line have been running at our plant for three years now. The rotary stitching and clip punching systems work seamlessly. Whenever we need extra tooling or spare rollers, their Bawana team provides instant factory support.",
    author: "Amit Patel",
    title: "Proprietor",
    company: "Gujarat Ceiling Systems",
    location: "Ahmedabad, Gujarat"
  },
  {
    id: 3,
    quote: "Mala Engg. Works supplied us an integrated Slotted Angle machine and a heavy hydraulic sheet shearing machine. The chassis rigidity and continuous gang-punching performance are top notch. Getting direct manufacturer rates with trial runs before dispatch was a great experience.",
    author: "Vikram Deshmukh",
    title: "Operations Head",
    company: "Apex Storage Racks & Shelving",
    location: "Pune, Maharashtra"
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
