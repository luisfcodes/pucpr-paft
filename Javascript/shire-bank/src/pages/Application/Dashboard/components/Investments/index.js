function Investments(){
  const rootElement = document.querySelector('#root')
  rootElement.innerHTML = `
  <section class="section-container investments-section">
  <div class="section-content">
    <span class="investments-section-title">Investimentos adequados para todos os tipos de perfis</span>
    <span class="investments-section-subtitle">Que tal aumentar sua renda de forma segura e em poucos passos? Pois agora isto é possível, contamos com inúmeras opções de investimentos que visam atender qualquer perfil, desde o mais conservador ao mais agressivo.</span>
  </div>

  <div class="section-content investments-section-options">
    <div>
      <span class="investments-section-options-title">Renda Fixa</span>
      <span class="investments-section-options-subtitle">Gostaria de investir com risco mínimo? A renda fixa é para você, nesta modalidade a remuneração já é previamente estipulada no momento da aplicação do dinheiro.</span>
    </div>

    <div>
      <span class="investments-section-options-title">Renda Variável</span>
      <span class="investments-section-options-subtitle">Está buscando turbinar sua renda? A renda variável provê bons ganhos, com alguns riscos de mercados específicos, podendo variar ao longo do tempo.</span>
    </div>
  </div>
</section>
  `
}