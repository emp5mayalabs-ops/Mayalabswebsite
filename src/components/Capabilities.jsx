import React from 'react';

const CAPS = [
  { title:"Artificial Intelligence & ML",  detail:"Real-time Perception · High-Accuracy Classification · Predictive Analytics · Quantised Edge AI" },
  { title:"Robotics & Sovereign Autonomy", detail:"3D SLAM Navigation · Point-Cloud Mapping · Dynamic Path Planning · Swarm Control" },
  { title:"Computer Vision & Optics",      detail:"Multi-Object Detection · Vehicle Recognition · Persistent Target Tracking · Industrial Inspection" },
  { title:"Embedded & Avionics Systems",   detail:"Custom Multi-Layer PCB · Real-Time Firmware · Edge Computing · Sensor Signal Controllers" },
  { title:"Tactical Cybersecurity",        detail:"Encrypted Mesh Networks · Air-Gapped Infrastructures · Firmware Hardening · Mission Cryptography" },
  { title:"Systems Engineering",          detail:"End-to-End Architecture · Environmental Validation · Stress Testing · Field Deployment Readiness" },
];

export default function Capabilities() {
  return (
    <section className="section" id="capabilities">
      <div className="container">

        <div className="section-header reveal visible">
          <div className="eyebrow">Core Capabilities</div>
          <h2>Engineering built for <span className="text-accent">complex missions.</span></h2>
          <p>Deep technical disciplines engineered from first principles for sovereign reliability and defence-ready deployment.</p>
        </div>

        <div className="tech-list reveal visible">
          {CAPS.map((c, i) => (
            <div key={i} className="tech-row">
              <b>{c.title}</b>
              <span>{c.detail}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
