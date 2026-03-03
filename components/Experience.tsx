'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const entries = [
  {
    company: 'Fanuc - Sanoma',
    role: 'Robotic and Industrial Automation Trainer',
    dates: '2023 - Present',
    description: "I deliver hands-on training in industrial robotics, helping students and professionals program and operate FANUC robots. Focus on motion simulation, process optimization, and preparing participants for FANUC Robotics Certification.",
    bullets: [
      'Precision handling of industrial robots',
      'Robot programming and configuration',
      'Motion simulation and validation (RoboGuide)',
      'Cycle-time analysis and optimization',
      'Teaching and certification support',
    ],
  },
  {
    company: 'Makrshakr SRL',
    role: 'Software Engineer',
    dates: '2022 - Present',
    description: "I design, develop, and own the mobile experience for robotic bar systems, alongside web, backend, and embedded software. I integrate industrial robots on client sites and support rapid prototyping with 3D printing.",
    bullets: [
      'End-to-end ownership of mobile applications (Flutter)',
      'Web dashboards & NestJS backend integration',
      'Custom API development & IoT communication (MQTT)',
      'Industrial robot commissioning and programming (KUKA, ABB)',
      'Rapid prototyping and 3D fabrication',
      'Containerized deployments (Docker)',
      'AI and MCP servers'
    ],
  },
  {
    company: 'Comau - Pearson',
    role: 'Robotic and Industrial Automation Trainer',
    dates: '2018 - 2023',
    description: "Trained over 500 students in industrial robotics using e.DO robots, fieldbus communication, and programming. Led interactive sessions and teacher training to bridge education with industry-ready skills.",
    bullets: [
      'Fieldbus and I/O communication protocols',
      'Robot operation, configuration, and programming',
      'e.DO Learning Lab sessions for hands-on learning',
      'Teacher training & assessment programs',
      'Empowering students with practical automation competencies',
    ],
  },
];

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
            {entries.map((entry) => (
              <div
                key={entry.company}
                className="timeline-entry relative pl-10 md:pl-16"
              >
                <div className="timeline-dot absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[#FF4400]" />

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
      </div>
    </section>
  );
}
