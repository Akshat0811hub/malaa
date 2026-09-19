import React, { useState } from 'react';
import SectionTitle from '../components/Common/SectionTitle';
import ArrowButton from '../components/Common/ArrowButton';
import CTA from '../components/CTA/CTA';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { handleImageError } from '../utils/imageFallbacks';
import banner2 from '../assets/banner 2.png';
import './ServicesPage.css';

const detailedMachinery = [
  {
    id: '01',
    slug: 'rolling-shutter-machine',
    title: 'Automatic Rolling Shutter Machine',
    tagline: 'High-Speed Shutter Patti & Slat Production Line',
    lead: 'Heavy-duty automated roll forming line engineered for 75mm, 100mm, and 120mm rolling shutter slats. Equipped with CNC-machined EN-31 hardened tooling rollers, heavy gear drive, and high-speed hydraulic flying cutter.',
    deliverables: [
      '12 to 16 Progressive Forming Stations on Solid Machined Stands',
      'Thickness Capacity: 0.6 mm to 1.2 mm (GI, CR, MS, Stainless Steel)',
      'High-Speed Production: 15 – 22 meters per minute continuous output',
      'Synchronized PLC Flying Shear Cut-Off (±1.0 mm cutting accuracy)',
      'Heavy 50mm / 60mm Ground 40Cr High-Tensile Shafts',
      'Schneider / Delta PLC Touch-Screen System with Batch Counting'
    ],
    software: ['EN-31 Hardened Rollers', 'Delta / Schneider PLC', 'Flying Shear Cut', 'Heavy Gear Drive'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '02',
    slug: 'tee-grid-machine',
    title: 'Tee Grid Machine (Ceiling Line)',
    tagline: 'Main Tee, Cross Tee & Wall Angle Roll Forming Line',
    lead: 'High-precision false ceiling grid machinery engineered for standard 24mm & 15mm exposed grid systems. Features continuous rotary stitching, precision automatic punching, and alloy end-clip locking insertion.',
    deliverables: [
      'Profiles: Main Tee (3600/3000mm), Cross Tee (1200/600mm), Wall Angle',
      'Continuous Rotary Stitching Unit for Tight Web Interlocking',
      'Automated Clip Insertion & Riveting Mechanism',
      'Auto Fire Punching for Hanger Holes & Cross-Tee Connection Slots',
      'Production Speed: Up to 25 meters per minute with zero distortion',
      'EN-31 Vacuum Hardened Tooling Rollers (60–62 HRC)'
    ],
    software: ['Rotary Stitching', 'Auto Punch Press', 'Clip Riveting Unit', 'Digital Length Counter'],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '03',
    slug: 'sheet-cutter-machine',
    title: 'Industrial Sheet Cutter & Shearing Machine',
    tagline: 'Mechanical & Hydraulic Sheet Metal Shearing Systems',
    lead: 'Heavy-duty industrial shearing machine engineered for rapid, clean, and burr-free cutting of sheet metal strips, coil blanks, and plates up to 4.0 mm thickness.',
    deliverables: [
      'Shearing Capacity: 0.5 mm up to 4.0 mm MS / GI Sheet',
      'Hardened HCHCR D2 Reversible 4-Edge Cutting Blades',
      'Bed Lengths: 1250mm, 1500mm, 2000mm, 2500mm Configurations',
      'Motorized / Manual Back Gauge with Precise Digital Scale Display',
      'Spring / Hydraulic Hold-Down Clamps Preventing Sheet Slippage',
      'Heavy Cast Iron / Fabricated Steel Frame Built for Long Duty Life'
    ],
    software: ['HCHCR D2 Blades', 'Hydraulic Power Pack', 'Digital Back Gauge', 'Foot Pedal Control'],
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '04',
    slug: 'spring-machine',
    title: 'Rolling Shutter Spring Machine',
    tagline: 'Automatic Heavy-Gauge Wire Coiling & Pitch Forming',
    lead: 'Heavy-duty automatic spring coiling machine designed specifically for manufacturing high-tensile rolling shutter tension springs with uniform pitch and high fatigue life.',
    deliverables: [
      'Wire Diameter Handling: 3.0 mm to 8.0 mm High-Carbon Spring Steel Wire',
      'Spring Outside Diameter: 50 mm to 150 mm Rapidly Adjustable',
      'High-Torque Reduction Gear Drive with Smooth Speed Modulation',
      'Precision Cam-Guided Automatic Pitch Expansion Mechanism',
      'Hardened Grooved Wire Feed Rollers for Slip-Free Feeding',
      'Fast Cycle Time: Under 60 Seconds per Complete Industrial Shutter Spring'
    ],
    software: ['Cam Pitch Control', 'Hardened Feed Rolls', 'High-Torque Reduction', 'Grade II Wire Ready'],
    image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '05',
    slug: 'ceiling-section-machine',
    title: 'Ceiling Section Roll Forming Machine',
    tagline: 'False Ceiling Intermediate, Perimeter & Ceiling Channels',
    lead: 'High-speed roll forming line dedicated to false ceiling framing sections. Features specialized knurling rollers that imprint anti-slip patterns for self-tapping drywall screws.',
    deliverables: [
      'Profiles: Ceiling Section (C-Channel), Intermediate Section, Perimeter Channel',
      '10 to 14 Progressive Forming Stations on Solid Ground Plates',
      'Hardened Steel Embossing Knurling Unit for Screw-Grip Texture',
      'Continuous Line Speed: 20 – 30 meters per minute Output',
      'Hydraulic Post-Cutting Die Ensuring Distortion-Free Section Profiles',
      'Automated PLC Batch Counter & Pre-Programmed Length Presets'
    ],
    software: ['Anti-Slip Knurling', 'Post-Cut Hydraulic', 'Touchscreen PLC', 'Dual Decoiler'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '06',
    slug: 'pop-channel-machine',
    title: 'P.O.P. Channel Roll Forming Machine',
    tagline: 'Drywall Gypsum Framing, Stud & Track Roll Forming Line',
    lead: 'Robust roll forming line engineered for plaster-of-paris (POP) false ceiling channels, partition studs, and runners with tight dimensional tolerances and smooth edges.',
    deliverables: [
      'Profiles: POP Channel, Bottom Track, Wall Stud, Ceiling Batten',
      'Roller Material: Certified EN-31 High-Carbon Alloy Steel, Hard Chrome Plated',
      'Coil Feeding: Motorized or Manual Dual-Cone Decoiler (1 to 2 Tonne)',
      'Drive: Double-Row Heavy Industrial Chain and Sprocket Transmission',
      'Cut Accuracy: ±0.5 mm via Optical Rotary Encoder & Hydraulic Shear',
      'One-Touch Auto Mode with Manual Inching / Jog Capability'
    ],
    software: ['EN-31 Tooling', 'Heavy Chain Drive', 'Optical Rotary Encoder', 'Hydraulic Station'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '07',
    slug: 'slotted-angle-machine',
    title: 'Slotted Angle Roll Forming Line',
    tagline: 'Heavy Industrial Shelving & Warehouse Storage Racking Lines',
    lead: 'Fully automated continuous production line integrating high-speed mechanical gang-punching with progressive roll forming for standard 40x40mm and 50x50mm slotted angles.',
    deliverables: [
      'High-Tonnage Mechanical Punch Press for Continuous Slot & Oval Hole Punching',
      '10 to 12 Heavy-Duty Progressive Forming Stations',
      'Thickness Capacity: 1.2 mm to 2.5 mm Cold Rolled (CR) / Hot Rolled (HR) Strip',
      'Angle Dimensions: 40×40mm, 50×50mm, 40×60mm Standard Profiles',
      'Heavy Fabricated Channel Chassis Stress-Relieved for Decades of Use',
      'Synchronized Cut-Off System Aligned Directly with Hole Pitch'
    ],
    software: ['Gang Punch Press', 'Heavy Duty Base', 'CR/HR Strip Ready', 'Hole-Pitch Sync'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '08',
    slug: 'shutter-slide-machine',
    title: 'Rolling Shutter Slide Machine',
    tagline: 'U-Channel & Side Guide Rail Roll Forming System',
    lead: 'High-strength roll forming machine for shutter guide channels and slide rails (65mm, 75mm, 100mm U-profiles). Delivers exact parallel tolerances for rattle-free shutter travel.',
    deliverables: [
      '10 to 14 Forming Stations with Side-Guide Vertical Stands',
      'Sheet Thickness: 0.8 mm to 2.0 mm MS / GI Sheet',
      'Profiles: Standard U-Channel, Deep Groove Wind-Lock Slide Profiles',
      'Tooling Rollers: CNC Turned EN-31 Vacuum Hardened to 60 HRC',
      'Output Speed: 15 – 20 m/min with Hydraulic Flying Cut-Off',
      'Straightness Tolerance ≤ 1.0 mm per 3 Meters Length'
    ],
    software: ['EN-31 Rollers', 'Side Guide Stands', 'Wind-Lock Ready', 'Flying Shear'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '09',
    slug: 'lock-plate-machine',
    title: 'Lock Plate Machine',
    tagline: 'Bottom Plate & Interlocking Stiffener Roll Forming Line',
    lead: 'Specialized roll forming line for rolling shutter bottom lock plates with pre-punched padlock holes, side slide cutaways, and rigid stiffening bends.',
    deliverables: [
      'Integrated Hydraulic Lock Hole & Padlock Hole Punching Unit',
      'Profile: Heavy Bottom Plate with Folded Lip and Water-Drip Contour',
      'Thickness Handling: 1.0 mm to 2.5 mm MS / GI Sheet',
      'Hardened D3 / EN-31 Steel Rollers with Precision Ground Shaft Bores',
      '7.5 HP Electric Motor with Heavy Helical Reduction Gear Drive',
      'Delta / Schneider PLC Touch-Screen System with Batch Counter'
    ],
    software: ['Lock Hole Punching', 'Heavy Bottom Plate', 'D3 Die Tooling', 'Helical Gearbox'],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '10',
    slug: 'custom-roll-forming',
    title: 'Custom Roll Forming Machines & Tooling',
    tagline: 'Tailor-Made Lines, Flower CAD Design & Replacement Rollers',
    lead: 'Custom roll tooling design, progressive flower pattern development, roller regrinding, and replacement roller sets fabricated to client drawings at our Bawana works.',
    deliverables: [
      'Computerized CAD Progressive Bending Angle Simulation (Flower Pattern)',
      'Roller Tooling Machined from Certified EN-31 / D3 Alloy Die Steel',
      'Vacuum Furnace Heat Treatment (60–62 HRC Uniform Hardness)',
      'Mirror Hard Chrome Plating (20–30 Microns) for Surface Protection',
      'Replacement Roller Sets Built to Fit Any Existing Machine Shaft Size',
      'Live Material Trial Run & Tolerance Validation at Bawana Before Dispatch'
    ],
    software: ['Flower CAD Design', 'EN-31 / D3 Steel', 'Vacuum Heat Treatment', 'Hard Chrome 25µm'],
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1200&auto=format&fit=crop'
  }
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(detailedMachinery[0].id);
  const revealRef = useScrollReveal();

  const selected = detailedMachinery.find(d => d.id === activeTab) || detailedMachinery[0];

  return (
    <div className="page-services" ref={revealRef}>
      {/* Services Hero Header */}
      <section className="page-hero-banner">
        <div className="page-hero-banner-bg">
          <img
            src={banner2}
            alt="Industrial Roll Forming Machines and Equipment Bawana Delhi"
            className="page-hero-banner-img"
            onError={handleImageError}
          />
          <div className="page-hero-banner-scrim"></div>
        </div>
        <div className="container">
          <div className="page-hero-content reveal">
            <span className="eyebrow-label">MANUFACTURING RANGE • BAWANA, DELHI</span>
            <h1 className="page-title">
              Industrial Roll Forming Machines &<br />
              Sheet Metal Equipment
            </h1>
            <p className="page-lead">
              From high-speed automatic rolling shutter lines to precision false ceiling T-grid machinery,
              Mala Roll Forming manufactures rugged, heavy-duty production equipment engineered with EN-31
              vacuum-hardened rollers and automated PLC flying shear systems.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Machine Explorer */}
      <section className="discipline-explorer section-padding">
        <div className="container">
          <div className="explorer-layout">
            {/* Left Selector List */}
            <div className="explorer-sidebar reveal">
              <span className="sidebar-header">SELECT MACHINERY</span>
              <div className="discipline-nav-list">
                {detailedMachinery.map((item) => (
                  <button
                    key={item.id}
                    className={`nav-discipline-btn ${activeTab === item.id ? 'is-active' : ''}`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <span className="btn-num">{item.id}</span>
                    <span className="btn-title">{item.title}</span>
                    <span className="btn-arrow">→</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Detailed Panel */}
            <div className="explorer-panel reveal delay-1" key={selected.id}>
              <div className="panel-media-wrap">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="panel-img"
                  loading="lazy"
                  onError={handleImageError}
                />
                <div className="panel-overlay"></div>
                <div className="panel-badge">
                  <span>MACHINE SPECIFICATION // {selected.id}</span>
                </div>
              </div>

              <div className="panel-content">
                <div className="panel-eyebrow">{selected.tagline}</div>
                <h2 className="panel-title">{selected.title}</h2>
                <p className="panel-lead">{selected.lead}</p>

                <div className="panel-columns">
                  <div className="panel-col">
                    <h4 className="col-subheading">Technical Specifications & Features</h4>
                    <ul className="panel-bullet-list">
                      {selected.deliverables.map((deliv, idx) => (
                        <li key={idx} className="bullet-row">
                          <span className="bullet-point">/</span>
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="panel-col">
                    <h4 className="col-subheading">Key Components & Automation</h4>
                    <div className="software-pills">
                      {selected.software.map((sw, idx) => (
                        <span key={idx} className="software-pill">{sw}</span>
                      ))}
                    </div>

                    <div className="panel-action-box">
                      <p className="inquire-lead">Need custom coil thickness or speed specifications?</p>
                      <ArrowButton to="/contact" variant="outline">
                        Get Machine Price Quote
                      </ArrowButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards & Certifications Bar */}
      <section className="standards-section section-padding">
        <div className="container">
          <SectionTitle
            tagline="MANUFACTURING EXCELLENCE"
            title="Engineered to Industrial Standards at Bawana"
            description="Every roll forming machine, shearing unit, and spring coiler built at our factory adheres to rigorous mechanical and metallurgical standards."
            className="reveal"
          />

          <div className="standards-grid">
            <div className="standard-card reveal delay-1">
              <span className="std-code">EN-31 / D3</span>
              <h4 className="std-title">60–62 HRC Vacuum Hardened</h4>
              <p className="std-text">Premium tooling die steel vacuum heat-treated for maximum wear resistance and zero profile deformation.</p>
            </div>
            <div className="standard-card reveal delay-2">
              <span className="std-code">PLC FLYING CUT</span>
              <h4 className="std-title">±1.0 mm Cutting Accuracy</h4>
              <p className="std-text">High-speed hydraulic flying shear cuts profiles continuously at full speed without line stoppage.</p>
            </div>
            <div className="standard-card reveal delay-3">
              <span className="std-code">RIGID CHASSIS</span>
              <h4 className="std-title">Heavy ISMC Channel Base</h4>
              <p className="std-text">Heavy structural channel beds machined flat to absorb vibrations during continuous 24×7 commercial shifts.</p>
            </div>
            <div className="standard-card reveal delay-4">
              <span className="std-code">PRE-DISPATCH TRIAL</span>
              <h4 className="std-title">100% Live Coil Tested</h4>
              <p className="std-text">Full trial runs with customer coil at our Bawana works to guarantee profile dimensions before dispatch.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}

