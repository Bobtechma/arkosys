---
phase: 02-hero-e-funcionalidades
plan: 01
type: execute
wave: 1
depends_on: []
files_modified: ["src/components/Hero.jsx", "src/components/Hero.css", "src/App.jsx"]
autonomous: true
requirements: [CORE-02, UI-04]
---

# Plan 01: Build Hero Section

## Goal
Develop the Hero Section (CORE-02) with a high impact title, subtitle, and primary anchor buttons using the glow effect (UI-04).

## Context
The Hero section sits right below the Header and is the first impression. We need to implement the 'btn-outline' style alongside the 'btn-primary' style in the global CSS (or Hero CSS) and wire it up in `App.jsx`.

## Steps
1. Create `src/components/Hero.jsx` with the section structure (title, subtitle, buttons).
2. Create `src/components/Hero.css` with the visual styles.
    - Implement radial gradient background effect for depth.
    - Implement `btn-outline` style with glassmorphism properties.
3. Import and render `<Hero />` inside `src/App.jsx` in the main content area (replacing the placeholder).
