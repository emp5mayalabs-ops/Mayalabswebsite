import React from 'react';

const SOLUTIONS = [
  { 
    code: "UAV", 
    icon: "🛸",
    title: "Unmanned Aerial Systems", 
    desc: "Long-endurance surveillance, autonomous waypoint flight, multi-spectral payload telemetry, and swarm research.",
    tag: "AEROSPACE DEFENSE",
    badge: "AI AUTONOMY"
  },
  { 
    code: "CUAS", 
    icon: "🛡️",
    title: "Counter-UAS Shield", 
    desc: "Multi-sensor RF detection, automated radar tracking, AI optical classification, and directional RF jamming.",
    tag: "AIRSPACE SECURITY",
    badge: "SUB-0.4s LOCK"
  },
  { 
    code: "AI", 
    icon: "🧠",
    title: "Smart Security Platforms", 
    desc: "AI video analytics, perimeter intrusion alarms, identity verification, and centralized command dashboard.",
    tag: "INTELLIGENCE",
    badge: "REAL-TIME EDGE"
  },
  { 
    code: "CHAT", 
    icon: "💬",
    title: "Air-Gapped GenAI & RAG", 
    desc: "Private, off-cloud LLM conversational copilots indexing flight manuals, telemetry logs, and maintenance records.",
    tag: "SECURE AI",
    badge: "ZERO-LEAK"
  },
  { 
    code: "BOT", 
    icon: "🤖",
    title: "Autonomous Tactical Robotics", 
    desc: "Heavy-duty UGVs for hazardous area inspection, perimeter patrol, tactical mobility, and remote sensor deployment.",
    tag: "UGV PLATFORMS",
    badge: "SLAM NAVIGATION"
  },
  { 
    code: "RAD", 
    icon: "📡",
    title: "Advanced Sensing & Radar", 
    desc: "Synthetic aperture radar (SAR), pulse-Doppler radar, millimeter-wave clusters, and AI-powered target recognition.",
    tag: "MULTI-SPECTRAL",
    badge: "MMW + SAR"
  },
  { 
    code: "DX", 
    icon: "⚡",
    title: "Deep-Tech Platform Engineering", 
    desc: "Custom embedded firmware, encrypted communication links, hardware co-design, and sovereign systems engineering.",
    tag: "HARDWARE/FIRMWARE",
    badge: "SOVEREIGN ARCH"
  }
];

export default function Solutions() {
  return (
    <section className="section solutions-section" id="solutions" data-section-theme="dark">
      {/* ── COPPER DRONE CAD BLUEPRINT ON RIGHT END SIDE ── */}
      <div className="solutions-blueprint-container" aria-hidden="true">
        <div className="blueprint-zone solutions-blueprint-zone">
          <div className="blueprint-glow-accent" />
          <img 
            src="/drone_cad_blueprint_2.jpg" 
            alt="Tactical Quadrotor Drone CAD Layout Blueprint" 
            className="cad-blueprint-img"
          />
          <div className="blueprint-hud-telemetry">
            <span className="hud-code">CAD // SPEC-02 : MULTI-ROTOR SCHEMATIC</span>
          </div>
        </div>

        {/* Subtle Ambient Radar Grid & Holographic Circles */}
        <div className="projects-radar-grid" />
        <div className="projects-hud-circle c1" />
      </div>

      <div className="container solutions-content-wrapper">
        <div className="section-header reveal">
          <div className="eyebrow">Products &amp; Defense Solutions</div>
          <h2>Built around <span className="text-accent">real-world tactical problems.</span></h2>
          <p>Field-tested, sovereign systems engineered to perform under extreme constraints, electronic warfare interference, and zero-connectivity environments.</p>
        </div>

        <div className="solution-grid">
          {SOLUTIONS.map((sol) => (
            <div key={sol.code} className="solution-card reveal hover-glow">
              <div className="solution-card-top">
                <div className="solution-code-pill">
                  <span className="sol-icon">{sol.icon}</span>
                  <span className="sol-code-text">{sol.code}</span>
                </div>
                <span className="sol-badge">{sol.badge}</span>
              </div>
              <div className="sol-category-tag">{sol.tag}</div>
              <h3>{sol.title}</h3>
              <p>{sol.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
