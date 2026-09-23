import React, { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('top');
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isClickScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  const navLinks = [
    { id: 'top', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'case-studies', label: 'Projects' },
    { id: 'insights', label: 'Insights' },
  ];

  // Map sub-sections to their primary navbar category
  const SECTION_MAP = {
    'top': 'top',
    'about': 'about',
    'gen-ai': 'about',
    'services': 'services',
    'uav': 'solutions',
    'counter': 'solutions',
    'radar': 'solutions',
    'security': 'solutions',
    'capabilities': 'solutions',
    'solutions': 'solutions',
    'industries': 'insights',
    'impact': 'insights',
    'insights': 'insights',
    'journey': 'insights',
    'case-studies': 'case-studies',
    'careers': 'case-studies',
    'contact': 'contact',
  };

  useEffect(() => {
    const allSectionIds = Object.keys(SECTION_MAP);

    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Calculate scroll progress percentage
      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollY / winHeight) * 100);
      }

      // If user just clicked a nav link, skip scroll spy momentarily
      if (isClickScrolling.current) return;

      // When near the top, always highlight Home
      if (scrollY < 120) {
        setActive('top');
        return;
      }

      // Find which section is most visible in the viewport
      const viewportMid = window.innerHeight * 0.35;
      let currentSection = 'top';

      for (const id of allSectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportMid && rect.bottom >= viewportMid) {
            currentSection = id;
            break;
          }
        }
      }

      const mappedNav = SECTION_MAP[currentSection] || 'top';
      setActive(mappedNav);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial check

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setOpen(false);

    // Lock active state immediately to avoid dual highlights or jumpy state
    const mapped = SECTION_MAP[id] || id;
    setActive(mapped);
    isClickScrolling.current = true;

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 900);

    const targetEl = document.getElementById(id);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
        {navLinks.map(({ id, label }) => {
          const isCurrentActive = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              className={isCurrentActive ? 'active' : ''}
              onClick={e => scrollTo(e, id)}
            >
              {label}
            </a>
          );
        })}
        <a className="nav-cta" href="#contact" onClick={e => scrollTo(e, 'contact')}>
          Let's Talk →
        </a>
      </nav>

      {/* Futuristic Scroll Progress Line */}
      <div 
        className="header-progress-bar" 
        style={{ width: `${scrollProgress}%` }} 
        aria-hidden="true" 
      />
    </header>
  );
}
