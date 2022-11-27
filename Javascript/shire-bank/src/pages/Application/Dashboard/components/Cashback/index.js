function Cashback(){
  const rootElement = document.querySelector('#root')
  rootElement.innerHTML = `
  <section class="section-container cashback-section">
  <div class="section-content">
    <div>
      <span class="cashback-section-title">Receba parte do seu dinheiro de volta nas suas compras</span>
      <span class="cashback-section-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nam voluptas aspernatur quod fuga hic.</span>
    </div>
  </div>

  <div class="section-content cashback-section-options">
    <div>
      <span class="cashback-section-options-title">Finanças pessoais</span>
      <span class="cashback-section-options-subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio doloremque consectetur repellendus architecto, cupiditate nostrum.</span>
    </div>

    <div>
      <span class="cashback-section-options-title">Investimentos</span>
      <span class="cashback-section-options-subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio doloremque consectetur repellendus architecto, cupiditate nostrum.</span>
    </div>

  </div>
</section>
  `
}