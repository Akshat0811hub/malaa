import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Projects from '../components/Projects/Projects';
import Stats from '../components/Stats/Stats';
import Process from '../components/Process/Process';
import ImageText from '../components/ImageText/ImageText';
import Testimonials from '../components/Testimonials/Testimonials';
import Insights from '../components/Insights/Insights';
import CTA from '../components/CTA/CTA';

export default function Home() {
  return (
    <div className="page-home">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Stats />
      <Process />
      <ImageText />
      <Testimonials />
      <Insights />
      <CTA />
    </div>
  );
}
