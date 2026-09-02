---
phase: 03-simulador-din-mico-e-polimento
plan: 01
type: execute
wave: 1
depends_on: []
files_modified: ["src/components/Simulator.jsx", "src/components/Simulator.css", "src/App.jsx"]
autonomous: true
requirements: [SIM-01, SIM-02, SIM-03, SIM-04, SIM-05]
---

# Plan 01: Build Dynamic Simulator

## Goal
Implement the core interactive pricing simulator, allowing users to toggle addons and see the final price in real-time.

## Context
This is the core differentiating feature of the landing page. It requires React state management (`useState`) to track selected addons and calculate the total dynamically. 

## Steps
1. Create `src/components/Simulator.jsx` and `src/components/Simulator.css`.
2. Define the addons array with names and prices: Financeiro (800), WhatsApp (500), App Mobile (3000), Agendamentos (600), Relatórios (400).
3. Implement state for tracking selected addons.
4. Build the UI with two columns (CSS Grid):
   - **Left Column**: Base price (2000) static display, followed by checkboxes/toggles for each addon.
   - **Right Column (Sticky Glassmorphism Panel)**: A summary list showing selected items, the calculated Total, and a primary CTA button.
5. Implement the WhatsApp link logic in the CTA button (encode URI with the total price).
6. Import and wire `<Simulator />` into `src/App.jsx` just below the Features section.
