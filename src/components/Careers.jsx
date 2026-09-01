import React from 'react';

const SKILLS = [
  "AI / Machine Learning", "Generative AI & LLMs", "LLM Quantization", "Computer Vision", 
  "Autonomous Robotics", "Embedded Systems", "Aerospace Engineering", "Avionics Electronics", 
  "Mechanical Design", "Systems Engineering", "Air-Gapped Cybersecurity", "RF & Radar Systems", 
  "SLAM Navigation", "Sensor Fusion", "Defense R&D", "Firmware Architecture"
];

export default function Careers() {
  return (
    <section className="section section-dark" id="careers">
      <div className="container">
        <div className="careers-layout reveal visible">
          <div className="section-header" style={{ marginBottom: 0 }}>
            <div className="eyebrow">Careers &amp; Talent</div>
            <h2>Build the future of <span className="text-accent">deep technology.</span></h2>
            <p>At MAYA LABS, you work on mission-critical technology that protects and empowers. Join our team of passionate researchers, embedded engineers, AI specialists, and builders solving tough challenges at the technological edge.</p>
          </div>

          <div className="career-panel">
            <h3>We welcome exceptional builders across:</h3>
            <div className="skill-cloud">
              {SKILLS.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
            <a 
              className="btn btn-primary" 
              href="mailto:admin@mayalabs.in?subject=Career%20Opportunity%20at%20MAYA%20LABS"
              style={{ marginTop: '10px' }}
            >
              Explore Opportunities <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
