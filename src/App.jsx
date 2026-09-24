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
    // Scroll to top on page load/reload
    window.history.scrollRestoration = 'manual';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Scroll reveal observer
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger').forEach(el => revealObserver.observe(el));

    // Theme switching observer
    const themeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const theme = entry.target.getAttribute('data-section-theme');
          if (theme) {
            document.body.setAttribute('data-theme', theme);
          }
        }
      });
    }, { threshold: 0.5 }); // Trigger when section is 50% in view

    document.querySelectorAll('[data-section-theme]').forEach(el => themeObserver.observe(el));

    return () => {
      revealObserver.disconnect();
      themeObserver.disconnect();
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
