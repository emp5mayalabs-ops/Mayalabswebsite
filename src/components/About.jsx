import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity, display: 'inline-block', marginRight: '0.3em', marginTop: '0.1em' }}>
      {children}
    </motion.span>
  );
}

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 60%', 'end 60%']
  });

  const statement = "We engineer the future of national security. Mission success demands that software and hardware are designed together from first principles, pushing the boundaries of autonomous systems and edge intelligence.";
  const words = statement.split(" ");

  return (
    <section className="section section-statement" id="about" data-section-theme="dark" ref={containerRef}>
      <div className="container">
        <div className="statement-text">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </div>
      </div>
    </section>
  );
}
