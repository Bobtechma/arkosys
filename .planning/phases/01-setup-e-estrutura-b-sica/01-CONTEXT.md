# Phase 1: Setup e Estrutura Básica - Context

**Gathered:** 2026-09-02
**Status:** Ready for planning

<domain>
## Phase Boundary

Inicialização do projeto base da landing page, configuração do Design System (Dark Mode, restrição de azul) e construção do Header e Footer funcionais.
</domain>

<decisions>
## Implementation Decisions

### Framework Frontend
- **D-01:** Utilizar **React via Vite**. O uso de React foi escolhido e aprovado explicitamente para facilitar o gerenciamento de estado do simulador nas fases posteriores.

### Design System & Cores
- **D-02:** A cor de destaque (Accent) principal será **Laranja**, que contrastará fortemente com os tons de chumbo/cinza escuro do fundo.
- **D-03:** Foi reforçada a restrição de projeto: **Nenhum uso de tons de azul** (a cor azul está estritamente proibida no visual).
- **D-04:** Como não foi solicitada a inclusão do Tailwind, a estilização deve ser feita utilizando **Vanilla CSS**, conforme diretriz central.

### Navegação Mobile
- **D-05:** O menu mobile utilizará o padrão de **Tela Cheia (Overlay)** para garantir a experiência mais moderna e premium esperada na Landing Page.

### the agent's Discretion
- Organização dos arquivos React (ex: `src/components/`, `src/assets/`).
- Implementação exata das propriedades CSS para o efeito de Glassmorphism (blur, backgrounds translúcidos) e os glows dos botões.
</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project Specs
- `.planning/PROJECT.md` — Visão geral e restrições do projeto
- `README.MD` — Diretrizes visuais originais
</canonical_refs>
