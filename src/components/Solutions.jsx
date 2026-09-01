import React from 'react';

const SOLUTIONS = [
  { code: "UAV", title: "Unmanned Aerial Systems", desc: "Long-endurance surveillance, autonomous waypoint flight, multi-spectral payload telemetry, and swarm research." },
  { code: "CUAS", title: "Counter-UAS Shield", desc: "Multi-sensor RF detection, automated radar tracking, AI optical classification, and directional RF jamming." },
  { code: "AI", title: "Smart Security Platforms", desc: "AI video analytics, perimeter intrusion alarms, identity verification, and centralized command dashboard." },
  { code: "CHAT", title: "Air-Gapped GenAI & RAG", desc: "Private, off-cloud LLM conversational copilots indexing flight manuals, telemetry logs, and maintenance records." },
  { code: "BOT", title: "Autonomous Tactical Robotics", desc: "Heavy-duty UGVs for hazardous area inspection, perimeter patrol, tactical mobility, and remote sensor deployment." },
  { code: "RAD", title: "Advanced Sensing & Radar", desc: "Synthetic aperture radar (SAR), pulse-Doppler radar, millimeter-wave clusters, and AI-powered target recognition." },
  { code: "DX", title: "Deep-Tech Platform Engineering", desc: "Custom embedded firmware, encrypted communication links, hardware co-design, and sovereign systems engineering." }
];

export default function Solutions() {
  return (
    <section className="section section-dark" id="solutions">
      <div className="container">
        <div className="section-header reveal visible">
          <div className="eyebrow">Products &amp; Solutions</div>
          <h2>Built around <span className="text-accent">real-world tactical problems.</span></h2>
          <p>Field-tested, sovereign systems engineered to perform under extreme constraints, electronic interference, and zero-connectivity environments.</p>
        </div>

        <div className="solution-grid reveal visible">
          {SOLUTIONS.map((sol) => (
            <div key={sol.code} className="solution-card">
              <div className="solution-code">{sol.code}</div>
              <h3>{sol.title}</h3>
              <p>{sol.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
