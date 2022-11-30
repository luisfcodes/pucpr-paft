function Report(){
  const rootElement = document.querySelector('#root')
  rootElement.innerHTML = `
  <section class="section-container report-section">
        <div class="section-content">
          <div>
            <span class="report-section-title">Relatório personalizados para você</span>
            <span class="report-section-subtitle">Tenha o controle que sempre quis sobre as suas finanças, extraia relatórios realmente importantes para traçar as melhores estratégias com seu dinheiro.</span>
          </div>
        </div>

        <div class="section-content report-section-options">
          <div>
            <span class="report-section-options-title">Finanças pessoais</span>
            <span class="report-section-options-subtitle">Obtenha uma visão profunda sobre seus gastos pessoais, personalize os filtros para obter a melhor opção no seu caso.</span>
          </div>
      
          <div>
            <span class="report-section-options-title">Investimentos</span>
            <span class="report-section-options-subtitle">Entenda como seu dinheiro está rendendo, elabore estratégias para os próximos anos e alcance a sua dependência financeira.</span>
          </div>
      
        </div>
      </section>
  `
}