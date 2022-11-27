function Report(){
  const rootElement = document.querySelector('#root')
  rootElement.innerHTML = `
  <section class="section-container report-section">
        <div class="section-content">
          <div>
            <span class="report-section-title">Relatório personalizados para você</span>
            <span class="report-section-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nam voluptas aspernatur quod fuga hic.</span>
          </div>
        </div>

        <div class="section-content report-section-options">
          <div>
            <span class="report-section-options-title">Finanças pessoais</span>
            <span class="report-section-options-subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio doloremque consectetur repellendus architecto, cupiditate nostrum.</span>
          </div>
      
          <div>
            <span class="report-section-options-title">Investimentos</span>
            <span class="report-section-options-subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio doloremque consectetur repellendus architecto, cupiditate nostrum.</span>
          </div>
      
        </div>
      </section>
  `
}