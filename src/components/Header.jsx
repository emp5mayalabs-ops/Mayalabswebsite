import React, { useState, useEffect } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('top');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const SECTIONS = ['top', 'about', 'solutions', 'services', 'case-studies', 'insights', 'contact'];

    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      let cur = 'top';
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          if (top <= 140 && bottom >= 140) { cur = id; break; }
        }
      }
      setActive(cur);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navLinks = [
    { id: 'top', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'services', label: 'Services' },
    { id: 'case-studies', label: 'Projects' },
    { id: 'insights', label: 'Insights' },
  ];

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <a className="brand" href="#top" onClick={e => scrollTo(e, 'top')} aria-label="MAYA LABS home">
        <span className="brand-mark">M</span>
        <span>MAYA <b>LABS</b></span>
      </a>

      <button
        className={`menu-toggle${open ? ' open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        <span /><span /><span />
      </button>

      <nav className={`nav${open ? ' open' : ''}`} id="main-nav">
        {navLinks.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? 'active' : ''}
            onClick={e => scrollTo(e, id)}
          >
            {label}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={e => scrollTo(e, 'contact')}>
          Let's Talk →
        </a>
      </nav>
    </header>
  );
}
