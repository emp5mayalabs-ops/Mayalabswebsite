import React from 'react';

const SENSORS = [
  { code: "SAR",    name: "Synthetic Aperture Radar",  desc: "High-resolution 2D/3D surface mapping in adverse weather and zero-visibility darkness." },
  { code: "PD",     name: "Pulse-Doppler Radar",       desc: "High-velocity airborne and ground target tracking with precision Doppler frequency shift analysis." },
  { code: "MMW",    name: "Millimetre-Wave Sensing",   desc: "Short-range high-frequency radar for obstacle detection and counter-drone systems." },
  { code: "ATR",    name: "AI Target Recognition",     desc: "Edge CNNs performing real-time classification on raw radar returns and EO/IR imagery." },
  { code: "GPR",    name: "Ground-Penetrating Radar",  desc: "Subsurface imaging for detecting buried hazards, infrastructure and subterranean threats." },
  { code: "FUSION", name: "Multi-Sensor Intelligence", desc: "Synchronised algorithmic fusion of optical, thermal, acoustic and RF feeds into a unified tactical picture." },
];

export default function Sensing() {
  return (
    <section className="section section-light" id="radar">
      <div className="container">

        <div className="section-header reveal visible">
          <div className="eyebrow">Radar &amp; Sensing</div>
          <h2>Raw signals to <span style={{ color: '#0B0B0B' }}>actionable intelligence.</span></h2>
          <p>Advanced sensor hardware, AI-assisted signal processing and real-time sensor fusion for defence, aerospace and homeland security.</p>
        </div>

        <div className="grid-mosaic reveal visible">
          {SENSORS.map(s => (
            <div key={s.code} className="grid-cell">
              <div className="cell-code" style={{ color: '#0B0B0B' }}>{s.code}</div>
              <div className="cell-name">{s.name}</div>
              <div className="cell-desc">{s.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
