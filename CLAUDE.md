# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start Next.js dev server
npm run build        # Production build
npm run lint         # ESLint
npm run typecheck    # TypeScript type check (no emit)
```

## Architecture

Personal portfolio site — a single-page Next.js 16 app (App Router) with React 19, Tailwind CSS 4, and GSAP 3 animations.

**Entry points:**
- `app/layout.tsx` — Root layout: DM Sans font, metadata, base styles
- `app/page.tsx` — Composes all section components in order
- `app/globals.css` — CSS custom properties (5-color palette), Tailwind directives

**Sections** (in render order): `Nav` → `Hero` → `About` → `Experience` → `Projects` → `Resume` → `Contact` → `Footer`

All section components live in `components/` and are `'use client'` (required for GSAP hooks).

## Animation Pattern

Every animated component follows the same structure:
1. `useRef` on the section element
2. `gsap.registerPlugin(ScrollTrigger)` inside `useGSAP`
3. `ScrollTrigger` with `trigger`, `start: "top 80%"`, `toggleActions: "play none none none"`

Use `useGSAP` from `@gsap/react` (not `useEffect`) for all GSAP animations — it handles cleanup automatically.

## Styling Conventions

- Color palette via CSS custom properties: `--color-bg` (`#1A1A1A`), `--color-text` (`#F4F4F4`), `--color-accent` (`#FF4400`), `--color-light` (`#D1E0E8`), `--color-muted` (`#757575`)
- Colors applied with Tailwind arbitrary values: `text-[#FF4400]`, `bg-[#1A1A1A]`
- Section padding: `py-24 md:py-32 px-6`
- Content max-width: `max-w-6xl mx-auto`
- Responsive breakpoints: `md:` (≥768px), `lg:` (≥1024px)

## Data

All content (experience entries, projects, skills) is stored as literal arrays inside each component — no database or API calls. Edit the arrays directly to update content.

## TypeScript

Strict mode enabled. Path alias `@/*` resolves to the project root.
