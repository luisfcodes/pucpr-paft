function Payments() {
  const rootElement = document.querySelector('#root')
  rootElement.innerHTML = `
  <section class="section-container">
  <div class="section-content transfer-and-payments-section payments-xl" id="transfer-and-payments-section">
    <span class="transfer-and-payments-section-title">Pague suas contas sem sair de casa.</span>

    <button class="transfer-and-payments-section-card active" id="payment-pix" onclick="pixPaymentDOM()">
      <img src="../../../assets/icon-pix.png" alt="">
      <span>Pague com Pix</span>
    </button>

    <button class="transfer-and-payments-section-card" id="payment-slipPayment" onclick="slipPaymentDOM()">
      <img src="../../../assets/icon-slipPayment.png" alt="">
      <span>Boleto</span>
    </button>

    <button class="transfer-and-payments-section-card" id="payment-invoice" onclick="invoiceDOM()">
      <img src="../../../assets/icon-invoice.png" alt="">
      <span>Fatura</span>
    </button>

  </div>

  <div class="section-content transfer-and-payments-section-form">
    <span class="message message-success hidden" id="messageSuccessTransfer">Pagamento realizado com sucesso.</span>
    
    <div class="transfer-and-payments-section-form-group" id="root-payment"></div>
  </div>

  </section>
`
  pixPaymentDOM()
}

function optionSelectedPayment(type) {
  document.querySelector('#transfer-and-payments-section').querySelectorAll('button').forEach(item => item.classList.remove('active'))

  switch (type) {
    case 'pix':
      document.querySelector('#payment-pix').classList.toggle('active')
      break
    case 'slipPayment':
      document.querySelector('#payment-slipPayment').classList.toggle('active')
      break
    case 'invoice':
      document.querySelector('#payment-invoice').classList.toggle('active')
      break
    default:
      return
  }
}

function pixPaymentDOM() {
  optionSelectedPayment('pix')
  const element = document.querySelector('#root-payment')
  element.innerHTML = `
  <div class="transfer-and-payments-section-form-resume">
  <span class="transfer-and-payments-section-form-resume-title">Resumo</span>
  <div class="transfer-and-payments-section-form-resume-group">
    <span>CPF/CNPJ do destinatário</span>
    <span id="resume-cpf-or-cnpj">000.000.000-00</span>
  </div>

  <div class="transfer-and-payments-section-form-resume-group">
    <span>Nome/Razão Social</span>
    <span id="resume-name-or-corporateName">---</span>
  </div>

  <div class="transfer-and-payments-section-form-resume-group">
    <span>Valor</span>
    <span id="resume-amount">R$0,00</span>
  </div>

  <div class="transfer-and-payments-section-form-resume-group">
    <span>Data</span>
    <span id="resume-date">--/--/----</span>
  </div>
  </div>

  <form action="#" onsubmit="cancelSubmit(event)">
  <div class="transfer-and-payments-section-form-input-group">
    <label for="code-pix">Código Pix</label>
    <input type="text" id="code-pix" required>
    <p class="warning hidden" id="codePixWarning"></p>
  </div>

  <div class="transfer-and-payments-section-form-input-group">
    <label for="date-pix">Data para pagamento</label>
    <input type="date" id="date" required>
  </div>

  <button>Pagar</button>
  </form>
    `
}

function slipPaymentDOM() {
  optionSelectedPayment('slipPayment')
  const element = document.querySelector('#root-payment')
  element.innerHTML = `
  <div class="transfer-and-payments-section-form-resume">
  <span class="transfer-and-payments-section-form-resume-title">Resumo</span>
  <div class="transfer-and-payments-section-form-resume-group">
    <span>CPF/CNPJ do destinatário</span>
    <span id="resume-cpf-or-cnpj">000.000.000-00</span>
  </div>

  <div class="transfer-and-payments-section-form-resume-group">
    <span>Nome/Razão Social</span>
    <span id="resume-name-or-corporateName">---</span>
  </div>

  <div class="transfer-and-payments-section-form-resume-group">
    <span>Valor</span>
    <span id="resume-amount">R$0,00</span>
  </div>

  <div class="transfer-and-payments-section-form-resume-group">
    <span>Data</span>
    <span id="resume-date">--/--/----</span>
  </div>
  </div>

  <form action="#" onsubmit="cancelSubmit(event)">
  <div class="transfer-and-payments-section-form-input-group">
    <label for="code-pix">Código do boleto</label>
    <input type="text" id="code-pix" required>
    <p class="warning hidden" id="codePixWarning"></p>
  </div>

  <div class="transfer-and-payments-section-form-input-group">
    <label for="date-pix">Data para pagamento</label>
    <input type="date" id="date" required>
  </div>

  <button>Pagar</button>
  </form>
  `
}

async function invoiceDOM(){
  const { data } = await queryUser(localStorage.getItem('userSession'))
  const statement = data[0].statement.filter(element => element.title === 'Compra no crédito')

  optionSelectedPayment('invoice')
  const element = document.querySelector('#root-payment')
  element.innerHTML = `
    <div id='root-payment-invoice' class='root-payment-invoice'>
      <span class="root-payment-invoice-total">Total: ${formatCurrency(data[0].invoice)}</span>
    </div>
  `

  const elementInvoice = document.querySelector('#root-payment-invoice')

  statement.forEach(item => {
    elementInvoice.innerHTML += `
      <div class="statement-card">
        <div class="statement-card-title">
          <span>${item.title}</span>
          <span>${formatDate(item.created_at)}</span>
        </div>
        <span class="statement-card-customer">${item.customer}</span>
        <span class="statement-card-price ${item.category}">${formatCurrency(item.amount)}</span>
      </div>
    `
  })

  elementInvoice.innerHTML += `
    <button class="transfer-and-payments-section-card">Pagar</button>
  `
}

function cancelSubmit(event){
  event.preventDefault()
}