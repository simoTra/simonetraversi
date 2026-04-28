'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experience, collaborations } from '@/lib/data/experience';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
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
    <section id="experience" ref={sectionRef} className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="h2-display mb-16">Experience</h2>

        <div className="relative">
          <div
            ref={timelineLineRef}
            className="absolute top-0 left-1.5 w-px h-full bg-[#757575] origin-top"
          />

          <div className="space-y-12">
            {experience.map((entry) => (
              <div
                key={entry.company}
                className="timeline-entry relative pl-10 md:pl-16"
              >
                {entry.icon ? (
                  <div className="timeline-dot absolute left-[-8px] top-0 w-12 h-12 rounded-sm overflow-hidden bg-[#1A1A1A] border border-[#757575]/40">
                    <Image src={entry.icon} alt={entry.company} width={48} height={48} className="w-full h-full object-contain p-1" />
                  </div>
                ) : (
                  <div className="timeline-dot absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[#FF4400]" />
                )}

                <div>
                  <p className="text-[#757575] text-sm mb-1">{entry.dates}</p>
                  <p className="text-[#F4F4F4] font-semibold text-lg">{entry.company}</p>
                  <p className="text-[#D1E0E8] mb-3">{entry.role}</p>
                  <p className="text-[#D1E0E8] mb-3">{entry.description}</p>
                  <ul className="space-y-1">
                    {entry.bullets.map((bullet, i) => (
                      <li key={i} className="text-[#D1E0E8] text-sm list-disc">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="h3-display mb-12">Short-Term Collaborations</h3>

          <div className="relative">
            <div className="absolute top-0 left-1.5 w-px h-full bg-[#757575]/50 origin-top" />

            <div className="space-y-12">
              {collaborations.map((entry) => (
                <div
                  key={entry.company}
                  className="timeline-entry relative pl-10 md:pl-16"
                >
                  {entry.icon ? (
                    <div className="timeline-dot absolute left-[-8px] top-0 w-12 h-12 rounded-sm overflow-hidden bg-[#1A1A1A] border border-[#757575]/40">
                      <Image src={entry.icon} alt={entry.company} width={48} height={48} className="w-full h-full object-contain p-1" />
                    </div>
                  ) : (
                    <div className="timeline-dot absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[#FF4400]" />
                  )}

                  <div>
                    <p className="text-[#757575] text-sm mb-1">{entry.dates}</p>
                    <p className="text-[#F4F4F4] font-semibold text-lg">{entry.company}</p>
                    <p className="text-[#D1E0E8] mb-3">{entry.role}</p>
                    <p className="text-[#D1E0E8] mb-3">{entry.description}</p>
                    {entry.bullets.length > 0 && (
                      <ul className="space-y-1">
                        {entry.bullets.map((bullet, i) => (
                          <li key={i} className="text-[#D1E0E8] text-sm list-disc">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
