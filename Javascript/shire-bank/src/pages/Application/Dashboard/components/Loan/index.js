function Loan(){
  const rootElement = document.querySelector('#root')
  rootElement.innerHTML = `
  <section class="section-container loan-section">
  <div class="section-content">
    <div>
      <span class="loan-section-title">Escolha a melhor opção para o seu momento</span>
      <span>Com juros baixíssimos e prazos longos de pagamento, temos certeza que nossas opções se encaixarão perfeitamente no seu orçamento. Consiga agora mesmo o dinheiro que faltava para realizar seu sonho.</span>
    </div>
  </div>

  <div class="section-content loan-section-options">
      <span class="loan-section-title">Opções disponíveis para você</span>

      <div class="loan-section-options-cards">
        <div class="loan-section-options-card">
          <span>Crédito pessoal</span>
          <span>R$15.000,00</span>
        </div>

        <div class="loan-section-options-card">
          <span>Financiamento de veículos</span>
          <span>R$45.000,00</span>
        </div>

        <div class="loan-section-options-card">
          <span>Financiamento de imóveis</span>
          <span>R$85.000,00</span>
        </div>

        <button>Simular</button>
      </div>
      
  </div>
</section>
  `
}