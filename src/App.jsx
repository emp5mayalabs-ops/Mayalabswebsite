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
import CustomCursor from './components/CustomCursor';

export default function App() {
  useEffect(() => {
    // Advanced IntersectionObserver for smooth scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { 
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px' 
    });

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <div className="site-grid" aria-hidden="true"></div>
      <div className="ambient-glow" aria-hidden="true"></div>
      <Header />
      <main className="main-content-flow">
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
