import React from 'react';

const SERVICES = [
  { num: "01", title: "Digital Transformation & Defence Tech", body: "Applied research for sovereign security, wide-area surveillance, tactical mobility and mission-critical enterprise systems." },
  { num: "02", title: "AI & Automation Systems", body: "Edge neural networks, computer vision, quantized LLM agents, and automated command-and-control workflows." },
  { num: "03", title: "UAV & UGV Platform Engineering", body: "Full-spectrum structural design, sensor payload integration, and autonomous edge-control for unmanned aerial and ground platforms." },
  { num: "04", title: "Deep-Tech & Aerospace R&D", body: "Prototyping and avionics integration of aerospace platforms, embedded electronics, and telemetry-linked mission technology." },
  { num: "05", title: "Counter-UAS & Drone Defence", body: "Multi-layer research for detecting, classifying, tracking and neutralising unauthorised aerial threats in real time." },
  { num: "06", title: "Smart Security & Critical Infrastructure", body: "AI-enabled surveillance, perimeter protection, intrusion detection, and central command telemetry for national assets." },
];

export default function Services() {
  return (
    <section className="section section-light" id="services">
      <div className="container">

        <div className="section-header reveal visible">
          <div className="eyebrow">Services &amp; Capabilities</div>
          <h2>From <span style={{ color: '#0B0B0B' }}>deep research</span> to mission-ready systems.</h2>
          <p>Bridging laboratory innovation and field deployment — end-to-end prototyping, integration, testing and validation.</p>
        </div>

        <div className="service-list reveal visible">
          {SERVICES.map(s => (
            <article key={s.num} className="service-row">
              <span className="service-num">{s.num}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
              <span className="service-arrow">↗</span>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
