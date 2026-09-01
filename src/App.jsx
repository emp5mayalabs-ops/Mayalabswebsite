import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import GenAI from './components/GenAI';
import Services from './components/Services';
import Unmanned from './components/Unmanned';
import DroneDefense from './components/DroneDefense';
import Sensing from './components/Sensing';
import Security from './components/Security';
import Capabilities from './components/Capabilities';
import Facilities from './components/Facilities';
import Journey from './components/Journey';
import Solutions from './components/Solutions';
import Projects from './components/Projects';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.06 });

    // Observe all reveal-enabled elements
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <div className="site-grid" aria-hidden="true"></div>
      <div className="ambient-glow" aria-hidden="true"></div>
      <Header />
      <main id="top">
        <Hero />
        <Ticker />
        <About />
        <GenAI />
        <Services />
        <Unmanned />
        <DroneDefense />
        <Sensing />
        <Security />
        <Capabilities />
        <Facilities />
        <Journey />
        <Solutions />
        <Projects />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
