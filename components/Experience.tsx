'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const entries = [
  {
    company: 'Acme Corp',
    role: 'Senior Full-Stack Engineer',
    dates: '2022 – Present',
    bullets: [
      'Led architecture of a real-time data platform serving 500k+ users, reducing latency by 40%.',
      'Mentored a team of 4 engineers and drove adoption of TypeScript across the monorepo.',
    ],
  },
  {
    company: 'Bright Digital',
    role: 'Full-Stack Developer',
    dates: '2019 – 2022',
    bullets: [
      'Built and shipped 12 client web applications using React, Next.js, and Node.js.',
      'Designed a reusable component library that cut development time by 30% across projects.',
    ],
  },
  {
    company: 'StartupXYZ',
    role: 'Frontend Engineer',
    dates: '2017 – 2019',
    bullets: [
      'Developed the consumer-facing dashboard from scratch, improving engagement by 25%.',
      'Integrated third-party APIs for payments, analytics, and authentication.',
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Timeline line draw
      if (timelineLineRef.current) {
        gsap.from(timelineLineRef.current, {
          scaleY: 0,
          transformOrigin: 'top center',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 80%',
            scrub: 1,
          },
        });
      }

      // Dot nodes — individual ScrollTrigger per dot
      const dots = sectionRef.current?.querySelectorAll('.timeline-dot');
      dots?.forEach((dot) => {
        gsap.from(dot, {
          scale: 0,
          ease: 'elastic.out(1.2, 0.5)',
          duration: 0.8,
          scrollTrigger: {
            trigger: dot,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });

      // Entry cards
      gsap.from('.timeline-entry', {
        x: -40,
        y: 60,
        scale: 0.95,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="experience" ref={sectionRef} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="h2-display mb-16">Experience</h2>

        {/* Timeline */}
        <div className="relative">
          {/* Continuous left line */}
          <div
            ref={timelineLineRef}
            className="absolute top-0 left-1.5 w-px h-full bg-[#757575] origin-top"
          />

          <div className="space-y-12">
            {entries.map((entry) => (
              <div
                key={entry.company}
                className="timeline-entry relative pl-10 md:pl-16"
              >
                {/* Dot node */}
                <div className="timeline-dot absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[#FF4400]" />

                <div>
                  <p className="text-[#757575] text-sm mb-1">{entry.dates}</p>
                  <p className="text-[#F4F4F4] font-semibold text-lg">{entry.company}</p>
                  <p className="text-[#D1E0E8] mb-3">{entry.role}</p>
                  <ul className="space-y-1">
                    {entry.bullets.map((bullet, i) => (
                      <li key={i} className="text-[#D1E0E8] text-sm">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
