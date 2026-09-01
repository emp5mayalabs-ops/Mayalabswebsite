import React from 'react';

export default function DroneDefense() {
  return (
    <section className="section section-dark" id="counter">
      <div className="container">
        <div className="split reverse">

          <div className="split-visual reveal visible">
            <div className="cuas-visual" role="img" aria-label="Counter-UAS detection visual">
              <div className="cuas-target"><span /></div>
              <div className="cuas-label">COUNTER-UAS // SHIELD<br /><small>DETECT · IDENTIFY · NEUTRALISE</small></div>
            </div>
          </div>

          <div className="split-copy reveal visible reveal-delay-2">
            <div className="eyebrow">Drone Defence</div>
            <h2>Layered protection against <span className="text-accent">emerging aerial threats.</span></h2>
            <p>Our Counter-UAS R&D delivers comprehensive detection, real-time RF tracking, AI-powered optical classification and responsive countermeasure protocols.</p>

            <ul className="check-list">
              <li>Sub-second RF &amp; optical detection</li>
              <li>Multi-sensor fusion tracking</li>
              <li>AI-assisted threat classification</li>
              <li>Directional RF jamming &amp; protocol disruption</li>
              <li>Air-defence network integration</li>
              <li>Mobile and stationary deployments</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
