import React from 'react';

const ITEMS = [
  { title:"AI Computer Vision & Surveillance",      body:"Real-time edge video analytics, multi-camera tracking, behavioural anomaly detection and automated alert routing." },
  { title:"Intelligent Sovereign Access Control",   body:"Biometric identity verification, air-gapped credential logs and automated defence-facility access management." },
  { title:"Smart Perimeter Intrusion Detection",    body:"Multi-spectral optical and seismic sensor fusion to detect, classify and notify perimeter breaches instantly." },
  { title:"Autonomous Robotic Security Patrols",    body:"Unmanned ground robots and autonomous patrol drones performing scheduled and on-demand surveillance in remote zones." },
];

export default function Security() {
  return (
    <section className="section section-dark" id="security">
      <div className="container">

        <div className="section-header reveal visible">
          <div className="eyebrow">Smart Security</div>
          <h2>One intelligent layer across <span className="text-accent">every security domain.</span></h2>
          <p>Unifying edge AI cameras, physical sensors, autonomous patrols and centralised command telemetry for comprehensive defence-grade protection.</p>
        </div>

        <div className="grid-mosaic reveal visible" style={{ gridTemplateColumns:'repeat(2,1fr)' }}>
          {ITEMS.map((item, i) => (
            <div key={i} className="grid-cell">
              <div className="cell-idx">0{i+1} // DOMAIN</div>
              <div className="cell-name">{item.title}</div>
              <div className="cell-desc">{item.body}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
