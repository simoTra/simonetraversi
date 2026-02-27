'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'DataStream Platform',
    description:
      'Real-time analytics dashboard for monitoring distributed systems at scale.',
    tags: ['Next.js', 'TypeScript', 'WebSockets', 'PostgreSQL'],
    href: '#',
  },
  {
    title: 'DesignKit UI',
    description:
      'Open-source component library with 50+ accessible, composable React components.',
    tags: ['React', 'Tailwind', 'Storybook', 'Vitest'],
    href: '#',
  },
  {
    title: 'ShipFast CLI',
    description:
      'Developer CLI tool that scaffolds production-ready Next.js apps in under 60 seconds.',
    tags: ['Node.js', 'TypeScript', 'Commander', 'Handlebars'],
    href: '#',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('.project-card', {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="projects" ref={sectionRef} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card border border-[#757575] rounded-lg overflow-hidden transition-colors duration-300 hover:border-[#FF4400]"
            >
              {/* 16:9 image placeholder */}
              <div className="aspect-video bg-[#D1E0E8]/20" />

              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-[#F4F4F4] font-semibold text-xl">
                  {project.title}
                </h3>
                <p className="text-[#757575] text-sm line-clamp-2">
                  {project.description}
                </p>

                {/* Tech tag pills */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#1A1A1A] border border-[#757575] text-[#D1E0E8] text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.href}
                  className="text-[#FF4400] text-sm font-medium mt-1 self-start"
                >
                  View →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
