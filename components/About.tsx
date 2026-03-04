'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const IMAGES = [
  '/images/simone.jpeg',
  '/images/simone2.jpeg',
  '/images/simone3.jpeg',
  '/images/simone4.jpeg',
  '/images/simone5.jpeg',
  '/images/simone6.jpeg',
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const bodyTextRef = useRef<HTMLParagraphElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const currentIdx = useRef(0);
  const isAnimating = useRef(false);
  const [activeDot, setActiveDot] = useState(0);

  const goToSlide = useCallback((next: number) => {
    if (isAnimating.current) return;
    const prev = currentIdx.current;
    if (prev === next) return;

    isAnimating.current = true;
    const prevEl = slideRefs.current[prev];
    const nextEl = slideRefs.current[next];

    if (!prevEl || !nextEl) {
      isAnimating.current = false;
      return;
    }

    gsap.set(nextEl, { zIndex: 1 });
    gsap.set(prevEl, { zIndex: 0 });

    gsap.fromTo(
      nextEl,
      { opacity: 0, scale: 1.04 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.set(prevEl, { opacity: 0 });
          currentIdx.current = next;
          setActiveDot(next);
          isAnimating.current = false;
        },
      }
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((currentIdx.current + 1) % IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [goToSlide]);

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
    <section id="about" ref={sectionRef} className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 ref={h2Ref} className="h2-display mb-16">
          <span className="border-b-2 border-[#FF4400] inline-block pb-1">About</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div ref={imageRef} className="relative aspect-square w-full overflow-hidden group">
            {IMAGES.map((src, i) => (
              <div
                key={src}
                ref={el => { slideRefs.current[i] = el; }}
                className="absolute inset-0"
                style={{ opacity: i === 0 ? 1 : 0, zIndex: i === 0 ? 1 : 0 }}
              >
                <Image
                  src={src}
                  alt={`Photo ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={i === 0}
                />
              </div>
            ))}

            <button
              onClick={() => goToSlide((currentIdx.current - 1 + IMAGES.length) % IMAGES.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center bg-[#1A1A1A]/70 text-[#F4F4F4] opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-[#FF4400] cursor-pointer"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={() => goToSlide((currentIdx.current + 1) % IMAGES.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center bg-[#1A1A1A]/70 text-[#F4F4F4] opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-[#FF4400] cursor-pointer"
              aria-label="Next"
            >
              →
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 cursor-pointer ${
                    activeDot === i ? 'bg-[#FF4400]' : 'bg-[#F4F4F4]/50'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div>
            <p ref={bodyTextRef} className="text-[#D1E0E8] text-base md:text-lg mb-8 leading-relaxed">
              I&apos;m a robotics software engineer and full-stack developer, passionate about building intuitive interfaces that make complex machines easy to control. I thrive at the intersection of code, automation, and hands-on experimentation, turning ideas into interactive systems.
            </p>

            <ul ref={listRef} className="space-y-3">
              <li className="text-[#D1E0E8]">
                <span className="text-[#FF4400]">→</span> Robotics programming & industrial automation
              </li>
              <li className="text-[#D1E0E8]">
                <span className="text-[#FF4400]">→</span> Full-stack & embedded software development
              </li>
              <li className="text-[#D1E0E8]">
                <span className="text-[#FF4400]">→</span> 3D prototyping & experimental tinkering
              </li>
              <li className="text-[#D1E0E8]">
                <span className="text-[#FF4400]">→</span> UX-driven interfaces for complex systems
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
