---
phase: 02-hero-e-funcionalidades
plan: 02
type: execute
wave: 2
depends_on: [01]
files_modified: ["src/components/Features.jsx", "src/components/Features.css", "src/App.jsx"]
autonomous: true
requirements: [CORE-03, UI-04]
---

# Plan 02: Build Features Section

## Goal
Develop the Features section (CORE-03) with 3-4 cards detailing system benefits, applying strong Glassmorphism aesthetics (UI-04).

## Context
These cards will highlight the core value propositions of the system being sold. They need to look highly premium to justify a 2000+ BRL price tag. The Glassmorphism effect will be crucial here.

## Steps
1. Create `src/components/Features.jsx` and implement the `Features` and `FeatureCard` components. Use dummy icons for now (e.g. simple CSS shapes or emojis/SVG strings).
2. Create `src/components/Features.css` with the CSS Grid layout and the Glassmorphism card styles as defined in the UI-SPEC.
3. Import and render `<Features />` inside `src/App.jsx` below the `<Hero />` component.
