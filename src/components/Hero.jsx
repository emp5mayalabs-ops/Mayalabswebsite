import React, { useState } from 'react';

export default function Hero() {
  const [isLightOn, setIsLightOn] = useState(true);

  const goTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className={`hero hero-full-bg ${isLightOn ? 'hero-light-on' : 'hero-light-off'}`} id="top">
      {/* ── FULL HERO BACKGROUND IMAGE CANVAS ───────────────────── */}
      <div className="hero-bg-canvas">
        <img 
          src="/flame_building_blocks_hero.jpg" 
          alt="Building Blocks Hero Full Background" 
          className="hero-bg-img"
        />
        <div className="hero-bg-overlay" />
        <div className="hero-bg-beams" />
        
        {/* Animated Light Aura & Rays */}
        <div className="hero-bulb-aura" />

        {/* Floating Sparks */}
        {isLightOn && (
          <div className="hero-sparks">
            <span className="spark s1" />
            <span className="spark s2" />
            <span className="spark s3" />
            <span className="spark s4" />
            <span className="spark s5" />
            <span className="spark s6" />
          </div>
        )}
      </div>

      {/* ── Left: Copy Text ──────────────────────────────────── */}
      <div className="hero-content reveal visible">
        <div className="eyebrow">Defense · Aerospace · Deep-Tech</div>

        <h1 className="hero-title">
          Indigenous<br />
          Innovation.<br />
          <em className="text-accent">Intelligent Systems.</em>
        </h1>

        <p className="hero-desc">
          MAYA LABS is an advanced research organisation developing sovereign,
          mission-ready solutions across autonomous systems, defence technology,
          edge AI, radar sensing and tactical cybersecurity.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#services" onClick={e => goTo(e,'services')}>
            Explore Capabilities <span className="arrow">→</span>
          </a>
          <a className="btn btn-outline" href="#contact" onClick={e => goTo(e,'contact')}>
            Partner With Us <span className="arrow">→</span>
          </a>
        </div>
      </div>

      {/* ── Right: Interactive Glowing Light Bulb ─────────────── */}
      <div className="hero-bulb-side reveal visible" onClick={() => setIsLightOn(!isLightOn)}>
        <div className="hero-bulb-interactive" title="Click to turn Light ON / OFF">
          <div className="bulb-wrapper">
            <svg className="bulb-svg" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="95" r="75" className="bulb-aura-circle" />
              <g className="bulb-rays">
                <line x1="100" y1="5" x2="100" y2="22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <line x1="35" y1="30" x2="47" y2="42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <line x1="165" y1="30" x2="153" y2="42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <line x1="10" y1="95" x2="27" y2="95" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <line x1="190" y1="95" x2="173" y2="95" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <line x1="35" y1="160" x2="47" y2="148" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <line x1="165" y1="160" x2="153" y2="148" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </g>
              <path 
                d="M60 145 C 45 130, 38 105, 42 80 C 48 48, 72 30, 100 30 C 128 30, 152 48, 158 80 C 162 105, 155 130, 140 145 C 132 153, 126 160, 124 170 L 76 170 C 74 160, 68 153, 60 145 Z" 
                className="bulb-glass" 
              />
              <path d="M82 170 L90 120 L96 130 L104 130 L110 120 L118 170" className="bulb-filament-support" />
              <path d="M88 120 C 92 100, 108 100, 112 120" className="bulb-filament-wire" />
              <circle cx="100" cy="110" r="14" className="bulb-core-glow" />
              <path d="M76 170 H124 V180 H76 Z" className="bulb-base-ring ring-top" />
              <path d="M78 182 H122 V192 H78 Z" className="bulb-base-ring" />
              <path d="M82 194 H118 V204 H82 Z" className="bulb-base-ring" />
              <path d="M88 206 C 88 214, 112 214, 112 206 Z" className="bulb-base-bottom" />
            </svg>
          </div>

          <div className="hero-bulb-badge">
            <span className={`status-dot ${isLightOn ? 'on' : 'off'}`} />
            <span>{isLightOn ? '💡 IGNITED' : '🌑 STANDBY'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}






