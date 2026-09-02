---
phase: 01-setup-e-estrutura-b-sica
plan: 01
type: execute
wave: 1
depends_on: []
files_modified: ["package.json", "vite.config.js", "index.html", "src/index.css", "src/App.jsx", "src/main.jsx"]
autonomous: true
requirements: [UI-01, UI-02, UI-03]
must_haves:
  truths:
    - "Application runs locally without errors"
    - "Dark mode colors, typography, and spacing variables are globally available"
  artifacts:
    - path: "src/index.css"
      provides: "CSS Variables for Design System"
    - path: "package.json"
      provides: "React Vite configuration"
  key_links:
    - from: "index.html"
      to: "src/index.css"
      via: "import in main.jsx"
---

<objective>
Initialize the React Vite project and configure the core Design System using Vanilla CSS.

Purpose: Establishes the technical foundation and visual tokens (Dark mode, Accent color, Typography) required by Phase 1.
Output: Vite project scaffolded, global CSS variables defined.
</objective>

<execution_context>
@~/.gemini/antigravity/get-shit-done/workflows/execute-plan.md
@~/.gemini/antigravity/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/PROJECT.md
@.planning/ROADMAP.md
@.planning/STATE.md
@.planning/phases/01-setup-e-estrutura-b-sica/01-CONTEXT.md
@.planning/phases/01-setup-e-estrutura-b-sica/01-UI-SPEC.md
</context>

<tasks>

<task type="auto">
  <name>Task 1: Scaffold Vite React App</name>
  <read_first>
    - .planning/phases/01-setup-e-estrutura-b-sica/01-CONTEXT.md
  </read_first>
  <files>package.json, vite.config.js, index.html, src/main.jsx, src/App.jsx</files>
  <action>
    Initialize a new React project in the current directory using Vite.
    Since this is a greenfield project, run `npm create vite@latest . -- --template react` (or equivalent non-interactive Vite initialization). 
    If the directory is not empty, you may need to write the `package.json`, `vite.config.js`, `index.html`, `src/main.jsx`, and `src/App.jsx` manually to set up a standard Vite React project.
    Clear out the default Vite boilerplate from `src/App.jsx` and make it simply render `<div className="app-container">Layout Base</div>`.
    (Implements decision D-01: React via Vite).
  </action>
  <verify>
    <automated>test -f package.json && test -f src/App.jsx</automated>
  </verify>
  <done>Vite React app is initialized and boilerplate is cleared.</done>
</task>

<task type="auto">
  <name>Task 2: Configure Vanilla CSS Design System</name>
  <read_first>
    - .planning/phases/01-setup-e-estrutura-b-sica/01-UI-SPEC.md
    - src/index.css
    - index.html
  </read_first>
  <files>src/index.css, index.html</files>
  <action>
    Implement the Design System in `src/index.css` using Vanilla CSS variables (Implements D-04).
    Define variables exactly as specified in `01-UI-SPEC.md`:
    - Colors: `--color-dominant: #121212`, `--color-secondary: #1E1E1E`, `--color-accent: #F97316` (Laranja, per D-02). CRITICAL: NO BLUE COLORS (per D-03).
    - Typography: Add the Google Fonts import for 'Inter' in `index.html`. Define CSS variables for font-sizes (14px, 16px, 24px, 48px) and weights (400, 600).
    - Spacing: Define variables for the 8-point scale (4px, 8px, 16px, 24px, 32px, 48px, 64px).
    Apply global styles to `body`: background color should be dominant, text color should be white, font-family should be Inter. Reset margins and padding.
  </action>
  <verify>
    <automated>grep "\-\-color-dominant" src/index.css</automated>
  </verify>
  <done>CSS variables for colors, typography, and spacing are defined. Google Font is imported.</done>
</task>

</tasks>

<verification>
- Verify that `npm install` and `npm run build` execute successfully.
- Verify that CSS variables exactly match the UI-SPEC contract.
</verification>

<success_criteria>
- Project runs locally without errors.
- Dark mode palette and Inter font are applied globally.
</success_criteria>

<output>
After completion, create `.planning/phases/01-setup-e-estrutura-b-sica/01-01-SUMMARY.md`
</output>
