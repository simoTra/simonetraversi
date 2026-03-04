'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useTransition } from '@/context/TransitionContext';

import type { Project } from '@/lib/projects';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  projects: Pick<Project, 'title' | 'description' | 'tags' | 'slug' | 'coverImage'>[];
}

export default function Projects({ projects }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const { startTransition } = useTransition();
  const isTransitioning = useRef(false);

  function handleCardClick(e: React.MouseEvent, slug: string) {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    startTransition(`/projects/${slug}`, e.clientX, e.clientY);
    setTimeout(() => { isTransitioning.current = false; }, 1000);
  }

  function handleCardKeyDown(e: React.KeyboardEvent, slug: string) {
    if (e.key === 'Enter') {
      if (isTransitioning.current) return;
      isTransitioning.current = true;
      startTransition(`/projects/${slug}`, 0, 0);
      setTimeout(() => { isTransitioning.current = false; }, 1000);
    }
  }

  useGSAP(
    () => {
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
    <section id="projects" ref={sectionRef} className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="h2-display">Projects</h2>
      <p className="text-[#D1E0E8] text-base md:text-lg mb-8 leading-relaxed pt-4">
        Here are some of my latest projects that are already at an advanced stage. I've also got other things in the works, like a full homelab setup and a few smart home IoT projects.
      </p>
      </div>

      <div className="overflow-x-auto pb-6 [scroll-snap-type:x_mandatory] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex">
          {projects.map((project) => (
            <div
              key={project.title}
              role="link"
              tabIndex={0}
              onClick={(e) => handleCardClick(e, project.slug)}
              onKeyDown={(e) => handleCardKeyDown(e, project.slug)}
              className="project-card flex-none mr-6 w-[clamp(300px,70vw,480px)] snap-start border border-[#757575] rounded-lg transition-colors duration-300 hover:border-[#FF4400] cursor-none"
            >
              <div className="relative aspect-video bg-[#D1E0E8]/10 rounded-t-lg overflow-hidden">
                {project.coverImage && (
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-[#F4F4F4] font-semibold text-xl">
                  {project.title}
                </h3>
                <p className="text-[#757575] text-sm line-clamp-2">
                  {project.description}
                </p>

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

                <span className="text-[#FF4400] text-sm font-medium mt-1 self-start">
                  View →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
