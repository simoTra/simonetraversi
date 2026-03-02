'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const SIZE = 24
const HALF = SIZE / 2

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const spinnerRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const dot = dotRef.current
    const spinner = spinnerRef.current
    if (!cursor || !dot || !spinner) return

    if (window.matchMedia('(hover: none)').matches) return

    gsap.set(cursor, { x: -100, y: -100, opacity: 0 })
    gsap.set(spinner, { opacity: 0 })

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.12, ease: 'power2.out' })
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.12, ease: 'power2.out' })

    const CLICKABLE =
      'a, button, [role="button"], input, textarea, select, label, [tabindex]:not([tabindex="-1"])'

    let revealed = false
    let isHovering = false

    const onMouseMove = (e: MouseEvent) => {
      if (!revealed) {
        gsap.to(cursor, { opacity: 1, duration: 0.2 })
        revealed = true
      }
      xTo(e.clientX - HALF)
      yTo(e.clientY - HALF)
    }

    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest(CLICKABLE) && !isHovering) {
        isHovering = true
        gsap.to(dot, { opacity: 0, duration: 0.15 })
        gsap.to(spinner, { opacity: 1, duration: 0.15 })
      }
    }

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as Element
      const relatedTarget = e.relatedTarget as Element | null
      if (
        target.closest(CLICKABLE) &&
        (!relatedTarget || !relatedTarget.closest(CLICKABLE))
      ) {
        isHovering = false
        gsap.to(dot, { opacity: 1, duration: 0.15 })
        gsap.to(spinner, { opacity: 0, duration: 0.15 })
      }
    }

    const onViewportLeave = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.2 })
      revealed = false
    }
    const onViewportEnter = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.2 })
      revealed = true
    }

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseout', onMouseOut)
    document.documentElement.addEventListener('mouseleave', onViewportLeave)
    document.documentElement.addEventListener('mouseenter', onViewportEnter)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
      document.documentElement.removeEventListener('mouseleave', onViewportLeave)
      document.documentElement.removeEventListener('mouseenter', onViewportEnter)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: SIZE,
        height: SIZE,
        pointerEvents: 'none',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* White dot — default state */}
      <div
        ref={dotRef}
        style={{
          position: 'absolute',
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: '#F4F4F4',
        }}
      />
      {/* Orange spinner — hover state, static */}
      <div
        ref={spinnerRef}
        style={{
          position: 'absolute',
          width: 12,
          height: 12,
          borderRadius: '50%',
          backgroundColor: '#FF4400',
        }}
      />
    </div>
  )
}
