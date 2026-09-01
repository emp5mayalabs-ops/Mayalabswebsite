import React, { useState } from 'react';

const BLIPS = [
  { id: 1, name: "MAYA-UAV-304",       type: "Surveillance UAV",   distance: "3.4 km", status: "Active Tracking", coords: "8°32′15″N 76°54′12″E", cls: "b1" },
  { id: 2, name: "MAYA-UGV-012",       type: "Ground Patrol UGV",  distance: "1.2 km", status: "Patrolling",      coords: "8°32′08″N 76°54′05″E", cls: "b2" },
  { id: 3, name: "MAYA-CUAS-SHIELD",   type: "Drone Interceptor",  distance: "5.8 km", status: "Standby",         coords: "8°32′22″N 76°54′25″E", cls: "b3" },
];

export default function Hero() {
  const [active, setActive] = useState(null);

  const goTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="hero" id="top">
      {/* ── Left: Copy ──────────────────────────────────── */}
      <div className="hero-content reveal visible">
        <div className="eyebrow">Defense · Aerospace · Deep-Tech</div>

        <h1 className="hero-title">
          Indigenous<br />
          Innovation.<br />
          <em className="text-accent">Intelligent Systems.</em>
        </h1>

        <p className="hero-desc">
          MAYA LABS is an advanced research organisation developing sovereign,
          mission-ready solutions across autonomous systems, defence technology,
          edge AI, radar sensing and tactical cybersecurity.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#services" onClick={e => goTo(e,'services')}>
            Explore Capabilities <span className="arrow">→</span>
          </a>
          <a className="btn btn-outline" href="#contact" onClick={e => goTo(e,'contact')}>
            Partner With Us <span className="arrow">→</span>
          </a>
        </div>
      </div>

      {/* ── Right: Tactical Radar ─────────────────────── */}
      <div className="hero-visual reveal visible">
        <div className="radar" role="img" aria-label="Tactical live telemetry radar">
          <div className="radar-ring" />
          <div className="radar-ring r2" />
          <div className="radar-ring r3" />
          <div className="radar-cross h" />
          <div className="radar-cross v" />
          <div className="sweep" />

          {BLIPS.map(b => (
            <button
              key={b.id}
              className={`blip ${b.cls}`}
              onMouseEnter={() => setActive(b)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(a => a?.id === b.id ? null : b)}
              aria-label={`Blip: ${b.name}`}
            />
          ))}

          <div className="radar-hud">
            {active ? (
              <div className="telemetry-card">
                <div style={{ color: 'var(--gold)', fontWeight: 700, marginBottom: 3 }}>{active.name}</div>
                <div style={{ color: 'var(--fg)', fontSize: 11 }}>{active.type}</div>
                <small>DIST: {active.distance} · {active.status}</small>
                <small>COORDS: {active.coords}</small>
              </div>
            ) : (
              <div>
                MAYA // TACTICAL TELEMETRY
                <small>LIVE R&amp;D ENVIRONMENT</small>
                <small style={{ color: 'var(--fg-3)', fontSize: 8 }}>HOVER BLIPS FOR SENSOR FEED</small>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
