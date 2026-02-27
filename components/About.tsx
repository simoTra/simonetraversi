'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const bodyTextRef = useRef<HTMLParagraphElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      if (h2Ref.current) {
        gsap.from(h2Ref.current, {
          clipPath: 'inset(0 0 100% 0)',
          duration: 0.9,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      if (imageRef.current) {
        gsap.from(imageRef.current, {
          scale: 0.85,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });

        gsap.to(imageRef.current, {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      let split: SplitText | null = null;
      if (bodyTextRef.current) {
        split = new SplitText(bodyTextRef.current, { type: 'lines', mask: 'lines' });
        gsap.from(split.lines, {
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bodyTextRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      }

      if (listRef.current) {
        gsap.from(listRef.current.querySelectorAll('li'), {
          x: -20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      }

      return () => split?.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 ref={h2Ref} className="h2-display mb-16">
          <span className="border-b-2 border-[#FF4400] inline-block pb-1">About</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div ref={imageRef} className="aspect-square bg-[#D1E0E8]/20 w-full" />

          <div>
            <p ref={bodyTextRef} className="text-[#D1E0E8] text-base md:text-lg mb-8 leading-relaxed">
              I&apos;m a full-stack developer with a passion for building elegant, high-performance
              web experiences. With years of experience across the stack, I thrive at the
              intersection of design and engineering. I care deeply about the details that make
              software feel alive.
            </p>

            <ul ref={listRef} className="space-y-3">
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
