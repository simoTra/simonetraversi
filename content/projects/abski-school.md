---
title: "AB Ski Lessons Zermatt"
description: "A multilingual booking site and admin dashboard for a ski school in Zermatt, Switzerland"
tags: ["Next.js", "TypeScript", "Prisma", "Stripe", "PostgreSQL"]
coverImage: /images/abSkiHome.jpeg
year: 2025
link: "https://abskischool.vercel.app"
---

**AB Ski Lessons Zermatt** is a full-stack web project built for a ski instruction school based in Zermatt, Switzerland. The goal was to create a clean, conversion-focused public site with a full booking and payment flow on the front end, and a practical admin dashboard on the back end for managing reservations and pricing. The site is currently in **staging** and not yet live in production.

## What it does

The public side of the site is a multilingual marketing and booking platform. Visitors can browse instructors, read about lesson packages, and start a booking directly from the home page. The booking widget lets you pick a package (half-day, full-day, or premium), select the number of guests, and — for half-day lessons — choose between morning and afternoon time slots. From there, a multi-step flow collects dates, contact details, and routes the user to a Stripe payment page.

Behind the scenes, the site has a **protected admin dashboard** where the ski school owner can see all incoming bookings, manage their status, and configure seasonal pricing — the multipliers that adjust lesson prices during high and low season.

## Booking flow and UX decisions

The booking experience was designed to be fast and low-friction. Rather than forcing users to a separate page immediately, the home page surfaces the most relevant inputs (package type, number of guests) right in a sticky bar below the hero. This way, a visitor who arrives knowing what they want can start the process in seconds.

![Booking section component](/images/abSkiBokking2.png)
![Booking section component](/images/abSkiBokking1.png)

The multi-step booking form was built with progressive disclosure in mind: each step only shows what's needed at that moment. Date picking, guest details, and payment confirmation are spread across dedicated steps rather than thrown into a single long form.

Price calculation happens in real time on the client, factoring in the selected package, number of guests, date range, and whichever season is active on those dates. This gives users immediate feedback before committing to a payment.

## The admin dashboard

The admin area is a protected route that requires credentials to access. It's intentionally minimal — the goal was a tool that a non-technical user could operate confidently, not a feature-heavy CMS.

![Admin dashboard](/images/abSkiDashboard.png)

The main views are:

- **Bookings table** — all reservations with their current status (pending, awaiting payment, confirmed, cancelled), with the ability to manually update them
- **Season manager** — a UI for defining date ranges with pricing multipliers, covering both high and low season periods
- **Instructor toggles** — a simple way to mark instructors as active or inactive

Authentication is handled with NextAuth.js using a credentials provider and bcrypt-hashed passwords stored in environment variables — no database table for users, keeping the auth surface small.

## How it's built

The stack is fairly conventional for a modern Next.js project, with a few deliberate choices:

- **Next.js 16 with App Router** — all pages use React Server Components where possible, with client components only where interactivity requires it
- **next-intl** for i18n — four languages supported out of the box (English, Italian, French, German), with locale detection handled at the middleware level and no locale prefix in URLs
- **Prisma + PostgreSQL** — the database handles bookings, packages, payments, and seasons; all monetary values are stored in cents to avoid floating-point issues
- **Stripe** — payment intents are created server-side via an API route; webhook handling updates booking and payment status asynchronously
- **Zustand** — lightweight client-side store for managing booking state across the multi-step flow without prop drilling
- **Tailwind CSS v4** with an `@theme` block in `globals.css` for brand colors defined in OKLCH (no separate config file)
- **Framer Motion** for page transitions and subtle UI animations

## Internationalization

Supporting four languages wasn't just a matter of swapping strings. Each page has proper `hreflang` tags, locale-aware metadata generation, and structured data (JSON-LD) for SEO. The translation files live in a flat `/dictionary/` folder as JSON, making them easy to hand off to a translator without touching any code.

The design also accounts for text expansion — Italian and German strings tend to run longer than English, so layouts were tested with real translated content rather than lorem ipsum.

## Current state

The site is deployed to a staging environment and is going through final content and UX review before going live. The booking and payment flows are functional end-to-end, the admin dashboard is operational, and all four languages are translated. What remains is real-world testing, final copy review, and production infrastructure setup.

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Database | PostgreSQL via Prisma ORM |
| Auth | NextAuth.js v5 |
| Payments | Stripe |
| i18n | next-intl |
| State | Zustand |
| Animation | Framer Motion |
| Deployment | Vercel (staging) |
