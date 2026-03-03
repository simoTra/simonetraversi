'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import LogoSVG from './LogoSVG';

const NAV_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Resume', href: '/#resume' },
  { label: 'Contact', href: '/#contact' },
];

const SECTION_IDS = ['about', 'experience', 'projects', 'resume', 'contact'];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    sections.forEach((el) => observerRef.current?.observe(el!));

    return () => observerRef.current?.disconnect();
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled ? 'bg-[#1A1A1A]/90 backdrop-blur-sm' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" aria-label="Home">
          <LogoSVG className="h-24 w-auto" />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === href.slice(2)
                    ? 'text-[#FF4400]'
                    : 'text-[#F4F4F4] hover:text-[#FF4400]'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="block w-6 h-0.5 bg-[#F4F4F4]" />
          <span className="block w-6 h-0.5 bg-[#F4F4F4]" />
          <span className="block w-6 h-0.5 bg-[#F4F4F4]" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden w-full bg-[#1A1A1A] border-t border-[#757575] mt-2">
          <ul className="flex flex-col">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={handleLinkClick}
                  className={`block px-6 py-4 text-sm font-medium transition-colors duration-200 ${
                    activeSection === href.slice(2)
                      ? 'text-[#FF4400]'
                      : 'text-[#F4F4F4] hover:text-[#FF4400]'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
