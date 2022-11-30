class CashbackClass {
  get cashbackComponent() {
    return `
      <section class="section-container cashback-section">
        <div class="section-content">
          <div>
            <span class="cashback-section-title">Receba parte do seu dinheiro de volta nas suas compras</span>
            <span class="cashback-section-subtitle">Que tal poder gastar e ainda receber dinheiro de volta? Pois com o programa de cashback isto se torna possível, se inscreva e já comece usar hoje mesmo.</span>
          </div>
        </div>
  
        <div class="section-content cashback-section-about">
          <div>
            <span class="cashback-section-about-title">Programa de cashback</span>
            <p class="cashback-section-about-paragraph">Este é um dos grandes benefícios que ofereceremos a nossos clientes, sabemos que atualmente as compras online aumentaram drasticamente, vimos neste cenário a possibilidade de oferecer gratuitamente o programa de cashback, no qual o cliente poderá receber parte do valor da comprar de volta.</p>
            <p class="cashback-section-about-paragraph">Já são centenas de lojas parceiras em nossa base de dados, se inscreve e já comece a usufruir do seu benefício imediatamente.</p>
            <button>Participar</button>
          </div>
        </div>
  </section>
    `
  }
}

function Cashback() {
  const cashbackClass = new CashbackClass()
  const rootElement = document.querySelector('#root')
  rootElement.innerHTML = cashbackClass.cashbackComponent
}