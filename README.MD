Crie uma Landing Page moderna e interativa para venda e revenda de sistemas de software. A página deve ter foco em conversão e incluir um simulador de orçamento dinâmico. 

DIRETRIZES VISUAIS (DESIGN SYSTEM):
- Tema: Dark Mode (fundo escuro, moderno e sofisticado).
- Cores de Fundo: Tons de cinza escuro e chumbo (ex: #121212, #1a1a1a, #242424).
- Cores de Destaque (Accent): Use tons de Roxo Neon (ex: #8a2be2), Verde Esmeralda ou Laranja (ex: #ff6b00) para botões, ícones e destaques.
- RESTRIÇÃO IMPORTANTE: NÃO USE NENHUM TOM DE AZUL.
- Tipografia: Uma fonte Sans-Serif limpa e tecnológica (ex: Inter, Roboto ou Plus Jakarta Sans).
- Estilo: Design minimalista, bordas levemente arredondadas (rounded-lg), efeitos de "glow" sutis nos botões de CTA e uso de Glassmorphism (fundos translúcidos) nos cards.

ESTRUTURA DA PÁGINA:

1. Cabeçalho (Header):
- Logo à esquerda.
- Links de navegação simples (Início, Recursos, Simulador, Contato).
- Botão CTA de destaque ("Falar com Consultor").

2. Hero Section:
- Título principal impactante (ex: "Sistemas Inteligentes para Escalar o seu Negócio").
- Subtítulo explicando que o sistema se adapta à necessidade da empresa.
- Dois botões: "Simular Orçamento" (ancorado para a seção do simulador) e "Ver Portfólio".

3. Seção de Funcionalidades (Cards):
- 3 a 4 cards explicando os benefícios do sistema base (Alta Performance, Segurança, Layout Responsivo, Painel Administrativo).

4. Seção do Simulador de Orçamento (Obrigatório e Funcional):
- Título: "Monte seu Sistema e Simule o Valor".
- Layout: Duas colunas. A coluna da esquerda com as opções e a da direita (fixa) com o resumo e o valor final.
- Regra de Negócio/Lógica:
  * Valor Base: R$ 2.000,00 (referente ao sistema básico, sempre incluso e inalterável).
  * Opções adicionais usando Checkboxes ou Toggles (o usuário pode marcar/desmarcar):
    - Módulo Financeiro (+ R$ 800,00)
    - Integração com WhatsApp (+ R$ 500,00)
    - Aplicativo Mobile (Android/iOS) (+ R$ 3.000,00)
    - Sistema de Agendamentos (+ R$ 600,00)
    - Módulo de Relatórios Avançados (+ R$ 400,00)
- Resumo do Orçamento (Coluna da direita):
  * Mostrar "Sistema Base: R$ 2.000,00".
  * Listar os adicionais selecionados dinamicamente.
  * Mostrar o "Valor Total Estimado" atualizado em tempo real.
  * Botão de CTA: "Solicitar este Sistema" (que capturaria o valor e enviaria para um WhatsApp ou formulário).

5. Rodapé (Footer):
- Informações de contato, links úteis e direitos autorais.

COMPORTAMENTO TÉCNICO:
- Certifique-se de que a lógica do cálculo no simulador funcione perfeitamente no frontend usando estado.
- A página deve ser 100% responsiva (Mobile, Tablet e Desktop).
- Adicione animações de scroll suaves e transições de hover nos botões e cards.