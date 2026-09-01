import React from 'react';

export default function Unmanned() {
  return (
    <section className="section" id="uav">
      <div className="container">
        <div className="split">

          <div className="split-copy reveal visible">
            <div className="eyebrow">UAVs &amp; UGVs</div>
            <h2>Unmanned systems with <span className="text-accent">intelligence built in.</span></h2>
            <p>Next-generation unmanned aerial and ground platforms engineered for defence, strategic security, industrial inspection and harsh operational frontiers.</p>

            <div className="mini-grid">
              <div className="mini-card">
                <strong>UAV PLATFORMS</strong>
                <p>Autonomous flight · Long-endurance surveillance · Swarm intelligence · Multi-spectral payloads · Real-time edge vision</p>
              </div>
              <div className="mini-card">
                <strong>UGV ROBOTICS</strong>
                <p>Tactical reconnaissance · Autonomous navigation · Hazardous patrol · Manipulator arms · Heavy payload logistics</p>
              </div>
            </div>
          </div>

          <div className="split-visual reveal visible reveal-delay-2">
            <div className="platform" role="img" aria-label="MAYA Autonomy Platform Diagram">
              <div className="platform-ring" />
              <div className="platform-core">MAYA<br /><small>AUTONOMY CORE</small></div>
              <span className="orb o1" />
              <span className="orb o2" />
              <span className="orb o3" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
