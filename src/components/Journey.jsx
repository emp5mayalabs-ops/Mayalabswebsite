import React, { useState } from 'react';

const MILESTONES = [
  {
    year: "2008",
    title: "Started as an IT Startup",
    brief: "Academic ERP & Enterprise Architectures.",
    detail: "Our foundational venture focused on designing high-reliability enterprise resource planning systems for educational institutions, establishing our architectural discipline and engineering rigor."
  },
  {
    year: "2010",
    title: "High-Throughput Travel Tech",
    brief: "Real-time Flight Engine & Booking Systems.",
    detail: "Transitioned into high-throughput travel tech. Engineered real-time flight search engines, multi-airline booking databases, and high-availability distributed systems."
  },
  {
    year: "2013",
    title: "Mobile EdTech Launch",
    brief: "LearnMob Distributed Application.",
    detail: "Developed mobile-first learning technologies. The LearnMob application supported offline study synchronization, interactive modules, and high-concurrency student analytics."
  },
  {
    year: "2015",
    title: "Cybersecurity & Neural Networks",
    brief: "Automated packet inspection and threat analysis.",
    detail: "Initiated deep cybersecurity research. Built automated network scanners, packet inspection algorithms, and early neural networks for threat classification."
  },
  {
    year: "2017",
    title: "Enterprise Learning Platforms",
    brief: "Massive scale, multi-tenant LMS portals.",
    detail: "Engineered scalable learning management portals servicing enterprise-level compliance training and distributed digital defense academies."
  },
  {
    year: "2020",
    title: "MAYA LABS Foundation",
    brief: "Hardware-Software Convergence & Aerospace Tech.",
    detail: "Transitioned entirely to physical-digital deep tech. Formed MAYA LABS in Technopark, Trivandrum—pioneering custom embedded boards, sensor clusters, and tactical telemetry systems."
  },
  {
    year: "NOW",
    title: "Advanced Defense & Sovereign Deep-Tech R&D",
    brief: "Autonomous UAVs/UGVs, Counter-UAS Shields, and Air-Gapped GenAI.",
    detail: "Leading indigenous defense innovation in support of Atmanirbhar Bharat (Self-Reliant India) across tactical autonomous robotics, multi-spectral sensor fusion, air-gapped GenAI LLMs, and layered drone defense shields."
  }
];

export default function Journey() {
  const [selected, setSelected] = useState("NOW");

  return (
    <section className="section section-light" id="journey">
      <div className="container">
        <div className="section-header reveal visible">
          <div className="eyebrow">Our Evolution</div>
          <h2>From IT startup to <span style={{ color: '#0B0B0B' }}>deep-tech R&amp;D leader.</span></h2>
          <p>Select any milestone year below to explore the technological evolution and milestones that forged MAYA LABS.</p>
        </div>

        <div className="timeline reveal visible" style={{ borderColor: '#DCDCD6' }}>
          {MILESTONES.map((item) => {
            const isActive = selected === item.year;
            return (
              <div 
                key={item.year} 
                className={`timeline-item${isActive ? ' active' : ''}`}
                style={{
                  borderLeft: isActive ? '2px solid #0B0B0B' : 'none',
                  background: isActive ? '#FFFFFF' : 'transparent',
                  paddingLeft: isActive ? '36px' : '34px'
                }}
                onClick={() => setSelected(item.year)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelected(item.year); }}
                aria-label={`Milestone ${item.year}: ${item.title}`}
              >
                <div className="timeline-year" style={{ color: isActive ? '#0B0B0B' : '#777770' }}>{item.year}</div>
                <div className="timeline-content">
                  <h3 style={{ color: '#0B0B0B' }}>{item.title}</h3>
                  <div className="timeline-brief" style={{ color: '#4A4A44' }}>{item.brief}</div>
                  {isActive && (
                    <div className="timeline-detail" style={{ color: '#4A4A44', borderColor: '#E3D34A' }}>
                      {item.detail}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
