import React, { useState } from 'react';
import './Simulator.css';

const BASE_PRICE = 2000;

const ADDONS = [
  { id: 'financeiro', name: 'Módulo Financeiro', price: 800, desc: 'Fluxo de caixa, contas a pagar/receber e emissão de notas' },
  { id: 'whatsapp', name: 'Integração WhatsApp', price: 500, desc: 'Notificações automáticas, cobranças e avisos via WhatsApp' },
  { id: 'app_mobile', name: 'App Mobile Dedicado', price: 3000, desc: 'Aplicativo Android e iOS personalizado com sua marca' },
  { id: 'agendamentos', name: 'Módulo de Agendamentos', price: 600, desc: 'Calendário integrado, gestão de horários e confirmação' },
  { id: 'relatorios', name: 'Relatórios Avançados', price: 400, desc: 'Dashboards analíticos, métricas e exportação de dados em PDF/Excel' }
];

const Simulator = () => {
  const [selectedAddons, setSelectedAddons] = useState([]);

  const toggleAddon = (id) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedItems = ADDONS.filter((item) => selectedAddons.includes(item.id));
  const addonsTotal = selectedItems.reduce((acc, item) => acc + item.price, 0);
  const totalPrice = BASE_PRICE + addonsTotal;

  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const generateWhatsAppUrl = () => {
    const itemsList = selectedItems.length > 0 
      ? selectedItems.map(i => `• ${i.name} (${formatCurrency(i.price)})`).join('\n')
      : 'Nenhum adicional selecionado';
    
    const message = `Olá! Gostaria de solicitar um sistema montado pelo Simulador:\n\n• Sistema Base: ${formatCurrency(BASE_PRICE)}\n${itemsList}\n\n*Valor Total Estimado: ${formatCurrency(totalPrice)}*`;
    return `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="simulador" className="simulator-section">
      <div className="simulator-container">
        <div className="simulator-header">
          <span className="section-badge">Calculadora em Tempo Real</span>
          <h2 className="section-title">Simule o Investimento do seu Sistema</h2>
          <p className="section-desc">
            Personalize as funcionalidades necessárias para o seu negócio e veja o orçamento atualizar na hora.
          </p>
        </div>

        <div className="simulator-grid">
          {/* Options Column */}
          <div className="options-panel">
            {/* Base System Card */}
            <div className="base-card glassmorphism">
              <div className="base-card-info">
                <div className="base-badge">Incluso no Pacote Base</div>
                <h3 className="base-title">Sistema Base & Estrutura Completa</h3>
                <p className="base-desc">
                  Painel de controle administrativo, autenticação de usuários segura, banco de dados otimizado e layout responsivo de alta conversão.
                </p>
              </div>
              <div className="base-price">
                <span className="price-tag">{formatCurrency(BASE_PRICE)}</span>
                <span className="price-type">taxa inicial de setup</span>
              </div>
            </div>

            <div className="addons-section-title">
              <h3>Personalize com Módulos Adicionais</h3>
              <p>Selecione as ferramentas complementares para o seu projeto:</p>
            </div>

            <div className="addons-list">
              {ADDONS.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    className={`addon-item glassmorphism ${isChecked ? 'active' : ''}`}
                    onClick={() => toggleAddon(addon.id)}
                  >
                    <label className="checkbox-container" onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleAddon(addon.id)}
                      />
                      <span className="checkmark"></span>
                    </label>

                    <div className="addon-details">
                      <div className="addon-header">
                        <span className="addon-name">{addon.name}</span>
                        <span className="addon-price">+{formatCurrency(addon.price)}</span>
                      </div>
                      <p className="addon-desc">{addon.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Summary Column */}
          <div className="summary-wrapper">
            <div className="summary-panel glassmorphism">
              <h3 className="summary-title">Resumo do Orçamento</h3>
              <p className="summary-subtitle">Investimento total estimado em tempo real</p>

              <div className="summary-items">
                <div className="summary-item">
                  <span>Sistema Base</span>
                  <span>{formatCurrency(BASE_PRICE)}</span>
                </div>

                {selectedItems.map((item) => (
                  <div key={item.id} className="summary-item summary-addon-item">
                    <span>{item.name}</span>
                    <span>+{formatCurrency(item.price)}</span>
                  </div>
                ))}
              </div>

              <div className="summary-divider"></div>

              <div className="summary-total-container">
                <span className="total-label">Investimento Total</span>
                <span className="total-amount">{formatCurrency(totalPrice)}</span>
                <span className="total-installment">
                  ou 12x de {formatCurrency(Math.round(totalPrice * 1.15 / 12))} no cartão
                </span>
              </div>

              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary summary-cta"
              >
                Solicitar este Sistema
              </a>

              <div className="summary-guarantee">
                <span>🔒 Sem compromisso inicial. Atendimento direto pelo WhatsApp.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simulator;
