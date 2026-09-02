# Landing Page de Vendas de Sistemas

## What This Is

Uma landing page moderna e interativa focada em conversão para venda e revenda de sistemas de software. O principal diferencial é um simulador de orçamento dinâmico que permite aos usuários montarem seus pacotes e verem o preço em tempo real.

## Core Value

Proporcionar uma experiência de simulação de orçamento transparente e sem atritos que engaje potenciais clientes e impulsione a conversão.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Header com navegação simples, Logo e botão de CTA.
- [ ] Hero Section com título de impacto e botões de ancoragem ("Simular Orçamento" e "Ver Portfólio").
- [ ] Seção de Funcionalidades (3 a 4 cards com benefícios do sistema base).
- [ ] Simulador de orçamento em duas colunas (Opções vs Resumo).
- [ ] Lógica de cálculo dinâmico no simulador (Base R$ 2.000 + módulos adicionais com checkboxes/toggles).
- [ ] CTA no simulador integrado a WhatsApp/Formulário com o valor capturado.
- [ ] Footer com contato, links úteis e copyright.
- [ ] Design System em Dark Mode (cinza escuro, chumbo) com glassmorphism e glow.
- [ ] Destaques em cores neon (Roxo, Verde Esmeralda ou Laranja).
- [ ] Animações de scroll suaves e micro-interações (hover).
- [ ] 100% Responsivo (Mobile, Tablet, Desktop).

### Out of Scope

- [ ] Qualquer uso de cor azul — explicitamente proibido pelas diretrizes visuais.
- [ ] Banco de dados ou backend complexo para o simulador — a lógica de cálculo ocorrerá no frontend utilizando o estado da aplicação.

## Context

A aplicação é uma ferramenta de marketing front-end para captação de leads em vendas e revendas de software. A interface precisa ter uma estética impecável e premium (transições suaves, tipografia tecnológica, estilo minimalista).

## Constraints

- **Design**: Paleta sem tons de azul — Diretriz fundamental do design system.
- **Visuals**: Dark Mode com Glassmorphism — Requisito exigido para a aparência premium e sofisticada.
- **Desempenho**: Cálculo no Frontend — O simulador deve atualizar instantaneamente para evitar esperas e aumentar o engajamento.
- **Tipografia**: Fontes Sans-Serif tecnológicas (Inter, Roboto, Plus Jakarta Sans) — Requisito estilístico.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Simulador via estado local (frontend) | Proporcionar resposta instantânea nas seleções de pacotes sem roundtrips ao servidor. | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-09-02 after initialization*
