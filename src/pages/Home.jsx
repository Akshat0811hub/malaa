import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Stats from '../components/Stats/Stats';
import Testimonials from '../components/Testimonials/Testimonials';
import Career from '../components/Career/Career';
import CTA from '../components/CTA/CTA';

export default function Home() {
  return (
    <div className="page-home">
      <Hero />
      <About />
      <Services />
      <Stats />
      <Testimonials />
      <Career id="careers" />
      <CTA />
    </div>
  );
}
