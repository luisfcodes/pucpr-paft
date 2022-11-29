function Transfer() {
  const rootElement = document.querySelector('#root')
  rootElement.innerHTML = `
  <section class="section-container">
  <div class="section-content transfer-and-payments-section" id="transfer-and-payments-section">
    <span class="transfer-and-payments-section-title">Realize suas transferência de forma rápida e segura.</span>

    <button class="transfer-and-payments-section-card active" id="transfer-pix" onclick="optionSelected('pix')">
      <img src="../../../assets/icon-pix.png" alt="">
      <span>Pix</span>
    </button>

    <button class="transfer-and-payments-section-card" id="transfer-ted" onclick="optionSelected('ted')">
      <img src="../../../assets/icon-transfer.png" alt="">
      <span>TED</span>
    </button>

    <button class="transfer-and-payments-section-card" id="transfer-doc" onclick="optionSelected('doc')">
      <img src="../../../assets/icon-doc.png" alt="">
      <span>DOC</span>
    </button>

  </div>

  <div class="section-content transfer-and-payments-section-form">

    <div class="transfer-and-payments-section-form-resume">
      <span class="transfer-and-payments-section-form-resume-title">Resumo</span>

      <div class="transfer-and-payments-section-form-resume-group">
        <span>CPF do destinatário</span>
        <span id="resume-cpf">000.000.000-00</span>
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

    <form action="#" onSubmit="finalizeTransfer(event)">
      <div class="transfer-and-payments-section-form-input-group">
        <label for="cpf-pix">CPF</label>
        <input type="text" id="cpf" oninput="inputValidations(event)">
      </div>

      <div class="transfer-and-payments-section-form-input-group">
        <label for="amount-pix">Valor</label>
        <input type="text" id="amount" oninput="inputValidations(event)">
      </div>

      <div class="transfer-and-payments-section-form-input-group">
        <label for="date-pix">Data para transferência</label>
        <input type="date" id="date" onfocusout="inputValidations(event)">
      </div>

      <button>Transferir</button>
    </form>

  </div>
</section>
  `
}

// const cpfValidation = inputValidations(cpf, /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'CPF inválido')

function inputValidations(event) {
  masks(event)

  switch (event.target.id) {
    case 'cpf':
      document.querySelector('#resume-cpf').textContent = event.target.value
      break
    case 'amount':
      document.querySelector('#resume-amount').textContent = 'R$' + event.target.value
      break
    case 'date':
      document.querySelector('#resume-date').textContent = new Intl.DateTimeFormat('pt-BR').format(new Date(event.target.value).setDate(new Date(event.target.value).getDate() + 1))
      break
  }
}

function optionSelected(type) {
  document.querySelector('#transfer-and-payments-section').querySelectorAll('button').forEach(item => item.classList.remove('active'))

  switch (type) {
    case 'pix':
      document.querySelector('#transfer-pix').classList.toggle('active')
      break
    case 'ted':
      document.querySelector('#transfer-ted').classList.toggle('active')
      break
    case 'doc':
      document.querySelector('#transfer-doc').classList.toggle('active')
      break
    default:
      return
  }
}

function finalizeTransfer(event){
  event.preventDefault()
}