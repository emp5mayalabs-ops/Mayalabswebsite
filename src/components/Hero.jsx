import React from 'react';

export default function Hero() {
  const goTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section 
      className="hero" 
      id="top" 
      data-section-theme="light-mint" 
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        paddingTop: 'var(--nav-h)', 
        background: 'var(--bg-light-mint)'
      }}
    >
      <div className="container" style={{ width: '100%' }}>
        <div className="hero-content reveal visible" style={{ maxWidth: '800px' }}>
          <div className="eyebrow">Defense · Aerospace · Deep-Tech</div>

          <h1 className="hero-title" style={{ marginBottom: '24px' }}>
            Indigenous<br />
            Innovation.<br />
            <em className="text-accent">Intelligent Systems.</em>
          </h1>

          <p className="hero-desc" style={{ fontSize: '1.25rem', marginBottom: '40px', maxWidth: '600px' }}>
            MAYA LABS is an advanced research organisation developing sovereign,
            mission-ready solutions across autonomous systems, defence technology,
            edge AI, radar sensing and tactical cybersecurity.
          </p>

          <div className="hero-actions" style={{ display: 'flex', gap: '16px' }}>
            <a className="btn btn-primary" href="#services" onClick={e => goTo(e,'services')}>
              Explore Capabilities <span className="arrow">↗</span>
            </a>
            <a className="btn btn-outline" href="#contact" onClick={e => goTo(e,'contact')}>
              Partner With Us <span className="arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
