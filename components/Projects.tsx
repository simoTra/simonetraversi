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
      // Card entrance
      gsap.from('.project-card', {
        y: 80,
        scale: 0.9,
        rotation: -2,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });

      // 3D tilt on mousemove
      const cards = sectionRef.current?.querySelectorAll<HTMLElement>('.project-card');
      const cleanupFns: (() => void)[] = [];

      cards?.forEach((card) => {
        gsap.set(card, { transformPerspective: 800 });

        const xTo = gsap.quickTo(card, 'rotationY', { duration: 0.4, ease: 'power2.out' });
        const yTo = gsap.quickTo(card, 'rotationX', { duration: 0.4, ease: 'power2.out' });

        function onMouseMove(e: MouseEvent) {
          const rect = card.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dx = ((e.clientX - cx) / (rect.width / 2)) * 8;
          const dy = -((e.clientY - cy) / (rect.height / 2)) * 8;
          xTo(dx);
          yTo(dy);
        }

        function onMouseLeave() {
          xTo(0);
          yTo(0);
        }

        card.addEventListener('mousemove', onMouseMove);
        card.addEventListener('mouseleave', onMouseLeave);

        cleanupFns.push(() => {
          card.removeEventListener('mousemove', onMouseMove);
          card.removeEventListener('mouseleave', onMouseLeave);
        });
      });

      return () => cleanupFns.forEach((fn) => fn());
    },
    { scope: sectionRef }
  );

  return (
    <section id="projects" ref={sectionRef} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="h2-display mb-16">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card border border-[#757575] rounded-lg transition-colors duration-300 hover:border-[#FF4400]"
            >
              {/* 16:9 image placeholder */}
              <div className="aspect-video bg-[#D1E0E8]/20 rounded-t-lg" />

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
