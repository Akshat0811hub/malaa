import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../Common/SectionTitle';
import ArrowButton from '../Common/ArrowButton';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Services.css';

const servicesData = [
  {
    id: '01',
    title: 'Automatic Rolling Shutter Machine',
    description: 'High-speed automated roll forming line for rolling shutter patti / slats (75mm, 100mm, 120mm) with heavy gear drive, EN-31 hardened rollers, and synchronized hydraulic flying cutter.',
    specs: ['12–16 Forming Stations', '0.6mm – 1.2mm MS / GI', 'Speed: 15–20 m/min']
  },
  {
    id: '02',
    title: 'Tee Grid Machine (Ceiling Line)',
    description: 'Specialized false ceiling roll forming line for Main Tee (32mm / 38mm), Cross Tee, and Wall Angle sections with rotary stitching, auto punching, and alloy end-clip locking.',
    specs: ['Rotary Stitching System', 'Main Tee & Cross Tee', 'Automated Clip Insertion']
  },
  {
    id: '03',
    title: 'Industrial Sheet Cutter & Shearing Machine',
    description: 'Industrial heavy-duty mechanical and hydraulic sheet cutting machines with hardened HCHCR D2 blades for clean, burr-free sheet metal shearing up to 4.0 mm.',
    specs: ['Up to 4.0 mm Capacity', 'Adjustable Back Gauge', 'Hardened D2 Shear Blades']
  },
  {
    id: '04',
    title: 'Rolling Shutter Spring Machine',
    description: 'Automatic spring coiling and bending machinery engineered for heavy-gauge rolling shutter tension springs with uniform pitch, high fatigue life, and quick changeover.',
    specs: ['Heavy Gauge Wire Coil', 'Automatic Pitch Control', 'High Torque Reduction Gear']
  },
  {
    id: '05',
    title: 'Ceiling Section Roll Forming Machine',
    description: 'Precision roll forming line for false ceiling intermediate channels, perimeter channels, and ceiling sections with anti-slip knurling embossing rollers.',
    specs: ['Line Speed up to 25 m/min', 'Anti-Slip Knurling Rollers', 'Hydraulic Post-Cut System']
  },
  {
    id: '06',
    title: 'P.O.P. Channel Roll Forming Machine',
    description: 'High-output continuous roll forming machine designed for drywall gypsum partition channels, studs, tracks, and ceiling framing profiles.',
    specs: ['High Production Speed', 'Dual Coil Uncoiler', 'PLC Touchscreen Control']
  },
  {
    id: '07',
    title: 'Slotted Angle Roll Forming Line',
    description: 'Integrated continuous roll forming system featuring high-speed mechanical gang punch press for slotted angles used in industrial shelving and warehouse racks.',
    specs: ['Continuous Punching Press', 'Heavy Fabricated Bed', 'Variable Length Setting']
  },
  {
    id: '08',
    title: 'Rolling Shutter Slide Machine',
    description: 'Heavy roll forming line engineered for shutter guide channels and side slides (U-channels from 65mm to 100mm) ensuring tight fitment and smooth shutter operation.',
    specs: ['10–14 Forming Stations', '0.8mm – 2.0mm Sheet Thickness', 'Accurate Edge Bending']
  },
  {
    id: '09',
    title: 'Lock Plate Machine',
    description: 'Heavy-duty roll forming and bottom strip punching machine for rolling shutter lock plates and bottom stiffener channels with pre-punched lock keyways.',
    specs: ['Integrated Lock Hole Punching', 'Heavy Structural Roller Base', 'Burr-Free Flying Cutter']
  },
  {
    id: '10',
    title: 'Other Customized Roll Forming Machines',
    description: 'Tailor-made roll forming machinery, flower pattern profile designing, and custom EN-31 / D3 hardened tooling rollers fabricated according to client CAD drawings.',
    specs: ['Custom Profile Flower CAD', 'Vacuum Hardened (60-62 HRC)', 'Pan-India Installation & Trials']
  }
];

export default function Services() {
  const revealRef = useScrollReveal();
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? servicesData : servicesData.slice(0, 3);

  const handleToggle = () => {
    if (showAll) {
      setShowAll(false);
      if (revealRef.current) {
        if (window.__lenis) {
          window.__lenis.scrollTo(revealRef.current, { offset: -90, duration: 1.1 });
        } else {
          revealRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else {
      setShowAll(true);
    }
  };

  return (
    <section className="services-section section-padding" ref={revealRef}>
      <div className="container">
        <SectionTitle
          tagline="OUR SERVICES"
          title="Industrial Roll Forming & Sheet Metal Machines"
          description="Engineered with hardened EN-31 tooling rollers, heavy structural steel beds, and digital PLC controls for maximum output and minimal maintenance."
          className="reveal"
        />

        <div className="services-grid">
          {visibleServices.map((service, index) => (
            <div
              key={service.id}
              className={`service-card ${index < 3 ? `reveal delay-${(index % 3) + 1}` : 'service-card-expanded'}`}
              style={index >= 3 ? { animationDelay: `${(index - 3) * 60}ms` } : undefined}
            >
              <div className="service-card-top">
                <span className="service-number">{service.id}</span>
                <span className="service-discipline-tag">SERVICE</span>
              </div>

              <div className="service-card-body">
                <h3 className="service-title">
                  <span className="title-text">{service.title}</span>
                  <span className="service-underline"></span>
                </h3>
                <p className="service-desc">{service.description}</p>

                <ul className="service-specs-list">
                  {service.specs.map((spec, i) => (
                    <li key={i} className="spec-bullet">
                      <span className="bullet-dash">—</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-card-footer">
                <Link to="/services" className="service-link">
                  <span className="service-link-text">Machine Specs & Details</span>
                  <svg className="service-arrow" viewBox="0 0 36 12" fill="none">
                    <line x1="1" y1="6" x2="33" y2="6" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M29 2L33 6L29 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="services-footer-action">
          <ArrowButton variant="outline" onClick={handleToggle}>
            {showAll ? 'View Less Services' : 'View All Services'}
          </ArrowButton>
        </div>
      </div>
    </section>
  );
}
