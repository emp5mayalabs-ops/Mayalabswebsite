import React, { useState } from 'react';

export default function Unmanned() {
  const [activeTelemetry, setActiveTelemetry] = useState('optical');

  return (
    <section className="section section-dark unmanned-section" id="uav">
      <div className="container">
        <div className="split">

          <div className="split-copy reveal">
            <div className="eyebrow">Tactical Autonomous Platforms</div>
            <h2>Next-Gen UAVs &amp; UGVs with <span className="text-accent">sovereign intelligence.</span></h2>
            <p>
              High-endurance tactical unmanned aerial and ground platforms engineered for sovereign defense, 
              border surveillance, electronic warfare environments, and harsh GPS-denied frontiers.
            </p>

            <div className="mini-grid">
              <div className="mini-card hover-glow">
                <div className="mini-card-tag">AEROSPACE // TACTICAL UAV</div>
                <strong>Stealth Recon &amp; Swarm UAVs</strong>
                <p>Autonomous GPS-denied waypoint flight · Multi-spectral electro-optical/IR payloads · Real-time onboard neural vision · Encrypted telemetry datalink.</p>
              </div>
              <div className="mini-card hover-glow">
                <div className="mini-card-tag">ROBOTICS // HEAVY UGV</div>
                <strong>Autonomous Ground Combat Systems</strong>
                <p>Tactical reconnaissance · Obstacle-avoidance SLAM navigation · Hazardous perimeter patrol · Robotic manipulator integration.</p>
              </div>
            </div>

            <div className="uav-specs-strip">
              <div className="uav-spec-item">
                <span className="spec-val">12,000 m</span>
                <span className="spec-lbl">Operational Ceiling</span>
              </div>
              <div className="uav-spec-item">
                <span className="spec-val">Sub-10ms</span>
                <span className="spec-lbl">Edge Inference</span>
              </div>
              <div className="uav-spec-item">
                <span className="spec-val">AES-256</span>
                <span className="spec-lbl">Datalink Encryption</span>
              </div>
              <div className="uav-spec-item">
                <span className="spec-val">Swarm Ready</span>
                <span className="spec-lbl">Autonomous Mesh</span>
              </div>
            </div>
          </div>

          <div className="split-visual reveal reveal-right">
            <div className="tactical-drone-card">
              <div className="drone-img-frame">
                <img 
                  src="/quadrotor_tactical_drone.jpg" 
                  alt="MAYA Sovereign Tactical Quadrotor UAV Reconnaissance Drone" 
                  className="tactical-drone-img"
                />
                <div className="drone-img-overlay" />
                <div className="drone-hud-reticle" />

                {/* Interactive Hotspots */}
                <button 
                  className={`drone-hotspot hs-1 ${activeTelemetry === 'optical' ? 'active' : ''}`}
                  onClick={() => setActiveTelemetry('optical')}
                  title="Electro-Optical EO/IR Turret"
                >
                  <span className="hotspot-pulse" />
                  <span className="hotspot-label">EO/IR SENSOR</span>
                </button>

                <button 
                  className={`drone-hotspot hs-2 ${activeTelemetry === 'avionics' ? 'active' : ''}`}
                  onClick={() => setActiveTelemetry('avionics')}
                  title="Autonomous Avionics Bay"
                >
                  <span className="hotspot-pulse" />
                  <span className="hotspot-label">AUTOPILOT CORE</span>
                </button>

                <button 
                  className={`drone-hotspot hs-3 ${activeTelemetry === 'stealth' ? 'active' : ''}`}
                  onClick={() => setActiveTelemetry('stealth')}
                  title="Carbon-Composite Aero Chassis"
                >
                  <span className="hotspot-pulse" />
                  <span className="hotspot-label">QUAD ROTOR ARMS</span>
                </button>

                {/* Telemetry Status Bar */}
                <div className="drone-telemetry-badge">
                  <div className="telemetry-live-dot" />
                  <div className="telemetry-info">
                    <span className="telemetry-title">
                      {activeTelemetry === 'optical' && 'GIMBAL PAYLOAD // 4K EO/IR THERMAL CLUSTER'}
                      {activeTelemetry === 'avionics' && 'AVIONICS CORE // AIR-GAPPED TACTICAL EDGE SLAM'}
                      {activeTelemetry === 'stealth' && '4-ARM QUADROTOR // CARBON FIBRE AERO STRUCTURE'}
                    </span>
                    <span className="telemetry-sub">TELEMETRY LINK: ACTIVE // LATENCY 4.2ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
