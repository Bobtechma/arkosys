# Landing Page de Vendas de Sistemas

## What This Is

Uma landing page moderna e interativa focada em conversão para venda e revenda de sistemas de software. O principal diferencial é um simulador de orçamento dinâmico que permite aos usuários montarem seus pacotes e verem o preço em tempo real.

## Core Value

Proporcionar uma experiência de simulação de orçamento transparente e sem atritos que engaje potenciais clientes e impulsione a conversão.

## Requirements

### Validated

- ✓ Header com navegação simples, Logo e botão de CTA — v1.0
- ✓ Hero Section com título de impacto e botões de ancoragem ("Simular Orçamento" e "Ver Portfólio") — v1.0
- ✓ Seção de Funcionalidades (3 a 4 cards com benefícios do sistema base) — v1.0
- ✓ Simulador de orçamento em duas colunas (Opções vs Resumo) — v1.0
- ✓ Lógica de cálculo dinâmico no simulador (Base R$ 2.000 + módulos adicionais com checkboxes/toggles) — v1.0
- ✓ CTA no simulador integrado a WhatsApp com valor capturado e resumo discriminado — v1.0
- ✓ Footer com contato, links úteis e copyright — v1.0
- ✓ Design System em Dark Mode (cinza escuro, chumbo) com glassmorphism e glow — v1.0
- ✓ Destaques em cores neon (Laranja vibrante) — v1.0
- ✓ Animações de scroll suaves e micro-interações (hover) — v1.0
- ✓ 100% Responsivo (Mobile, Tablet, Desktop) — v1.0

### Active

(None currently — v1.0 shipped)

### Out of Scope

- Qualquer uso de cor azul — explicitamente proibido pelas diretrizes visuais.
- Banco de dados ou backend complexo para o simulador — lógica mantida 100% no frontend com alta reatividade.

## Context

Shipped v1.0 MVP da Landing Page de Vendas de Sistemas construída com React 18, Vite e Vanilla CSS.
Aplicação 100% funcional com cálculo em tempo real de orçamento e envio para WhatsApp.

## Constraints

- **Design**: Paleta sem tons de azul — Diretriz fundamental do design system.
- **Visuals**: Dark Mode com Glassmorphism — Requisito exigido para a aparência premium e sofisticada.
- **Desempenho**: Cálculo no Frontend — O simulador atualiza instantaneamente para evitar esperas e aumentar o engajamento.
- **Tipografia**: Inter do Google Fonts (400, 600) — Requisito estilístico.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Simulador via estado local (frontend) | Proporcionar resposta instantânea nas seleções de pacotes sem roundtrips ao servidor. | ✓ Good |
| Vanilla CSS Tokens | Manter total controle sobre estética neon e glassmorphism sem overhead de frameworks utilitários externos. | ✓ Good |

## Evolution

This document evolves at phase transitions and milestone boundaries.

---
*Last updated: 2026-09-02 after v1.0 milestone completion*
