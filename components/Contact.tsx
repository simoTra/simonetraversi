'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      let split: SplitText | null = null;
      if (headingRef.current) {
        split = new SplitText(headingRef.current, { type: 'chars', mask: 'chars' });
        gsap.from(split.chars, {
          y: 80,
          rotation: 5,
          opacity: 0,
          stagger: 0.04,
          ease: 'back.out(1.4)',
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

    });

  return (
    <section id="contact" ref={sectionRef} className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 ref={headingRef} className="h2-display mb-16">
          Let&apos;s work together.
        </h2>
      </div>
    </section>
  );
}