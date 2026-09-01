import React from 'react';

const LABS = [
  { name:"ROBOTICS", sub:"Autonomy & Prototyping" },
  { name:"UAV LAB",  sub:"Aerodynamics & Payloads" },
  { name:"AI CENTER",sub:"Edge Neural Networks & LLMs" },
  { name:"RADAR & RF",sub:"Signal Processing & Anechoic" },
  { name:"CYBER LAB",sub:"Air-Gap Hardening & Crypto" },
  { name:"SENSOR LAB",sub:"Multi-Spectral Fusion" },
];

const INDUSTRIES = [
  { title:"Defence & Armed Forces",    body:"Tactical mission systems, autonomous mobility, multi-spectral sensing, combat robotics and AI security." },
  { title:"Aerospace & Aviation",      body:"Unmanned aerial systems, avionics, embedded electronics and telemetry flight control." },
  { title:"Homeland Security",         body:"Wide-area perimeter surveillance, counter-UAS shields, border monitoring and situational awareness." },
  { title:"Critical Infrastructure",   body:"AI monitoring, intrusion detection and autonomous physical security for strategic state assets." },
  { title:"Industrial Automation",     body:"AMR robotics, AI optical inspection, automated logistics and predictive maintenance." },
  { title:"Energy, Ports & Utilities", body:"Drone pipeline inspection, perimeter safeguarding and hazardous-area robotics." },
];

const TAGS = [
  "Artificial Intelligence","Quantised Machine Learning","Generative AI & LLMs","Edge Computer Vision",
  "Autonomous Systems","Sovereign Robotics","Tactical UAVs","Heavy UGVs","Counter-UAS Systems",
  "Radar & RF Signal Processing","Multi-Sensor Fusion","Air-Gapped Cybersecurity",
  "Digital Twins","Encrypted Tactical Mesh","Embedded Avionics",
];

export default function Facilities() {
  return (
    <>
      {/* ── R&D Facilities ───────────────────── */}
      <section className="section">
        <div className="container">
          <div className="facility-layout">

            <div className="reveal visible">
              <div className="eyebrow">R&amp;D Facilities</div>
              <h2>From concept to <span className="text-accent">prototype.</span></h2>
              <p>Our Technopark laboratories support rapid hardware experimentation, AI model training, sensor calibration and full-spectrum environmental validation.</p>
            </div>

            <div className="facility-matrix reveal visible reveal-delay-2">
              {LABS.map((l,i) => (
                <div key={i} className="facility-cell">{l.name}<small>{l.sub}</small></div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Strategic Industries ─────────────── */}
      <section className="section section-dark" id="industries">
        <div className="container">

          <div className="section-header reveal visible">
            <div className="eyebrow">Strategic Sectors</div>
            <h2>Technology for <span className="text-accent">mission-critical domains.</span></h2>
            <p>Deploying resilient, high-performance technology where reliability, precision and data sovereignty are paramount.</p>
          </div>

          <div className="grid-mosaic reveal visible">
            {INDUSTRIES.map((ind, i) => (
              <div key={i} className="grid-cell">
                <div className="cell-idx">0{i+1} // SECTOR</div>
                <div className="cell-name">{ind.title}</div>
                <div className="cell-desc">{ind.body}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── National Impact (Light Shaded Contrast) ──────────────────── */}
      <section className="section section-light" id="impact">
        <div className="container">
          <div className="national-layout">

            <div className="national-hero-num reveal visible" style={{ color: '#0B0B0B' }}>INDIA<span>2047</span></div>

            <div className="reveal visible reveal-delay-2">
              <div className="eyebrow">National Impact &amp; Vision</div>
              <h2>Sovereign technology for <span style={{ color: '#0B0B0B' }}>self-reliant India.</span></h2>
              <p style={{ color: '#4A4A44' }}>MAYA LABS is resolutely committed to India's technological sovereignty (Atmanirbhar Bharat) through indigenous deep-tech R&D, domestic IP creation and world-class engineering talent.</p>
              <div className="impact-tags">
                {["Indigenous R&D","Engineering Sovereignty","Strategic Collaboration","Deep-Tech Talent","Global Innovation"].map((t,i) => (
                  <span key={i} className="impact-tag" style={{ background: '#FFFFFF', borderColor: '#DCDCD6', color: '#0B0B0B' }}>{t}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── R&D Roadmap / Insights ──────────────────────── */}
      <section className="section section-dark" id="insights">
        <div className="container" id="rd">

          <div className="section-header reveal visible">
            <div className="eyebrow">Insights &amp; R&amp;D Roadmap</div>
            <h2>Research today. <span className="text-accent">Sovereign technology tomorrow.</span></h2>
            <p>Our active research pipelines anticipate future autonomous defence, edge cognitive computing and multi-domain threat mitigation.</p>
          </div>

          <div className="research-cloud reveal visible">
            {TAGS.map((t,i) => <span key={i} className="research-tag">{t}</span>)}
          </div>

          <div className="pipeline reveal visible">
            {["Research","Prototype","Engineering","Integration","Validation","Mission Deployment"].map((s,i,arr) => (
              <React.Fragment key={i}>
                <span className="pipeline-step">{s}</span>
                {i < arr.length-1 && <i className="pipeline-sep">→</i>}
              </React.Fragment>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
