import React from 'react';
import SectionTitle from '../components/Common/SectionTitle';
import ArrowButton from '../components/Common/ArrowButton';
import CTA from '../components/CTA/CTA';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { handleImageError } from '../utils/imageFallbacks';
import './AboutPage.css';

const teamMembers = [
  {
    name: 'Dr. Arvid Lindholm',
    role: 'Founding Partner & Chief Structural Engineer',
    credentials: 'ETH Zurich // Ph.D. Structural Mechanics',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Sophia Bergqvist',
    role: 'Partner & Head of Structural Metallurgy',
    credentials: 'KTH Royal Institute // M.Sc. Materials Engineering',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Lukas Steiner',
    role: 'Director of Computational Engineering & BIM',
    credentials: 'EPFL Lausanne // Parametric Simulation Lead',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Astrid Wallin',
    role: 'Principal Fabrication Architect',
    credentials: 'Chalmers University // Specialized Timber & Steel',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop'
  }
];

const timelineMilestones = [
  {
    year: '2011',
    title: 'Studio Foundation in Zurich',
    desc: 'Established as an independent structural consulting office specializing in complex Alpine civil cantilevers and high-load bridges.'
  },
  {
    year: '2016',
    title: 'Stockholm Metallurgy Hub',
    desc: 'Commissioned our dedicated heavy fabrication facility in Luleå/Stockholm with robotic plasma cutting and automated submerged arc welding.'
  },
  {
    year: '2021',
    title: 'Parametric BIM Integration',
    desc: 'Pioneered direct-to-fabrication digital workflows, eliminating fabrication translation errors and saving up to 30% in fabrication schedule time.'
  },
  {
    year: '2026',
    title: 'Circular Zero-Carbon Alloy Initiative',
    desc: 'Standardized 100% reversible mechanical joinery and verified fossil-free steel integration across all new industrial commissions.'
  }
];

export default function AboutPage() {
  const revealRef = useScrollReveal();

  return (
    <div className="page-about" ref={revealRef}>
      {/* Page Header */}
      <section className="page-hero-banner">
        <div className="container">
          <div className="page-hero-content reveal">
            <span className="eyebrow-label">ABOUT MALAA GROUP</span>
            <h1 className="page-title">
              Engineering Structures<br />
              That Defy Impermanence
            </h1>
            <p className="page-lead">
              Founded at the intersection of Swiss structural rigor and Scandinavian industrial
              craftsmanship, MALAA conceives and realizes monumental architectural works engineered to endure.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Split Section */}
      <section className="about-philosophy section-padding">
        <div className="container">
          <div className="philosophy-grid">
            <div className="philosophy-media reveal">
              <div className="philosophy-image-frame">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                  alt="Minimalist architectural facade lines"
                  className="philosophy-img"
                  loading="lazy"
                  onError={handleImageError}
                />
              </div>
            </div>

            <div className="philosophy-text reveal delay-2">
              <span className="eyebrow-label">OUR CORE PHILOSOPHY</span>
              <h2 className="philosophy-heading">
                Structure is not merely support — it is the architectural expression.
              </h2>
              <p>
                We reject superficial cosmetic ornamentation in favor of tectonic honesty.
                By revealing structural mechanics — load paths, moment connections, bracing networks,
                and material grain — our buildings achieve an authentic monumentality that requires no adornment.
              </p>
              <p>
                Every project begins with rigorous analytical modeling. We test thousands of geometric
                permutations to locate the optimal harmony between structural efficiency, material
                utilization, and spatial poetry.
              </p>

              <div className="philosophy-stats-grid">
                <div className="phil-stat">
                  <span className="phil-stat-num">99.98%</span>
                  <span className="phil-stat-txt">Fabrication Tolerance Accuracy</span>
                </div>
                <div className="phil-stat">
                  <span className="phil-stat-num">Zero</span>
                  <span className="phil-stat-txt">Structural Failures in 15+ Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Milestones */}
      <section className="timeline-section section-padding">
        <div className="container">
          <SectionTitle
            tagline="OUR EVOLUTION"
            title="Fifteen Years of Structural Milestones"
            description="From a boutique consulting practice into a European structural powerhouse handling multi-thousand-tonne industrial commissions."
            className="reveal"
          />

          <div className="timeline-grid">
            {timelineMilestones.map((m, i) => (
              <div key={m.year} className={`timeline-card reveal delay-${i + 1}`}>
                <div className="timeline-year">{m.year}</div>
                <h4 className="timeline-card-title">{m.title}</h4>
                <p className="timeline-card-desc">{m.desc}</p>
                <div className="timeline-hairline"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="team-section section-padding">
        <div className="container">
          <SectionTitle
            tagline="EXECUTIVE LEADERSHIP"
            title="Partners & Structural Directors"
            description="Engineers and architects with dual backgrounds in computational modeling, industrial metallurgy, and large-scale project delivery."
            className="reveal"
          />

          <div className="team-grid">
            {teamMembers.map((member, idx) => (
              <div key={member.name} className={`team-card reveal delay-${idx + 1}`}>
                <div className="team-photo-wrap">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-photo"
                    loading="lazy"
                    onError={handleImageError}
                  />
                  <div className="team-overlay"></div>
                </div>

                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <div className="team-role">{member.role}</div>
                  <div className="team-creds">{member.credentials}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTA />
    </div>
  );
}
