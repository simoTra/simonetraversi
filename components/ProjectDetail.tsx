'use client';

import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';
import type { Project } from '@/lib/projects';

const markdownComponents: Components = {
  h2({ children }) {
    return (
      <h2
        style={{
          fontFamily: 'var(--font-barlow)',
          fontWeight: 800,
          fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
          color: '#FF4400',
          letterSpacing: '-0.02em',
          marginTop: '2.5rem',
          marginBottom: '1rem',
        }}
      >
        {children}
      </h2>
    );
  },
  img({ src, alt }) {
    if (!src || typeof src !== 'string') return null;
    return (
      <span className="block my-8">
        <Image
          src={src}
          alt={alt ?? 'project image'}
          width={1200}
          height={900}
          className="max-w-xs w-full h-auto rounded-lg"
          style={{ objectFit: 'contain' }}
        />
      </span>
    );
  },
};

interface Props {
  project: Project;
}

export default function ProjectDetail({ project }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const hasRunEnterAnim = useRef(false);

  useEffect(() => {
    if (hasRunEnterAnim.current) return;
    hasRunEnterAnim.current = true;

    const overlay = document.getElementById('page-transition-overlay');
    if (!overlay || overlay.style.display === 'none') return;

    gsap.to(overlay, {
      clipPath: 'circle(0px at 50vw 50vh)',
      duration: 0.6,
      ease: 'power3.inOut',
      delay: 0.1,
      onComplete: () => {
        gsap.set(overlay, { display: 'none' });
      },
    });
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.4 });

      tl.from('.detail-back', {
        x: -20,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out',
      });

      // Title clip-path wipe
      tl.from(
        '.detail-title',
        {
          clipPath: 'inset(0 100% 0 0)',
          duration: 0.7,
          ease: 'power3.out',
        },
        '-=0.1'
      );

      // Meta row
      tl.from(
        '.detail-meta',
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out',
        },
        '-=0.3'
      );

      // Tags
      tl.from(
        '.detail-tag',
        {
          y: 16,
          opacity: 0,
          stagger: 0.06,
          duration: 0.4,
          ease: 'power2.out',
        },
        '-=0.2'
      );

      // Prose content
      tl.from(
        '.detail-prose',
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.1'
      );
    },
    { scope: sectionRef }
  );

  return (
    <main ref={sectionRef} className="py-24 md:py-32 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/#projects"
          className="detail-back inline-flex items-center gap-2 text-[#757575] hover:text-[#FF4400] text-sm font-medium mb-12 transition-colors duration-200"
        >
          ← Back
        </Link>

        {project.coverImage && (
          <div className="relative aspect-video rounded-lg overflow-hidden mb-10">
            <Image src={project.coverImage} alt={project.title} fill className="object-cover" />
          </div>
        )}

        <h1 className="detail-title h2-display text-[#F4F4F4] mb-8" style={{ clipPath: 'inset(0 0% 0 0)' }}>
          {project.title}
        </h1>

        <div className="detail-meta flex flex-wrap items-center gap-6 mb-8 text-sm">
          <span className="text-[#757575]">{project.year}</span>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF4400] hover:underline"
            >
              Live site ↗
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D1E0E8] hover:text-[#FF4400] transition-colors duration-200"
            >
              GitHub ↗
            </a>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="detail-tag bg-[#1A1A1A] border border-[#757575] text-[#D1E0E8] text-xs px-3 py-1.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="detail-prose prose-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {project.content}
          </ReactMarkdown>
        </div>
      </div>
    </main>
  );
}
