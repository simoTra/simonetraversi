'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div ref={containerRef} className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16">
          <span className="border-b-2 border-[#FF4400] inline-block pb-1">About</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Image placeholder */}
          <div className="aspect-square bg-[#D1E0E8]/20 w-full" />

          {/* Text block */}
          <div>
            <p className="text-[#D1E0E8] text-base md:text-lg mb-8 leading-relaxed">
              I&apos;m a full-stack developer with a passion for building elegant, high-performance
              web experiences. With years of experience across the stack, I thrive at the
              intersection of design and engineering. I care deeply about the details that make
              software feel alive.
            </p>

            <ul className="space-y-3">
              <li className="text-[#D1E0E8]">
                <span className="text-[#FF4400]">→</span> Problem solver
              </li>
              <li className="text-[#D1E0E8]">
                <span className="text-[#FF4400]">→</span> Clean code advocate
              </li>
              <li className="text-[#D1E0E8]">
                <span className="text-[#FF4400]">→</span> Performance obsessed
              </li>
              <li className="text-[#D1E0E8]">
                <span className="text-[#FF4400]">→</span> Lifelong learner
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
