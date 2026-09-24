import React from 'react';

export default function DroneDefense() {
  return (
    <section className="section" id="counter" data-section-theme="dark" style={{ background: '#000000' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          
          <div className="split-copy reveal reveal-left">
            <div className="eyebrow" style={{ color: '#FFFFFF' }}>Counter-UAS &amp; Airspace Security</div>
            <h2 style={{ color: '#FFFFFF', marginBottom: '24px' }}>
              Protection against <span className="text-accent" style={{ color: '#FFFFFF' }}>rogue drone swarms.</span>
            </h2>
            <p style={{ color: '#D4D4D8', fontSize: '1.1rem', marginBottom: '32px' }}>
              Our sovereign Counter-UAS defense architecture delivers sub-second RF and radar detection, 
              real-time AI optical threat classification, and directed electromagnetic protocol neutralization.
            </p>

            <ul className="check-list" style={{ color: '#D4D4D8', marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li>
                <strong style={{ color: '#FFFFFF' }}>Sub-second RF &amp; Radar Detection:</strong> Continuous 360° airspace surveillance with micro-Doppler radar clustering.
              </li>
              <li>
                <strong style={{ color: '#FFFFFF' }}>AI-Powered Optical Tracking:</strong> Automated deep-learning payload and hostile signature identification.
              </li>
              <li>
                <strong style={{ color: '#FFFFFF' }}>Directional RF Protocol Jamming:</strong> Targeted GNSS denial and protocol takeover without collateral interference.
              </li>
              <li>
                <strong style={{ color: '#FFFFFF' }}>Mobile &amp; Fixed Perimeter Defense:</strong> Rapid vehicle-mounted tactical response and permanent critical infrastructure shields.
              </li>
            </ul>

            <div className="cuas-defense-metrics" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              <div className="cuas-metric-box" style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '20px', borderRadius: '8px' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#FFFFFF' }}>&lt; 0.4s</div>
                <div style={{ fontSize: '0.875rem', color: '#A1A1AA', marginTop: '4px' }}>Target Acquisition</div>
              </div>
              <div className="cuas-metric-box" style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '20px', borderRadius: '8px' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#FFFFFF' }}>360°</div>
                <div style={{ fontSize: '0.875rem', color: '#A1A1AA', marginTop: '4px' }}>Perimeter Coverage</div>
              </div>
              <div className="cuas-metric-box" style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '20px', borderRadius: '8px' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#FFFFFF' }}>Multi-Band</div>
                <div style={{ fontSize: '0.875rem', color: '#A1A1AA', marginTop: '4px' }}>RF Neutralization</div>
              </div>
            </div>
          </div>

          <div className="split-visual reveal reveal-right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <svg width="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.8 }}>
              <circle cx="200" cy="200" r="180" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4"/>
              <circle cx="200" cy="200" r="140" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
              
              {/* Central body */}
              <rect x="170" y="150" width="60" height="100" rx="10" stroke="#FFFFFF" strokeWidth="2" fill="none" />
              <circle cx="200" cy="200" r="15" stroke="#FFFFFF" strokeWidth="2" fill="none" />
              
              {/* Top Left Arm */}
              <line x1="170" y1="150" x2="100" y2="80" stroke="#FFFFFF" strokeWidth="2" />
              <circle cx="100" cy="80" r="30" stroke="#FFFFFF" strokeWidth="2" fill="none" />
              <line x1="70" y1="80" x2="130" y2="80" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
              <line x1="100" y1="50" x2="100" y2="110" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />

              {/* Top Right Arm */}
              <line x1="230" y1="150" x2="300" y2="80" stroke="#FFFFFF" strokeWidth="2" />
              <circle cx="300" cy="80" r="30" stroke="#FFFFFF" strokeWidth="2" fill="none" />
              <line x1="270" y1="80" x2="330" y2="80" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
              <line x1="300" y1="50" x2="300" y2="110" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />

              {/* Bottom Left Arm */}
              <line x1="170" y1="250" x2="100" y2="320" stroke="#FFFFFF" strokeWidth="2" />
              <circle cx="100" cy="320" r="30" stroke="#FFFFFF" strokeWidth="2" fill="none" />
              <line x1="70" y1="320" x2="130" y2="320" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
              <line x1="100" y1="290" x2="100" y2="350" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />

              {/* Bottom Right Arm */}
              <line x1="230" y1="250" x2="300" y2="320" stroke="#FFFFFF" strokeWidth="2" />
              <circle cx="300" cy="320" r="30" stroke="#FFFFFF" strokeWidth="2" fill="none" />
              <line x1="270" y1="320" x2="330" y2="320" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
              <line x1="300" y1="290" x2="300" y2="350" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />

              {/* Grid / Schematic lines */}
              <line x1="200" y1="0" x2="200" y2="400" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              <line x1="0" y1="200" x2="400" y2="200" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}
