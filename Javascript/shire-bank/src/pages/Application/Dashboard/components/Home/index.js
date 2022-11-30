async function Home() {
  const userData = await userCurrent()

  const rootElement = document.querySelector('#root')
  rootElement.innerHTML = `
  <section class="section-container home-section-info">
  <div class="section-content">
    <div class="home-section-info-user">
      <h1>Olá, <span id="user-name">${userData.name}</span></h1>
      <a href="../../../../index.html">
        <button class="button-primary-color aside-button-logout" onclick="signOut()">Sair</button>
      </a>
    </div>

    <div class="home-section-info-balance">
      <h3>Saldo da conta</h3>
      <span id="user-balance">${formatCurrency(userData.balance)}</span>
    </div>
  </div>
</section>

<section class="section-container home-section-options">
  <button class="home-section-options-card" onclick="Statement()">
    <img src="../../../assets/icon-statement.png" alt="">
    <span>Extrato</span>
  </button>

  <button class="home-section-options-card" onclick="Transfer()">
    <img src="../../../assets/icon-transfer.png" alt="">
    <span>Transferência</span>
  </button>

  <button class="home-section-options-card" onclick="Payments()">
    <img src="../../../assets/icon-payment2.png" alt="">
    <span>Pagamentos</span>
  </button>

  <button class="home-section-options-card" onclick="Loan()">
    <img src="../../../assets/icon-loan.png" alt="">
    <span>Empréstimos</span>
  </button>

  <button class="home-section-options-card" onclick="Investments()">
    <img src="../../../assets/icon-investiment.png" alt="">
    <span>Investimentos</span>
  </button>

  <button class="home-section-options-card" onclick="Report()">
    <img src="../../../assets/icon-report.png" alt="">
    <span>Relatórios</span>
  </button>

  <button class="home-section-options-card" onclick="Cashback()">
    <img src="../../../assets/icon-cashback.png" alt="">
    <span>Cashback</span>
  </button>

  <button class="home-section-options-card" onclick="MilesProgram()">
    <img src="../../../assets/icon-travel.png" alt="">
    <span>Programa de Milhas</span>
  </button>
</section>

<section class="section-container home-section-creditCard">
  <div class="section-content">
    <div class="home-section-creditCard-content">
      <h2>Cartão de crédito</h2>
      <div>
        <h3>Fatura atual</h3>
        <span id="user-invoice">${formatCurrency(userData.invoice)}</span>
      </div>
      <div>
        <h3>Limite disponível</h3>
        <span id="user-invoiceLimit">${formatCurrency(userData.invoice_limit)}</span>
      </div>
    </div>
  </div>
</section>

<section class="section-container">
  <div class="section-content">
    <h2>Empréstimo</h2>
    <div>
      <h3>Valor disponível</h3>
      <span>R$85.000,00</span>
    </div>
  </div>
</section>
  `
  testHomeComponent()
}

Home()
