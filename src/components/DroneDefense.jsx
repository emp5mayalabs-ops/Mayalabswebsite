import React, { useState } from 'react';

export default function DroneDefense() {
  const [isDefenseLightOn, setIsDefenseLightOn] = useState(true);

  return (
    <section className="section section-dark" id="counter">
      <div className="container">
        <div className="split reverse">

          <div className="split-visual reveal visible">
            <div 
              className={`bulb-matrix-container defense-bulb-container ${isDefenseLightOn ? 'light-on' : 'light-off'}`}
              role="img" 
              aria-label="Drone Defense Innovation Light Bulb with Building Blocks"
              onClick={() => setIsDefenseLightOn(!isDefenseLightOn)}
            >
              {/* Background Building Blocks Canvas */}
              <div className="blocks-bg-wrap">
                <img 
                  src="/flame_building_blocks_defense.jpg" 
                  alt="Building Blocks Defense Wall Background" 
                  className="blocks-bg-img"
                />
                <div className="blocks-bg-overlay" />
                <div className="blocks-light-beams" />
              </div>

              {/* Ambient Glow */}
              <div className="bulb-aura-glow" />

              {/* Floating Sparks */}
              {isDefenseLightOn && (
                <div className="bulb-sparks">
                  <span className="spark s1" />
                  <span className="spark s2" />
                  <span className="spark s3" />
                  <span className="spark s4" />
                </div>
              )}

              {/* Center SVG Light Bulb */}
              <div className="bulb-wrapper">
                <svg className="bulb-svg" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="95" r="75" className="bulb-aura-circle" />
                  <g className="bulb-rays">
                    <line x1="100" y1="5" x2="100" y2="22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    <line x1="35" y1="30" x2="47" y2="42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    <line x1="165" y1="30" x2="153" y2="42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    <line x1="10" y1="95" x2="27" y2="95" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    <line x1="190" y1="95" x2="173" y2="95" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
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

              {/* Status Banner */}
              <div className="bulb-status-bar">
                <span className={`status-dot ${isDefenseLightOn ? 'on' : 'off'}`} />
                <strong>{isDefenseLightOn ? '🛡️ DEFENSE IGNITION // ACTIVE' : '🌑 DEFENSE MESH // STANDBY'}</strong>
                <small>[CLICK TO TOGGLE LIGHT]</small>
              </div>
            </div>
          </div>

          <div className="split-copy reveal visible reveal-delay-2">
            <div className="eyebrow">Drone Defence</div>
            <h2>Layered protection against <span className="text-accent">emerging aerial threats.</span></h2>
            <p>Our Counter-UAS R&D delivers comprehensive detection, real-time RF tracking, AI-powered optical classification and responsive countermeasure protocols.</p>

            <ul className="check-list">
              <li>Sub-second RF &amp; optical detection</li>
              <li>Multi-sensor fusion tracking</li>
              <li>AI-assisted threat classification</li>
              <li>Directional RF jamming &amp; protocol disruption</li>
              <li>Air-defence network integration</li>
              <li>Mobile and stationary deployments</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}





