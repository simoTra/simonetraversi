---
title: "Speed Skiing Rear Fairings"
description: "Design and development of aerodynamic fairings for the Speed Skiing World Cup."
tags: ["Prototyping", "3D Modeling", "3D Printing", "CFD Studies"]
coverImage: /images/kl1.png
year: 2025
---

**Speed skiing rear fairings** is a hardware design project focused on developing custom aerodynamic fairings for a competitive speed skier competing in the World Cup circuit. The goal was to reduce drag at the rear of the ski boot by designing a form-fitting fairing — precise enough to conform to each athlete's specific equipment, light enough not to affect performance, and safe enough to comply with competition regulations.

![Speed Skiing](/images/kl3.png)
![Speed Skiing](/images/kl2.jpg)

## Goals

The project was driven by four core requirements that shaped every decision from scan to final print:

- **Precision fit** — the fairing had to conform exactly to the geometry of the specific boot, with no gaps or pressure points that could affect movement or comfort at speed
- **Lightweight design** — every gram counts at competition level; the fairing needed to minimize material while maintaining structural integrity
- **Safety and regulation compliance** — the piece had to break away cleanly in a fall without becoming a hazard, and had to meet the dimensional and material rules of the competition
- **Cost and time efficiency** — the design and production pipeline needed to be repeatable and practical, not a one-off process

## Process

### 3D Scanning

The ski boot was scanned using a professional 3D scanner to capture the exact geometry of the boot's rear section. This step was critical — any deviation at this stage would propagate through every subsequent phase. The scan produced a high-resolution point cloud that served as the ground truth for the entire design.

### Re-meshing

Raw scan data is rarely clean enough to work with directly. The initial mesh was imported into **MeshMixer** to remove noise, fill holes, and smooth irregular surfaces introduced by the scanning process. The cleaned mesh was then brought into **Blender** for further refinement — correcting topology issues and ensuring the geometry was manifold and ready for modeling work.

![Speed Skiing](/images/kl_remesh.png)

### 3D Modeling

The re-meshed boot geometry was imported into **Fusion 360**, where the fairing itself was designed. The boot scan served as a reference surface to drive the fairing's inner face, ensuring a snug conforming fit. The outer profile was shaped for aerodynamic efficiency, with smooth transitions and minimal frontal area. This phase also accounted for the attachment mechanism — how the fairing would mount to the boot and release safely under impact.

CFD studies informed the outer surface geometry, helping validate that the fairing was actually reducing drag rather than introducing turbulence at speed.

![Speed Skiing](/images/kl_fusion.png)
![Speed Skiing](/images/kl_render.png)

### 3D Printing

The printing process required careful planning across several constraints simultaneously: the piece had to stay under the allowed weight threshold, use a material that would fracture predictably in a fall rather than splinter dangerously, and be produced efficiently in terms of both cost and print time.

Print orientation, infill density, and wall count were tuned iteratively to find the right balance. The final parameters prioritized controlled failure behavior and weight over raw strength — a deliberate trade-off given the safety requirements of the sport.
