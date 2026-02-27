'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useGSAP(
    () => {
      gsap.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });
    },
    { scope: sectionRef }
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  }

  const inputClass =
    'bg-transparent border-b border-[#757575] text-[#F4F4F4] focus:border-[#FF4400] outline-none w-full py-3 transition-colors duration-200';

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 ref={headingRef} className="text-4xl md:text-6xl font-bold mb-16">
          Let&apos;s work together.
        </h2>

        <div className="max-w-xl mx-auto md:mx-0">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={inputClass}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={inputClass}
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className={`${inputClass} resize-none`}
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#FF4400] text-[#F4F4F4] px-8 py-4 font-semibold"
              >
                {submitted ? 'Message sent!' : 'Send Message'}
              </button>
            </div>
          </form>

          {/* Social links */}
          <div className="flex gap-6 mt-12">
            <a
              href="#"
              className="text-[#757575] hover:text-[#FF4400] transition-colors duration-200 text-sm"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-[#757575] hover:text-[#FF4400] transition-colors duration-200 text-sm"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-[#757575] hover:text-[#FF4400] transition-colors duration-200 text-sm"
            >
              X / Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
