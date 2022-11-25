function Statement() {
  const rootElement = document.querySelector('#root')
  rootElement.innerHTML = `
  <section class="section-container">
  <div class="section-content statement-section">
    <h3>Histórico</h3>
    <div class="statement-search">
      <img src="../../../assets/icon-search.png" alt="">
      <input type="text" class="statement-input" placeholder="Buscar">
    </div>

    <div class="statement-cards">

      <div class="statement-card">
        <div class="statement-card-title">
          <span>Compra no débito</span>
          <span>25/11/2022</span>
        </div>
        <span class="statement-card-customer">Supermercado Londres</span>
        <span class="statement-card-price expense">R$170,98</span>
      </div>

      <div class="statement-card">
        <div class="statement-card-title">
          <span>Transferência recebida</span>
          <span>25/11/2022</span>
        </div>
        <span class="statement-card-customer">Luis Fernando da Silva</span>
        <span class="statement-card-price income">R$256,00</span>
      </div>

      <div class="statement-card">
        <div class="statement-card-title">
          <span>Transferência enviada</span>
          <span>22/11/2022</span>
        </div>
        <span class="statement-card-customer">Ronaldo Pereira dos Santos</span>
        <span class="statement-card-price expense">R$38,00</span>
      </div>

      <div class="statement-card">
        <div class="statement-card-title">
          <span>Compra no crédito</span>
          <span>20/11/2022</span>
        </div>
        <span class="statement-card-customer">Posto Tulio</span>
        <span class="statement-card-price expense">R$150,00</span>
      </div>

      <div class="statement-card">
        <div class="statement-card-title">
          <span>Compra no débito</span>
          <span>20/11/2022</span>
        </div>
        <span class="statement-card-customer">Martins Supermercado</span>
        <span class="statement-card-price expense">R$45,23</span>
      </div>

      <div class="statement-card">
        <div class="statement-card-title">
          <span>Transferência recebida</span>
          <span>18/11/2022</span>
        </div>
        <span class="statement-card-customer">Amanda Soares da SIlva</span>
        <span class="statement-card-price income">R$140,00</span>
      </div>

    </div>
  </div>
</section>
  `
}