---
title: "ProjectaLogs"
description: "A work-in-progress platform for managing 3D printing projects and clients"
tags: ["React", "TypeScript", "Python", "NestJs"]
coverImage: /images/projectalogs2.png
year: 2025
github: "https://github.com/simoTra/projectalogs"
---

**ProjectaLogs** is a personal project born out of a simple frustration: when you run a 3D printer, jobs pile up fast, and there's no native way to tie a print job to a specific project or client. I wanted a tool that lives alongside my existing Klipper/Moonraker setup and gives me a clear picture of what was printed, for whom, and at what cost.

![ProjectaLogs dashboard](/images/projectalogs1.png)

## What it does

At its core, ProjectaLogs is a dashboard where you can organize your 3D printing activity into **Projects** and **Clients**. Instead of a flat list of print jobs with no context, you get a structured view: which jobs belong to which project, who the client is, and a history of everything that came off the printer.

The most interesting piece is the **Moonraker integration**. Moonraker is the API layer that sits between Klipper (the printer firmware) and frontends like Fluidd or Mainsail. ProjectaLogs hooks into this layer to automatically capture job events — when a print starts, finishes, or fails — and associates them with the right project without any manual logging.

![ProjectaLogs projects view](/images/projectalogs3.png)

## How it's built

The project is split into three parts:

- A **NestJS backend** that exposes a REST API and stores everything in SQLite (keeping it dead simple to self-host)
- A **React + Refine frontend** — a web dashboard for creating projects, attaching jobs, and browsing history
- A **Python component** (`projectalogs.py`) that installs on the printer's Moonraker instance and acts as the bridge between print events and the backend

## Current state

The whole thing runs via a single Docker Compose file, which makes it easy to spin up on any machine on the local network. The backend and frontend are both functional for basic project/client/job management.

The Moonraker component is the part still under active development — the API surface is experimental and the install requires copying a file manually onto the printer. It works, but it's not polished enough to call stable yet.

## Why I built it

I was inspired by [Spoolman](https://github.com/Donkie/Spoolman) and the general idea of bringing proper project tracking into Moonraker-driven workflows. Most 3D printing dashboards focus on real-time monitoring — slice, send, watch. ProjectaLogs is about what comes *after*: attribution, history, and eventually cost analytics. It's still a work in progress, but it already solves the problem that motivated it.

## Future updates

One of the next milestones is a proper **Fluidd integration** — a panel embedded directly in the printer interface where you can select a project before starting a print, without ever leaving Fluidd. The Moonraker component will handle the communication in the background, making the whole flow seamless.

![ProjectaLogs on desktop](https://raw.githubusercontent.com/simoTra/projectalogs/main/images/onMac.png)

![ProjectaLogs on mobile](https://raw.githubusercontent.com/simoTra/projectalogs/main/images/onIphone.png)

## Source

The project is open source and available on [GitHub](https://github.com/simoTra/projectalogs).
