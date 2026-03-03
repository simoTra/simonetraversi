'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useTransition } from '@/context/TransitionContext';

export default function PageTransitionOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const { state, onAnimationComplete } = useTransition();

  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;

    if (!state.isAnimating) return;

    const { x, y } = state.origin;
    const originStr = `${x}px ${y}px`;

    gsap.set(el, {
      clipPath: `circle(0px at ${originStr})`,
      display: 'block',
    });

    gsap.to(el, {
      clipPath: `circle(200vmax at ${originStr})`,
      duration: 0.6,
      ease: 'power3.inOut',
      onComplete: onAnimationComplete,
    });
  }, [state.isAnimating, state.origin, onAnimationComplete]);

  return (
    <div
      id="page-transition-overlay"
      ref={overlayRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9998,
        display: 'none',
        pointerEvents: 'none',
        backgroundColor: '#1A1A1A',
      }}
    />
  );
}
