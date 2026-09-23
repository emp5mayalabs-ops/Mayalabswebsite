import React from 'react';

const PROJECTS = [
  { 
    tag: "AUTONOMOUS RECON", 
    title: "Autonomous Surveillance & Tactical UAV Platform", 
    desc: "AI-powered situational awareness architecture integrating multi-spectral sensors, edge Jetson computing, real-time analytics, and unmanned aerial and ground mobility.",
    specs: ["Sub-10ms Vision", "Carbon Aero Chassis", "GPS-Denied SLAM"],
    img: "/tactical_uav_recon.jpg"
  },
  { 
    tag: "AEROSPACE AVIONICS", 
    title: "Stealth UAV Defense & Precision Flight System", 
    desc: "Long-range autonomous navigation system featuring GPS-denied SLAM, optical payload tracking, encrypted tactical communications, and edge inference.",
    specs: ["AES-256 Datalink", "Swarm Coordination", "Electro-Optical IR"],
    img: "/autonomous_stealth_drone.jpg"
  },
  { 
    tag: "AIR-SPACE DEFENSE", 
    title: "Counter-UAS Shield Research & Interception Platform", 
    desc: "Layered detection, classification, continuous radar tracking, and multi-band protocol jamming system designed for strategic airspace protection.",
    specs: ["360° Radar Array", "< 0.4s Lock-on", "Multi-Band Jamming"],
    img: "/counter_uas_interceptor.jpg"
  },
  { 
    tag: "SECURE AI COPILOT", 
    title: "Air-Gapped LLM & Defense RAG Terminal", 
    desc: "Quantized, offline conversational model architecture deployed on local edge nodes for rapid, zero-leak querying of maintenance and telemetry records.",
    specs: ["100% Offline Edge", "Zero Data Leak", "RAG Vector DB"],
    img: null
  },
  { 
    tag: "CRITICAL INFRASTRUCTURE", 
    title: "Smart Sovereign Perimeter Security Grid", 
    desc: "AI-enabled multi-camera computer vision monitoring, seismic sensor fusion, automated alerts, and centralized command dashboard.",
    specs: ["Seismic Fusion", "Perimeter Auto-Alert", "Command Telemetry"],
    img: null
  }
];

export default function Projects() {
  return (
    <section className="section projects-section" id="case-studies">
      {/* ── COPPER DRONE CAD BLUEPRINT ON RIGHT END SIDE ── */}
      <div className="projects-blueprint-container" aria-hidden="true">
        <div className="blueprint-zone projects-blueprint-zone">
          <div className="blueprint-glow-accent" />
          <img 
            src="/drone_blueprint_copper.jpg" 
            alt="Tactical Stealth Drone CAD Layout Blueprint" 
            className="cad-blueprint-img"
          />
          <div className="blueprint-hud-telemetry">
            <span className="hud-code">CAD // SPEC-01 : ORTHOGONAL UAV BLUEPRINT</span>
          </div>
        </div>

        {/* Subtle Ambient Radar Grid & Holographic Circles */}
        <div className="projects-radar-grid" />
        <div className="projects-hud-circle c1" />
        <div className="projects-hud-circle c2" />
      </div>

      <div className="container projects-content-wrapper">
        <div className="section-header reveal">
          <div className="eyebrow">Defense &amp; Aerospace Initiatives</div>
          <h2>From sovereign concept to <span className="text-accent">mission-ready deployment.</span></h2>
          <p>
            Representative case studies and engineering milestones demonstrating our deep-tech execution 
            across defense, aerospace, autonomous UAV platforms, and national security.
          </p>
        </div>

        <div className="case-grid">
          {PROJECTS.map((proj, idx) => (
            <article key={idx} className="case-card reveal hover-glow">
              <div className="case-header-row">
                <span className="case-tag">CASE // 0{idx + 1} — {proj.tag}</span>
                <span className="case-status-indicator">CLASSIFIED DEPLOYMENT</span>
              </div>
              
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>

              <div className="case-specs-list">
                {proj.specs.map((s, sIdx) => (
                  <span key={sIdx} className="case-spec-badge">{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="disclaimer-banner reveal">
          <span className="disclaimer-icon">🔒</span>
          <p className="disclaimer-text">
            <strong>SECURITY NOTICE:</strong> Specific technical parameters, field performance data, and operational schematics 
            are classified or protected under defense nondisclosure agreements (NDAs).
          </p>
        </div>
      </div>
    </section>
  );
}
