# simonetraversi.com

Personal portfolio site built with Next.js, React, Tailwind CSS, and GSAP.

## Stack

- **Next.js 16** — App Router
- **React 19**
- **Tailwind CSS 4**
- **GSAP 3.14** — scroll-triggered animations, SplitText, 3D tilt

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

```bash
npm run dev        # Dev server
npm run build      # Production build
npm run lint       # ESLint
npm run typecheck  # TypeScript check
```

## Project Structure

```
app/
  layout.tsx       # Root layout, fonts (Barlow + Inter)
  page.tsx         # Composes all sections
  globals.css      # CSS vars, fluid type scale, grid background
  resume/          # Resume page

components/
  Nav.tsx
  Hero.tsx
  About.tsx
  Experience.tsx
  Projects.tsx
  Resume.tsx
  Contact.tsx
  Footer.tsx
  Cursor.tsx
  PageTransitionOverlay.tsx
  LogoSVG.tsx
  ProjectDetail.tsx
```

## Content

All content (experience, projects, skills) is stored as literal arrays inside each component. Edit the arrays directly to update content — no CMS or database.
