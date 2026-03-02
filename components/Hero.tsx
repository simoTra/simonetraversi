'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!h1Ref.current || !subtitleRef.current || !descRef.current || !buttonsRef.current) return;

      // Split h1 by words — clip-path wipe per word, no spring
      const split = new SplitText(h1Ref.current, { type: 'words' });

      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // 1. H1: word-by-word horizontal wipe (left → right)
      tl.from(split.words, {
        clipPath: 'inset(0 100% 0 0)',
        duration: 0.55,
        stagger: 0.06,
      });

      // 2. Subtitle: horizontal wipe
      tl.from(subtitleRef.current, {
        clipPath: 'inset(0 100% 0 0)',
        duration: 0.6,
      }, '-=0.25');

      // 3. Description + buttons: fade up
      tl.from([descRef.current, buttonsRef.current], {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power3.out',
      }, '-=0.35');

      // Parallax on h1
      gsap.to(h1Ref.current, {
        y: -80,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Parallax on subtitle
      gsap.to(subtitleRef.current, {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      return () => split.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex items-center px-6 pt-24"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h1 ref={h1Ref} className="h1-display">
          Simone
        </h1>
        <h1 ref={h1Ref} className="h1-display mb-6 ml-32 sm:ml-18">
          Traversi
        </h1>

        <p ref={subtitleRef} className="text-xl md:text-2xl text-[#757575] mb-6">
          Full-Stack Developer &amp; Creative Engineer
        </p>

        <p ref={descRef} className="text-base md:text-lg text-[#D1E0E8] max-w-2xl mb-10">
          I build fast, accessible, and beautifully crafted digital experiences.
          <br />
          From concept to deployment — always with intention.
        </p>

        <div ref={buttonsRef} className="flex flex-col md:flex-row gap-4">
          <a
            href="#projects"
            className="inline-block bg-[#FF4400] text-[#F4F4F4] px-8 py-4 font-semibold text-center transition-colors duration-200 hover:bg-[#D93B00]"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-block border border-[#F4F4F4] text-[#F4F4F4] px-8 py-4 font-semibold text-center transition-all duration-200 hover:bg-[#F4F4F4] hover:text-[#1A1A1A]"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
