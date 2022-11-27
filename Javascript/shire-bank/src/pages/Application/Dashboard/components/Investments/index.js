function Investments(){
  const rootElement = document.querySelector('#root')
  rootElement.innerHTML = `
  <section class="section-container investments-section">
  <div class="section-content">
    <span class="investments-section-title">Aumente sua renda através das nossas opções de investimentos</span>
    <span class="investments-section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam officiis ab nemo cumque, aperiam minima tenetur mollitia voluptatibus.</span>
  </div>

  <div class="section-content investments-section-options">
    <div>
      <span class="investments-section-options-title">Renda Fixa</span>
      <span class="investments-section-options-subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio doloremque consectetur repellendus architecto, cupiditate nostrum.</span>
    </div>

    <div>
      <span class="investments-section-options-title">Renda Variável</span>
      <span class="investments-section-options-subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio doloremque consectetur repellendus architecto, cupiditate nostrum.</span>
    </div>
  </div>
</section>
  `
}