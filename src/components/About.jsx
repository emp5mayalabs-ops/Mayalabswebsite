import React, { useState } from 'react';

const TABS = {
  hardware: {
    label: "Hardware Innovations",
    sub: "Tactical platforms & embedded architectures",
    items: [
      { h: "UAV & UGV Chassis Design", p: "Carbon-fibre structures tuned for payload weight, aerodynamics and thermal management across operational environments." },
      { h: "Multi-Spectral Sensor Clusters", p: "Integrated visual, thermal and millimetre-wave radar sensors engineered for real-time, multi-band sensor fusion." },
      { h: "CUAS Jamming Systems", p: "Custom RF emission hardware for precision targeting and rapid interception of rogue drone networks." },
    ],
  },
  software: {
    label: "Software Innovations",
    sub: "Edge intelligence & real-time control frameworks",
    items: [
      { h: "Edge Computer Vision", p: "Ultra-low-latency deep-learning models running on embedded chipsets for real-time target and threat classification." },
      { h: "Autonomous Path Planners", p: "Real-time obstacle-avoidance algorithms utilising GPR and synthetic-aperture radar feeds for GPS-denied navigation." },
      { h: "Secure Communications Link", p: "Military-grade encryption layers for high-bandwidth, jam-resistant tactical network interfaces." },
    ],
  },
  genai: {
    label: "Generative AI & LLMs",
    sub: "Private, air-gapped intelligent agents for secure operations",
    items: [
      { h: "Secure Air-Gapped LLMs", p: "Quantised large language models hosted fully offline on edge hardware for zero-leak field calculations." },
      { h: "Defence RAG Architectures", p: "Retrieval-Augmented Generation linking classified mission documents to LLM agents with cryptographic security." },
      { h: "Conversational Copilots", p: "Intelligent assistants that surface maintenance records, flight logs and telemetry via natural language queries." },
    ],
  },
};

const CARDS = [
  { num: "01", icon: "🛡️", title: "Defence Technology", body: "Indigenous technologies for tactical defence, wide-area surveillance, autonomous mobility and mission-critical applications." },
  { num: "02", icon: "✈️", title: "Aerospace Systems",  body: "Advanced platforms, embedded avionics, high-reliability autonomous systems and telemetry-linked mission technologies." },
  { num: "03", icon: "🤖", title: "Autonomous Systems", body: "Intelligent UAVs, UGVs, robotics, SLAM navigation and distributed autonomous control architectures." },
  { num: "04", icon: "🧠", title: "AI / ML & Deep Tech", body: "Edge computer vision, quantised neural networks, sensor fusion, private LLMs and intelligent decision-support." },
];

export default function About() {
  const [tab, setTab] = useState('hardware');

  return (
    <section className="section section-light" id="about">
      <div className="container">

        {/* Section header */}
        <div className="section-header reveal visible">
          <div className="eyebrow">About Maya Labs</div>
          <h2>Engineering the future of <span className="text-accent" style={{ color: '#0B0B0B', webkitTextFillColor: 'initial', background: 'none' }}>national security.</span></h2>
          <p>MAYA LABS works at the frontier of aerospace, autonomous systems, edge AI/ML, tactical robotics, multi-spectral sensors and cybersecurity.</p>
        </div>

        {/* 4-column feature grid */}
        <div className="feature-grid reveal visible">
          {CARDS.map(c => (
            <article key={c.num} className="feature-card">
              <div className="feature-card-num" style={{ color: '#777770' }}>{c.num} // DOMAIN</div>
              <div className="feature-card-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </article>
          ))}
        </div>

        {/* Co-design matrix */}
        <div className="matrix-wrap reveal visible">
          <div className="section-header" style={{ marginBottom: 32 }}>
            <div className="eyebrow">Co-Design Paradigm</div>
            <h2>Bridging <span style={{ color: '#0B0B0B' }}>Software &amp; Hardware</span></h2>
            <p>Mission success demands that software and hardware are designed together from first principles.</p>
          </div>

          <div className="matrix-tabs">
            {Object.entries(TABS).map(([key, { label }]) => (
              <button key={key} className={`matrix-tab${tab === key ? ' active' : ''}`} onClick={() => setTab(key)}>
                {label}
              </button>
            ))}
          </div>

          <div className="matrix-panel" style={{ background: '#FFFFFF', borderColor: '#DCDCD6', color: '#0B0B0B' }}>
            <div className="matrix-panel-title" style={{ color: '#0B0B0B' }}>{TABS[tab].label}</div>
            <div className="matrix-panel-sub" style={{ color: '#777770' }}>{TABS[tab].sub}</div>
            <div className="matrix-items">
              {TABS[tab].items.map((item, i) => (
                <div key={i} className="matrix-item" style={{ borderColor: '#E3D34A' }}>
                  <h4 style={{ color: '#0B0B0B' }}>{item.h}</h4>
                  <p style={{ color: '#4A4A44' }}>{item.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
