---
title: "ProjectaLogs"
description: "Lorem ipsum dolor sit amet"
tags: ["React", "TypeScript", "Python",  "NestJs"]
year: 2025
github: "https://github.com/simoTra/projectalogs"
---

# Understanding the Architecture of Projectalogs

**Projectalogs** is a 3D printing job tracking tool designed to group prints by project, associate them with clients, and provide analytics on costs and performance. Below is an overview of its architecture.

## Frontend

The frontend is built with **React**, leveraging the **Refine** framework. This interface allows users to perform CRUD (Create, Read, Update, Delete) operations for managing clients, jobs, and projects. Additionally, it provides a dashboard for viewing real-time statistics and analytics of the connected 3D printer.

## Backend

The backend is implemented in **TypeScript** using the **NestJS** framework. It serves as the central hub, managing data and business logic. The backend also integrates with **Moonraker Klipper** APIs to import existing print jobs and to enable the creation of new jobs directly within Klipper interfaces like Fluidd and Mainsail.

## Current Status

As of now, Projectalogs is in its early stages. The base architecture and CRUD functionalities are implemented, providing a solid foundation for future development. More advanced features, such as enhanced analytics and deeper integration with Klipper interfaces, are planned.

![Architecture Diagram](/projects/projectalogs/projectalogsArchitecture.png)