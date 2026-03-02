'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  {
    label: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'Rust'],
  },
  {
    label: 'Frameworks',
    skills: ['Next.js', 'React', 'Node.js', 'FastAPI', 'Tailwind CSS'],
  },
  {
    label: 'Tools',
    skills: ['Git', 'Docker', 'PostgreSQL', 'Redis', 'AWS'],
  },
];

export default function Resume() {
  const sectionRef = useRef<HTMLElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      // H2 clip-path reveal
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

      // Skill tags wave stagger
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

      // Education block
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
    <section id="resume" ref={sectionRef} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 ref={h2Ref} className="h2-display mb-16">Resume</h2>

        {/* Download button */}
        <div className="mb-16">
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-[#FF4400] text-[#F4F4F4] px-8 py-4 font-semibold transition-colors duration-200 hover:bg-[#D93B00]"
          >
            Download PDF
          </a>
        </div>

        {/* Skills block */}
        <div className="mb-16 skill-tags-container">
          <h3 className="h3-display mb-8">Skills</h3>
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

        {/* Education block */}
        <div className="education-block">
          <h3 className="h3-display mb-8">Education</h3>
          <div>
            <p className="text-[#F4F4F4] font-semibold">
              University of Milan
            </p>
            <p className="text-[#D1E0E8]">
              B.Sc. Computer Science
            </p>
            <p className="text-[#757575] text-sm">2018 – 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
}
