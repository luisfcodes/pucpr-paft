function MilesProgram(){
  const rootElement = document.querySelector('#root')
  rootElement.innerHTML = `
  <section class="section-container milesProgram-section">
  <div class="section-content">
    <div>
      <span class="milesProgram-section-title">Conheça o mundo todo gastando pouco</span>
      <span class="milesProgram-section-subtitle">Acumule pontos através de suas compras no cartão de crédito.</span>
    </div>
  </div>

  <div class="section-content milesProgram-section-about">
    <div>
      <span class="milesProgram-section-about-title">Programa de Milhas</span>
      <p class="milesProgram-section-about-paragraph">Já sonhou em fazer aquela viagem, mas por falta de dinheiro teve que postergar? Com o programa de milha seu sonho será realizado.</p>
      <p class="milesProgram-section-about-paragraph">Não há cobrança para participar, basta gastar no mínimo R$500,00 mensalmente para já começar acumular milhas, que posteriormente poderão ser trocadas por viagens, tanto nacionais como internacionais.</p>
      <button>Participar</button>
    </div>

  </div>
</section>
  `
}