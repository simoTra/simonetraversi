'use client';

import { createContext, useContext, useRef, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface TransitionState {
  isAnimating: boolean;
  origin: { x: number; y: number };
}

interface TransitionContextValue {
  state: TransitionState;
  startTransition: (href: string, x: number, y: number) => void;
  onAnimationComplete: () => void;
}

const TransitionContext = createContext<TransitionContextValue | null>(null);

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [state, setState] = useState<TransitionState>({
    isAnimating: false,
    origin: { x: 0, y: 0 },
  });
  const pendingHref = useRef<string | null>(null);

  const startTransition = useCallback((href: string, x: number, y: number) => {
    pendingHref.current = href;
    setState({ isAnimating: true, origin: { x, y } });
  }, []);

  const onAnimationComplete = useCallback(() => {
    const href = pendingHref.current;
    pendingHref.current = null;
    setState((prev) => ({ ...prev, isAnimating: false }));
    if (href) {
      router.push(href);
    }
  }, [router]);

  return (
    <TransitionContext.Provider value={{ state, startTransition, onAnimationComplete }}>
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransition(): TransitionContextValue {
  const ctx = useContext(TransitionContext);
  if (!ctx) throw new Error('useTransition must be used within TransitionProvider');
  return ctx;
}
