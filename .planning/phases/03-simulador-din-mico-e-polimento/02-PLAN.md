---
phase: 03-simulador-din-mico-e-polimento
plan: 02
type: execute
wave: 2
depends_on: [01]
files_modified: ["src/index.css"]
autonomous: true
requirements: [UI-05, UI-06]
---

# Plan 02: Final Polish & Animations

## Goal
Ensure 100% responsiveness and add smooth scroll/hover micro-interactions.

## Context
A premium feel is dictated not just by static design, but by how the interface responds to user interactions (scroll, hover).

## Steps
1. Open `src/index.css`.
2. Add `scroll-behavior: smooth` to the `html` element.
3. Add a global `@keyframes fadeIn` and apply it to `.hero-content`, `.features-section`, and `.simulator-section` so they fade in on load.
4. Verify responsiveness across all components (Simulator grid breaks, Features grid breaks, Header hamburger menu).
