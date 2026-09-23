import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [supported, setSupported] = useState(true);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable custom cursor on fine pointer devices (desktops/laptops)
    if (!window.matchMedia('(pointer: fine)').matches) {
      setSupported(false);
      return;
    }

    const onMouseMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    const handlePointerOver = (e) => {
      const target = e.target;
      if (
        target.closest('a, button, input, textarea, select, [role="button"], .feature-card, .case-card, .solution-card, .service-row, .matrix-tab, .timeline-item, .hero-bulb-side, .defense-bulb-container, .mini-card, .brand, .tab-btn')
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', handlePointerOver, { passive: true });

    let animationFrameId;
    const render = () => {
      // Smooth interpolation for the outer ring
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', handlePointerOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [visible]);

  if (!supported) return null;

  return (
    <div className={`cyber-cursor-wrapper ${visible ? 'cursor-visible' : ''}`}>
      <div 
        ref={dotRef} 
        className={`cyber-cursor-dot ${hovered ? 'is-hover' : ''} ${clicked ? 'is-clicked' : ''}`} 
      />
      <div 
        ref={ringRef} 
        className={`cyber-cursor-ring ${hovered ? 'is-hover' : ''} ${clicked ? 'is-clicked' : ''}`}
      >
        <span className="reticle-bracket tl" />
        <span className="reticle-bracket tr" />
        <span className="reticle-bracket bl" />
        <span className="reticle-bracket br" />
      </div>
    </div>
  );
}
