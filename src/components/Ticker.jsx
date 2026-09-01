import React from 'react';

const ITEMS = [
  "UAV Systems", "UGV Robotics", "Tactical AI / ML", "Counter-UAS Shield",
  "Radar & Sensing", "Air-Gapped Cybersecurity", "Aerospace Systems",
  "Defense GenAI", "Secure RAG Agents", "Autonomous Robotics",
];

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            {item}
            <span className="ticker-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
