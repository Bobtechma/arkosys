---
phase: 03
slug: simulador-din-mico-e-polimento
status: approved
shadcn_initialized: false
preset: none
created: 2026-09-02
reviewed_at: 2026-09-02
---

# Phase 03 — UI Design Contract

## 1. Foundation Overview
- **Aesthetic**: Dark Mode with Glassmorphism and Neon accents.
- **Color Palette (NO BLUE)**:
  - Dominant: `#121212` (Dark Charcoal)
  - Secondary: `#1E1E1E` (Darker Grey)
  - Accent: `#F97316` (Laranja)
  - Text: `#FFFFFF` (White)
- **Border Radius**: 8px (`--radius-lg`)

## 2. Requirements Mapped
- [SIM-01]: Two-column interactive Simulator layout.
- [SIM-02]: Base value of R$ 2.000,00 and list of toggles.
- [SIM-03]: Addons: Financeiro (+800), WhatsApp (+500), App (+3000), Agendamentos (+600), Relatórios (+400).
- [SIM-04]: Real-time total calculation.
- [SIM-05]: CTA button linking to WhatsApp with total value.
- [UI-05]: Smooth scroll animations and hover micro-interactions.
- [UI-06]: 100% responsive (Desktop vs Mobile layout).

## 3. Core Components

### 1. `Simulator` (Main Section)
- **Structure**:
  - `section#simulador.simulator-section`
  - `div.simulator-container`
  - `div.simulator-grid` (CSS Grid: 1 col on mobile, 2 cols on desktop)

### 2. `SimulatorOptions` (Left Column)
- **Structure**:
  - `div.options-panel`
  - `div.base-plan` (Shows Base R$ 2.000)
  - `h3` Adicionais
  - `div.addon-list`
  - `div.addon-item` (Contains a checkbox and label with price)
- **Visuals**: Addon items should have hover effects, looking like selectable cards or rows with a clean checkbox.

### 3. `SimulatorSummary` (Right Column - Sticky on Desktop)
- **Structure**:
  - `div.summary-panel.glassmorphism`
  - `h3` Resumo do Orçamento
  - `ul.summary-list` (List of selected items)
  - `div.summary-total` (Total value displayed prominently)
  - `a.btn-primary` ("Solicitar este Sistema", acts as WhatsApp link)
- **Visuals**: This panel should use the strong glassmorphism style from earlier phases.

## 4. Animation & Interaction
- **UI-05**: Smooth scrolling enabled via `html { scroll-behavior: smooth; }` in `index.css`. Add subtle fade-in animation to sections using CSS animations (`@keyframes fadeIn`).
- **UI-06**: The simulator grid breaks from 1 column (mobile/tablet) to 2 columns (desktop). The Summary panel becomes `position: sticky` on desktop.
