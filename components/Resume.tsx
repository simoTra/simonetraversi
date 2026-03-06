'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skillGroups } from '@/lib/data/skills';
import { education } from '@/lib/data/education';

gsap.registerPlugin(ScrollTrigger);

export default function Resume() {
  const sectionRef = useRef<HTMLElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);

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

      const skillTags = sectionRef.current?.querySelectorAll('.skill-tag');
      if (skillTags?.length) {
        gsap.from(skillTags, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: { amount: 0.6, ease: 'sine.inOut' },
          scrollTrigger: {
            trigger: '.skill-tags-container',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      }

      gsap.from('.education-block', {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.education-block',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="resume" ref={sectionRef} className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 ref={h2Ref} className="h2-display mb-16">Resume</h2>

        <div className="mb-16">
          <a
            href="/resume"
            className="inline-block bg-[#FF4400] text-[#F4F4F4] px-8 py-4 font-semibold transition-colors duration-200 hover:bg-[#D93B00]"
          >
            Download PDF
          </a>
        </div>

        <div className="mb-16 skill-tags-container">
          <h3 className="h3-display mb-8">Skills</h3>
          <p className="text-[#D1E0E8] text-base md:text-lg mb-8 leading-relaxed pt-4">
            A (non-exhaustive) list of my core technical skills.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="text-[#757575] text-sm uppercase tracking-widest mb-4">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag bg-[#1A1A1A] border border-[#757575] text-[#D1E0E8] text-xs px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="education-block">
          <h3 className="h3-display mb-8">Education</h3>

          {education.map((entry) => (
            <div key={entry.institution + entry.period} className="mb-6 flex gap-4 items-start">
              {entry.icon && (
                <div className="w-12 h-12 shrink-0 rounded-sm overflow-hidden bg-[#1A1A1A] border border-[#757575]/40">
                  <Image src={entry.icon} alt={entry.institution} width={48} height={48} className="w-full h-full object-contain p-1" />
                </div>
              )}
              <div>
                <p className="text-[#F4F4F4] font-semibold">{entry.institution}</p>
                <p className="text-[#D1E0E8]">{entry.degree}</p>
                <p className="text-[#757575] text-sm">
                  {entry.period}{entry.grade ? ` | Grade: ${entry.grade}` : ''}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
