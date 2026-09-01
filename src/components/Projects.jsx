import React from 'react';

const PROJECTS = [
  { 
    tag: "AUTONOMOUS RECON", 
    title: "Autonomous Surveillance Platform", 
    desc: "AI-powered situational awareness architecture integrating multi-spectral sensors, edge Jetson computing, real-time analytics, and unmanned ground mobility." 
  },
  { 
    tag: "AEROSPACE AVIONICS", 
    title: "Intelligent UAV Defense Platform", 
    desc: "Long-range autonomous navigation system featuring GPS-denied SLAM, optical payload tracking, encrypted tactical communications, and edge inference." 
  },
  { 
    tag: "AIR-SPACE DEFENSE", 
    title: "Counter-UAS Shield Research Platform", 
    desc: "Layered detection, classification, continuous radar tracking, and multi-band protocol jamming system designed for strategic airspace protection." 
  },
  { 
    tag: "SECURE AI COPILOT", 
    title: "Air-Gapped LLM & Defense RAG Terminal", 
    desc: "Quantized, offline conversational model architecture deployed on local edge nodes for rapid, zero-leak querying of maintenance and telemetry records." 
  },
  { 
    tag: "CRITICAL INFRASTRUCTURE", 
    title: "Smart Perimeter Security Grid", 
    desc: "AI-enabled multi-camera computer vision monitoring, seismic sensor fusion, automated alerts, and centralized command dashboard." 
  }
];

export default function Projects() {
  return (
    <section className="section" id="case-studies">
      <div className="container">
        <div className="section-header reveal visible">
          <div className="eyebrow">Featured Initiatives</div>
          <h2>From concept to <span className="text-accent">mission-ready deployment.</span></h2>
          <p>Representative case studies and engineering milestones demonstrating our deep-tech execution across defense, aerospace, and sovereign security.</p>
        </div>

        <div className="case-grid reveal visible">
          {PROJECTS.map((proj, idx) => (
            <article key={idx} className="case-card">
              <span className="case-tag">CASE // 0{idx + 1} — {proj.tag}</span>
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
            </article>
          ))}
        </div>

        <p className="disclaimer">
          * NOTICE: Specific technical parameters, field performance data, and operational schematics are classified or protected under defense nondisclosure agreements.
        </p>
      </div>
    </section>
  );
}
