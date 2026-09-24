import React from 'react';

const SERVICES = [
  { num: "", title: "Digital Transformation & Defence Tech", body: "Applied research for sovereign security, wide-area surveillance, tactical mobility and mission-critical enterprise systems." },
  { num: "", title: "AI & Automation Systems", body: "Edge neural networks, computer vision, quantized LLM agents, and automated command-and-control workflows." },
  { num: "", title: "UAV & UGV Platform Engineering", body: "Full-spectrum structural design, sensor payload integration, and autonomous edge-control for unmanned aerial and ground platforms." },
  { num: "", title: "Deep-Tech & Aerospace R&D", body: "Prototyping and avionics integration of aerospace platforms, embedded electronics, and telemetry-linked mission technology." },
  { num: "", title: "Counter-UAS & Drone Defence", body: "Multi-layer research for detecting, classifying, tracking and neutralising unauthorised aerial threats in real time." },
  { num: "", title: "Smart Security & Critical Infrastructure", body: "AI-enabled surveillance, perimeter protection, intrusion detection, and central command telemetry for national assets." },
];

export default function Services() {
  return (
    <section className="section" id="services" data-section-theme="white">
      <style>{`
        .services-layout {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 60px;
        }
        .services-sidebar {
          position: sticky;
          top: 120px;
          height: fit-content;
        }
        .services-cards {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .service-card-item {
          padding: 36px;
          background: #F9F9F9;
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 16px;
          position: relative;
          overflow: hidden;
          color: #0A0A0A;
          transition: box-shadow 0.2s ease, transform 0.2s ease;
        }
        .service-card-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
        }
        .service-card-item h3 {
          font-size: 20px;
          margin-bottom: 12px;
          color: #0A0A0A;
        }
        .service-card-item p {
          font-size: 15px;
          color: #444444;
          line-height: 1.65;
        }
        @media (max-width: 768px) {
          .services-layout {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .services-sidebar {
            position: static;
          }
          .service-card-item {
            padding: 24px;
          }
          .service-card-item h3 {
            font-size: 18px;
          }
        }
        @media (max-width: 480px) {
          .service-card-item {
            padding: 20px;
          }
          .service-card-item h3 {
            font-size: 16px;
          }
          .service-card-item p {
            font-size: 14px;
          }
        }
      `}</style>
      <div className="container">
        <div className="services-layout">
          
          <div className="services-sidebar">
            <div className="section-header reveal visible">
              <div className="eyebrow" style={{ color: '#777777' }}>Capabilities</div>
              <h2>Interactive <br/><em className="text-accent" style={{ color: 'var(--fg-dark)', background: 'none', WebkitTextFillColor: 'initial', fontFamily: 'var(--font-serif)' }}>Services</em></h2>
              <p>Bridging laboratory innovation and field deployment with end-to-end prototyping and integration.</p>
            </div>
          </div>

          <div className="services-cards">
            {SERVICES.map((s, idx) => (
              <article key={idx} className="service-card-item reveal visible">
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
                {/* Abstract wireframe accent */}
                <svg width="120" height="120" viewBox="0 0 100 100" style={{ position: 'absolute', right: '-15px', bottom: '-15px', opacity: 0.04, zIndex: 1 }} aria-hidden="true">
                  <circle cx="50" cy="50" r="40" stroke="#000" strokeWidth="2" fill="none" />
                  <line x1="10" y1="50" x2="90" y2="50" stroke="#000" strokeWidth="2" />
                  <line x1="50" y1="10" x2="50" y2="90" stroke="#000" strokeWidth="2" />
                </svg>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
