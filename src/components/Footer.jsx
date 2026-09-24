import React from 'react';

export default function Footer() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="footer" id="footer" style={{ backgroundColor: '#FFFFFF', color: '#000000', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
      <style>
        {`
          #footer {
            --bg-1: #F9F9F9;
            --bg-2: #F4F4F4;
            --fg: #000000;
            --fg-2: #444444;
            --fg-3: #777777;
            --line: rgba(0,0,0,0.15);
          }
          #footer .footer-cta-headline, #footer .eyebrow {
            color: #000000 !important;
          }
          #footer .brand b {
            color: #000000 !important;
          }
          #footer p, #footer .footer-note, #footer span, #footer .footer-bottom span {
            color: #444444 !important;
          }
          #footer a {
            color: #000000 !important;
          }
          #footer a:hover {
            color: #444444 !important;
          }
          #footer .btn-primary {
            color: #FFFFFF !important;
          }
          #footer .btn-primary:hover {
            color: #FFFFFF !important;
          }
        `}
      </style>
      <div className="container">
        <div className="footer-cta">
          <div>
            <div className="eyebrow" style={{ marginBottom: 8 }}>Collaboration</div>
            <div className="footer-cta-headline">Let's build the <span className="text-accent">sovereign future.</span></div>
          </div>
          <a className="btn btn-primary" href="#contact" onClick={(e) => scrollTo(e, 'contact')}>
            Initiate Dialogue <span className="arrow">→</span>
          </a>
        </div>

        <div className="footer-top">
          <div className="brand">
            <img 
              src="/mayalabs_logo.png" 
              alt="MAYA LABS" 
              style={{ height: '28px', width: 'auto', objectFit: 'contain', display: 'block', borderRadius: '5px' }} 
            />
          </div>
          <p>Indigenous Innovation for a Secure, Sovereign, and Intelligent Future.</p>
          <a className="footer-back" href="#top" onClick={(e) => scrollTo(e, 'top')}>Back to top ↑</a>
        </div>

        <div className="footer-nav">
          <a href="#about" onClick={(e) => scrollTo(e, 'about')}>About</a>
          <a href="#services" onClick={(e) => scrollTo(e, 'services')}>What We Do</a>
          <a href="#capabilities" onClick={(e) => scrollTo(e, 'capabilities')}>Capabilities</a>
          <a href="#solutions" onClick={(e) => scrollTo(e, 'solutions')}>Solutions</a>
          <a href="#rd" onClick={(e) => scrollTo(e, 'rd')}>R&amp;D Roadmap</a>
          <a href="#journey" onClick={(e) => scrollTo(e, 'journey')}>Journey</a>
          <a href="#case-studies" onClick={(e) => scrollTo(e, 'case-studies')}>Projects</a>
          <a href="#careers" onClick={(e) => scrollTo(e, 'careers')}>Careers</a>
          <a href="#contact" onClick={(e) => scrollTo(e, 'contact')}>Contact</a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 MAYA LABS. All Rights Reserved.</span>
          <span>DEFENSE • AEROSPACE • AUTONOMOUS SYSTEMS • DEEP TECH</span>
        </div>

        <p className="footer-note">
          Certain technologies, applications, system specifications, and defense project details may be subject to applicable export controls, national security regulations, and confidentiality restrictions.
        </p>
      </div>
    </footer>
  );
}
