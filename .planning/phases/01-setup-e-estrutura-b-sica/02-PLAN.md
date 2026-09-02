---
phase: 01-setup-e-estrutura-b-sica
plan: 02
type: execute
wave: 2
depends_on: [01]
files_modified: ["src/components/Header.jsx", "src/components/Footer.jsx", "src/App.jsx", "src/index.css"]
autonomous: true
requirements: [CORE-01, CORE-04]
must_haves:
  truths:
    - "User sees a responsive Header with logo, links, CTA, and a full-screen mobile menu"
    - "User sees a Footer with contact info, links, and copyright"
  artifacts:
    - path: "src/components/Header.jsx"
      provides: "Header navigation"
    - path: "src/components/Footer.jsx"
      provides: "Footer content"
  key_links:
    - from: "src/App.jsx"
      to: "src/components/Header.jsx"
      via: "import and render"
---

<objective>
Build the core UI framing components: Header and Footer.

Purpose: Provides the primary navigation and contact anchors for the landing page, adhering to the design contract.
Output: Header and Footer React components integrated into the main App layout.
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
  <name>Task 1: Build Header Component (Responsive + Overlay)</name>
  <read_first>
    - .planning/phases/01-setup-e-estrutura-b-sica/01-CONTEXT.md
    - .planning/phases/01-setup-e-estrutura-b-sica/01-UI-SPEC.md
    - src/components/Header.jsx
  </read_first>
  <files>src/components/Header.jsx, src/index.css</files>
  <action>
    Create `src/components/Header.jsx`. 
    Implement a responsive navigation header:
    - Desktop: Logo on the left, Links ("Início", "Recursos", "Simulador", "Contato") in the center, and a primary CTA button ("Simular Orçamento") on the right using the Accent color.
    - Mobile: Hamburger menu button that toggles a full-screen overlay menu containing the links and CTA (Implements D-05). Use React state to toggle this menu.
    - Styling: Use Vanilla CSS classes (add them to `src/index.css` or use inline styles carefully). Implement the glassmorphism effect for the header background (e.g., `backdrop-filter: blur(10px)`, `background: rgba(30,30,30,0.8)`). 
    - CRITICAL: Use variables from `src/index.css` (e.g., `var(--color-accent)`) and avoid hardcoding colors. No blue colors!
  </action>
  <verify>
    <automated>grep "Simular Orçamento" src/components/Header.jsx</automated>
  </verify>
  <done>Header component renders desktop nav and toggles mobile overlay, using design system variables.</done>
</task>

<task type="auto">
  <name>Task 2: Build Footer Component & Wire App</name>
  <read_first>
    - src/components/Footer.jsx
    - src/App.jsx
  </read_first>
  <files>src/components/Footer.jsx, src/App.jsx, src/index.css</files>
  <action>
    Create `src/components/Footer.jsx`. 
    Include standard footer content: dummy contact info (email/phone), a few useful links, and a copyright text.
    Style the footer to use the Secondary background color (`var(--color-secondary)`). Add necessary CSS to `src/index.css`.
    Update `src/App.jsx` to render the layout: `<Header />`, a `<main>` placeholder div (e.g., `<main style={{ minHeight: '80vh' }}>Conteúdo</main>`), and `<Footer />`.
  </action>
  <verify>
    <automated>grep "Header" src/App.jsx && grep "Footer" src/App.jsx</automated>
  </verify>
  <done>Footer component is created and both components are rendered in App.jsx.</done>
</task>

</tasks>

<verification>
- Verify that `npm run build` succeeds without syntax or import errors.
- Verify that `<Header>` and `<Footer>` are properly imported and exported.
</verification>

<success_criteria>
- Header and Footer render perfectly in mobile and desktop layouts.
</success_criteria>

<output>
After completion, create `.planning/phases/01-setup-e-estrutura-b-sica/01-02-SUMMARY.md`
</output>
