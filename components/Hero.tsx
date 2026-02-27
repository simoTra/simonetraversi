'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const elements = containerRef.current?.querySelectorAll('.hero-animate');
      if (!elements) return;

      gsap.from(elements, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 pt-24"
    >
      <div ref={containerRef} className="max-w-6xl mx-auto w-full">
        <h1 className="hero-animate text-5xl md:text-7xl lg:text-9xl font-bold leading-none tracking-tight mb-4">
          Simone Traversi
        </h1>

        <p className="hero-animate text-xl md:text-2xl text-[#757575] mb-6">
          Full-Stack Developer &amp; Creative Engineer
        </p>

        <p className="hero-animate text-base md:text-lg text-[#D1E0E8] max-w-2xl mb-10">
          I build fast, accessible, and beautifully crafted digital experiences.
          <br />
          From concept to deployment — always with intention.
        </p>

        <div className="hero-animate flex flex-col md:flex-row gap-4">
          <a
            href="#projects"
            className="inline-block bg-[#FF4400] text-[#F4F4F4] px-8 py-4 font-semibold text-center"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-block border border-[#F4F4F4] text-[#F4F4F4] px-8 py-4 font-semibold text-center"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
