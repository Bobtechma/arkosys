---
phase: 02
slug: hero-e-funcionalidades
status: approved
shadcn_initialized: false
preset: none
created: 2026-09-02
reviewed_at: 2026-09-02
---

# Phase 02 — UI Design Contract

## 1. Foundation Overview
- **Aesthetic**: Dark Mode with Glassmorphism and Neon accents.
- **Color Palette (NO BLUE)**:
  - Dominant: `#121212` (Dark Charcoal)
  - Secondary: `#1E1E1E` (Darker Grey for cards)
  - Accent: `#F97316` (Laranja)
  - Text: `#FFFFFF` (White)
  - Muted Text: `#A0A0A0` (Light Grey)
- **Typography**: Inter (400, 600)
- **Spacing Scale**: 4px to 64px
- **Border Radius**: 8px (`--radius-lg`)

## 2. Requirements Mapped
- [CORE-02]: Hero Section with title, subtitle, anchor buttons.
- [CORE-03]: Features Section with 3-4 cards.
- [UI-04]: Glassmorphism and glow effects.

## 3. Core Components

### 1. `Hero` (Hero Section)
- **Structure**:
  - `section.hero-section` (Full height minus header)
  - `div.hero-content` (Centered text)
  - `h1.hero-title` (High impact typography)
  - `p.hero-subtitle` (Explanation text)
  - `div.hero-buttons` (Flexbox for buttons)
  - `button.btn-primary` (Glow effect, "Simular Orçamento")
  - `button.btn-outline` (Glassmorphism outline, "Ver Portfólio")
- **Visuals**: Background can have a subtle radial gradient behind the text using the accent color (opacity 10-20%) to add depth.

### 2. `Features` (Features Section)
- **Structure**:
  - `section.features-section`
  - `h2.section-title`
  - `div.features-grid` (CSS Grid for cards)
  - `FeatureCard` (Individual cards)
- **Visuals**: Standard section padding.

### 3. `FeatureCard` (Glassmorphism Card)
- **Structure**:
  - `div.feature-card.glassmorphism`
  - `div.card-icon` (Placeholder for SVG icon, using accent color)
  - `h3.card-title`
  - `p.card-desc`
- **Visuals**:
  - `background: rgba(30, 30, 30, 0.5)`
  - `backdrop-filter: blur(10px)`
  - `border: 1px solid rgba(255, 255, 255, 0.1)`
  - `border-radius: var(--radius-lg)`
  - Hover effect: Slight translateY and border glow using accent color.

## 4. Animation & Interaction
- Glow effect on primary button hover.
- Glassmorphism card hover: inner glow and scale slightly.
