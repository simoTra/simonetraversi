# PRD: Personal Portfolio Website

## Introduction

A single-page personal portfolio website for Simone Traversi — designed to land jobs, attract freelance clients, and establish a strong personal brand. The site is dark mode only, typographically bold, visually minimal with strong contrast, and animated using GSAP. All content is placeholder until replaced with real content. Simone Traversi is a software developer and industrial robotic specialist and trainer.

---

## Goals

- Present Simone as a skilled, hireable engineer/designer with a distinct visual identity
- Showcase projects, experience, and skills in a single-scroll experience
- Provide downloadable resume and direct contact path
- Load fast and feel polished — animations add energy, not noise
- Deploy-ready on Vercel from the existing Next.js repo

---

## User Stories

### US-001: Set up GSAP and global dark theme

**Description:** As a developer, I need GSAP installed and a dark theme baseline so all subsequent stories can build on it.

**Acceptance Criteria:**

- [ ] `gsap` and `@gsap/react` installed via npm
- [ ] `@types/gsap` installed if available, else ignored
- [ ] `globals.css` defines CSS custom properties: `--color-bg: #1A1A1A`, `--color-text: #F4F4F4`, `--color-accent: #FF4400`, `--color-light: #D1E0E8`, `--color-muted: #757575`
- [ ] `globals.css` applies these to `html`: `background-color: var(--color-bg)`, `color: var(--color-text)`
- [ ] Tailwind config (or CSS) registers these tokens so they can be used as utilities (e.g. `bg-accent`, `text-muted`)
- [ ] `layout.tsx` sets `lang="en"` and applies base font and color globally
- [ ] `html { scroll-behavior: smooth; overflow-x: hidden; }` set to prevent horizontal scroll
- [ ] Typecheck and lint pass

---

### US-002: Hero section

**Description:** As a visitor, I want to immediately understand who this person is and feel impressed by the first screen.

**Acceptance Criteria:**

- [ ] Full-viewport hero section (`min-h-screen`)
- [ ] Large headline (e.g. `text-7xl` or larger) with name and one-liner role/tagline
- [ ] Subtext with a short positioning statement (2 lines max, placeholder)
- [ ] CTA buttons: "View Work" (scrolls to Projects) and "Get in Touch" (scrolls to Contact)
- [ ] GSAP entrance animation: headline and subtext stagger in from bottom on page load (`gsap.from`, `y: 60`, `opacity: 0`, stagger)
- [ ] Smooth scroll behavior (`scroll-smooth` on `<html>`)
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-003: About section

**Description:** As a visitor, I want to learn about who this person is, their background, and what they stand for.

**Acceptance Criteria:**

- [ ] Section with id `about`, visible in nav
- [ ] Two-column layout on desktop: left = large portrait/photo placeholder (`aspect-square`, gray bg), right = text block
- [ ] Text block includes: short bio paragraph (placeholder), 3–5 bullet traits or values
- [ ] GSAP ScrollTrigger animation: section fades/slides in as it enters the viewport
- [ ] Layout collapses to single column on mobile
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-004: Experience / Timeline section

**Description:** As a recruiter or client, I want to see a clear career timeline to assess seniority and trajectory.

**Acceptance Criteria:**

- [ ] Section with id `experience`
- [ ] Vertical timeline component with at least 3 placeholder entries
- [ ] Each entry shows: company name, role title, date range, and 1–2 bullet points of responsibilities
- [ ] Timeline has a vertical line connecting entries, with a dot/node per entry
- [ ] GSAP ScrollTrigger: each entry animates in sequentially as user scrolls (stagger from left or fade-in)
- [ ] Responsive: timeline readable on mobile (stacked, line on left edge)
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-005: Projects section

**Description:** As a visitor, I want to browse selected projects and understand what was built, what stack was used, and where to see it.

**Acceptance Criteria:**

- [ ] Section with id `projects`
- [ ] Grid of project cards (2–3 columns desktop, 1 column mobile)
- [ ] Each card contains: project image placeholder (16:9 aspect ratio, dark gray bg), title, short description (2 lines), tech tags, and a link icon/button ("View" or "GitHub")
- [ ] At least 3 placeholder project cards
- [ ] Cards have a subtle hover effect (border highlight or scale transform, no GSAP needed — CSS is fine)
- [ ] GSAP ScrollTrigger: cards stagger in as the section enters the viewport
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-006: Resume section

**Description:** As a recruiter, I want to view or download a resume directly from the page without navigating away.

**Acceptance Criteria:**

- [ ] Section with id `resume`
- [ ] Section headline: "Resume" or "CV"
- [ ] A prominent download button: "Download PDF" — links to `/resume.pdf` in `public/` (placeholder PDF or empty file acceptable)
- [ ] Below the button: an inline preview of key resume content — Skills list (grouped by category, e.g. Languages, Frameworks, Tools) and Education entry (placeholder)
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-007: Contact section

**Description:** As a potential client or employer, I want an easy way to reach out directly from the page.

**Acceptance Criteria:**

- [ ] Section with id `contact`
- [ ] Large heading (e.g. "Let's work together.")
- [ ] Contact form with fields: Name, Email, Message — and a Submit button
- [ ] Form is static/UI-only (no backend required); submit button shows a placeholder success state on click (e.g. "Message sent!" text swap)
- [ ] Social links row below the form: GitHub, LinkedIn, Twitter/X (placeholder `href="#"`)
- [ ] GSAP ScrollTrigger: heading animates in on scroll
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-008: Sticky navigation bar

**Description:** As a visitor scrolling the page, I want to quickly jump to any section without scrolling back to the top.

**Acceptance Criteria:**

- [ ] Fixed top nav bar with site name/logo on the left and section links on the right: About, Experience, Projects, Resume, Contact
- [ ] Nav links use `href="#section-id"` for in-page scroll
- [ ] On scroll, nav gains a subtle background (e.g. `bg-black/80 backdrop-blur`) after scrolling past the hero
- [ ] Active section is highlighted in the nav (via IntersectionObserver or ScrollTrigger)
- [ ] Mobile: hamburger icon collapses nav links into a dropdown/drawer
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-009: Footer

**Description:** As a visitor who has reached the bottom, I want to see a minimal footer with credits and links.

**Acceptance Criteria:**

- [ ] Footer with copyright line: `© 2026 Simone Traversi`
- [ ] "Back to top" link that smoothly scrolls to `#hero`
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

## Functional Requirements

- **FR-1:** The entire experience is a single HTML page (`/`) — no routing required
- **FR-2:** GSAP is used for all entrance animations; CSS transitions are acceptable for hover states
- **FR-3:** All GSAP ScrollTrigger animations must use `ScrollTrigger.refresh()` compatible patterns to avoid layout bugs
- **FR-4:** All sections must have an `id` attribute matching their nav link anchor
- **FR-5:** Color palette (exact values, no deviations):
  - `#1A1A1A` — background (near-black)
  - `#F4F4F4` — primary text (off-white)
  - `#FF4400` — accent (orange); use on CTAs, hover states, timeline nodes, active nav links, highlights
  - `#D1E0E8` — secondary/light surface (muted blue-grey); use for cards, section dividers, subtle backgrounds
  - `#757575` — muted text (grey); use for dates, meta labels, secondary copy
- **FR-6:** Typography: headlines use at minimum `text-6xl` (96px+), body uses `text-base` or `text-lg`
- **FR-7:** All images use Next.js `<Image>` component with `placeholder="blur"` or a solid color fallback
- **FR-8:** The resume PDF must be placed in `public/resume.pdf` — a blank placeholder file is acceptable
- **FR-9:** The contact form does NOT require a backend — success state is simulated client-side
- **FR-10:** The site must be responsive: fully usable on 375px mobile through 1440px desktop

---

## Non-Goals

- No blog or writing section
- No CMS or admin panel
- No backend for the contact form (future enhancement)
- No light mode or theme toggle
- No multi-language support
- No page routing or sub-pages
- No authentication or user accounts
- No analytics integration (can be added later)

---

## Design Considerations

- **Aesthetic reference:** Think editorial design — large type, generous whitespace, high contrast, intentional image placement
- **Accent color:** `#FF4400` orange — used on CTA buttons, hover states, timeline nodes, active nav indicator, underlines, and any interactive highlight. Should feel energetic but not overused — max 20% of visible surface area
- **Font:** A grotesque sans-serif for headings (Inter, DM Sans, or similar via `next/font`); no serif required
- **Section spacing:** Each section should feel like its own "page" — use `py-24` or `py-32` minimum
- **Images:** Use `aspect-ratio` containers with `bg-neutral-900` as placeholder so layout is stable before real images are added

---

## Responsive Design Requirements

The site must work correctly at all three breakpoints using Tailwind's standard prefixes:

| Breakpoint | Width | Behaviour |
|---|---|---|
| Mobile | 375px – 767px | Single column, full-width sections, hamburger nav, reduced font sizes |
| Tablet | 768px – 1023px | Hybrid layouts, 2-col project grid, nav links visible |
| Desktop | 1024px – 1440px+ | Full layouts, max-width container centred, multi-col grids |

**Per-section rules:**

- **Hero:** Headline scales from `text-5xl` (mobile) → `text-7xl` (tablet) → `text-9xl` (desktop); buttons stack vertically on mobile
- **About:** Single column on mobile (image on top, text below); two-column side-by-side on tablet+
- **Experience:** Timeline line on left edge at all sizes; entry text full-width on mobile; indented on desktop
- **Projects:** 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
- **Resume:** Skills groups stack vertically on mobile; 2–3 columns on desktop
- **Contact:** Form is full-width on mobile; max-width constrained on desktop
- **Nav:** Links hidden on mobile behind hamburger menu; full nav visible on tablet+; drawer/overlay closes on link click
- **Typography:** All headlines must remain large and impactful even at 375px — never shrink below `text-4xl` for section headings
- **Touch targets:** All interactive elements (buttons, links, nav items) must be at least 44×44px on mobile
- **No horizontal scroll:** The page must never overflow horizontally at any breakpoint

---

## Technical Considerations

- **GSAP install:** `npm install gsap` — use `useGSAP` hook from `@gsap/react` for React integration and proper cleanup
- **ScrollTrigger:** Must be registered via `gsap.registerPlugin(ScrollTrigger)` before use; do this once in a client component
- **Next.js `"use client"`:** All GSAP animation components must be client components
- **Tailwind v4:** Project uses Tailwind v4 — use `@import "tailwindcss"` in `globals.css`, not `@tailwind base/components/utilities`
- **Smooth scroll:** Add `html { scroll-behavior: smooth; }` in globals
- **Performance:** GSAP animations should use `will-change: transform` sparingly; avoid animating layout properties

---

## Success Metrics

- All 8 sections render correctly with no console errors
- GSAP animations trigger smoothly on scroll without jank
- Lighthouse performance score ≥ 90 on desktop
- Page is fully readable and usable on a 375px mobile screen
- Typecheck (`tsc --noEmit`) passes with zero errors

---

## Open Questions

- Should project cards link to live URLs, GitHub repos, or both? BOTH
- Is a placeholder `resume.pdf` sufficient for now, or should a real one be added before launch? I'll add later
