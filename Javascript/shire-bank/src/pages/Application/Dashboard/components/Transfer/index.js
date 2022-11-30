function Transfer() {
  const rootElement = document.querySelector('#root')
  rootElement.classList.add('root-xl')
  rootElement.innerHTML = `
  <section class="section-container">
  <div class="section-content transfer-and-payments-section" id="transfer-and-payments-section">
    <span class="transfer-and-payments-section-title">Realize suas transferência de forma rápida e segura.</span>

    <button class="transfer-and-payments-section-card active" id="transfer-pix" onclick="pixDOM()">
      <img src="../../../assets/icon-pix.png" alt="">
      <span>Pix</span>
    </button>

    <button class="transfer-and-payments-section-card" id="transfer-ted" onclick="tedDOM()" >
      <img src="../../../assets/icon-transfer.png" alt="">
      <span>TED</span>
    </button>

  </div>

  <div class="section-content transfer-and-payments-section-form">

    <span class="message message-success hidden" id="messageSuccessTransfer">Transferência realizada com sucesso.</span>
    
    <div class="transfer-and-payments-section-form-group">
     <div class="transfer-and-payments-section-form-resume"  id="root-resumeTransfer"></div>

    <form action="#" onSubmit="finalizeTransfer(event)">
      <div class="transfer-and-payments-section-form-input-group">
        <label for="cpf-pix">CPF</label>
        <input type="text" id="cpf" oninput="inputValidations(event)" onfocusout="searchReceiver(event.target.value)" required>
        <p class="warning hidden" id="cpfWarning"></p>
      </div>

      <div class="transfer-and-payments-section-form-input-group">
        <label for="amount-pix">Valor</label>
        <input type="text" id="amount" oninput="inputValidations(event)" required>
        <p class="warning hidden" id="amountWarning"></p>
      </div>

      <div class="transfer-and-payments-section-form-input-group">
        <label for="date-pix">Data para transferência</label>
        <input type="date" id="date" onfocusout="inputValidations(event)" required>
      </div>

      <button>Transferir</button>
    </form>
    </div>

  </div>
</section>
  `

  pixDOM()
}

function pixDOM(){
  optionSelectedTransfer('pix')
  const element = document.querySelector('#root-resumeTransfer')
  element.innerHTML = `
  <span class="transfer-and-payments-section-form-resume-title">Resumo</span>

  <div class="transfer-and-payments-section-form-resume-group">
    <span>CPF do destinatário</span>
    <span id="resume-cpf">000.000.000-00</span>
  </div>

  <div class="transfer-and-payments-section-form-resume-group">
    <span>Nome do destinatário</span>
    <span id="resume-name">---</span>
  </div>

  <div class="transfer-and-payments-section-form-resume-group">
    <span>Valor</span>
    <span id="resume-amount">R$0,00</span>
  </div>

  <div class="transfer-and-payments-section-form-resume-group">
    <span>Data</span>
    <span id="resume-date">--/--/----</span>
  </div>
  `
}

function tedDOM(){
  optionSelectedTransfer('ted')
  const element = document.querySelector('#root-resumeTransfer')
  element.innerHTML = `
    <span class="transfer-and-payments-section-form-resume-title">Resumo</span>

    <div class="transfer-and-payments-section-form-resume-group">
      <span>CPF do destinatário</span>
      <span id="resume-cpf">000.000.000-00</span>
    </div>

    <div class="transfer-and-payments-section-form-resume-group">
      <span>Nome do destinatário</span>
      <span id="resume-name">---</span>
    </div>

    <div class="transfer-and-payments-section-form-resume-group">
      <span>Agência</span>
      <span id="resume-branch">---</span>
    </div>

    <div class="transfer-and-payments-section-form-resume-group">
      <span>Conta</span>
      <span id="resume-account">---</span>
    </div>

    <div class="transfer-and-payments-section-form-resume-group">
      <span>Valor</span>
      <span id="resume-amount">R$0,00</span>
    </div>

    <div class="transfer-and-payments-section-form-resume-group">
      <span>Data</span>
      <span id="resume-date">--/--/----</span>
    </div>

  `
}

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

function optionSelectedTransfer(type) {
  document.querySelector('#transfer-and-payments-section').querySelectorAll('button').forEach(item => item.classList.remove('active'))

  switch (type) {
    case 'pix':
      document.querySelector('#transfer-pix').classList.toggle('active')
      break
    case 'ted':
      document.querySelector('#transfer-ted').classList.toggle('active')
      break
    default:
      return
  }
}

async function finalizeTransfer(event) {
  event.preventDefault()

  const cpf = document.querySelector("#cpf")
  const amount = document.querySelector('#amount')
  const date = document.querySelector('#date')
  const user = await userCurrent()
  const receiver = await searchReceiver(cpf.value)

  let dateFormated = new Date(date.value)
  dateFormated.setDate(dateFormated.getDate() + 1)

  let amountFormated = 0

  if (amount.value.length > 5) {
    amountFormated = Number(amount.value.replace('.', '').replace(',', '.'))
  } else {
    amountFormated = Number(amount.value.replace(',', '.'))
  }

  if (receiver && receiver.cpf !== user.cpf) {
    document.querySelector('#cpfWarning').classList.add('hidden')
    if (amountFormated < user.balance) {
      document.querySelector('#amountWarning').classList.add('hidden')
      try {
        const { error } = await updateUserAmount(user.cpf, user.balance - amountFormated, amountFormated , dateFormated , 'expense', 'Transferência enviada', receiver.name)
        if (error) throw new Error(error)
      } catch (err) {
        throw new Error(err)
      }

      try {
        const { error } = await updateUserAmount(receiver.cpf, receiver.balance + amountFormated, amountFormated , dateFormated,  'income', 'Transferência recebida', user.name)
        if (error) throw new Error(error)
      } catch (err) {
        throw new Error(err)
      }
      document.querySelector('#messageSuccessTransfer').classList.remove('hidden')
      setTimeout(() => {
        document.querySelector('#messageSuccessTransfer').classList.add('hidden')
        resetPix()
      },1000)
    } else {
      document.querySelector('#amountWarning').textContent = "Saldo insuficiente"
      document.querySelector('#amountWarning').classList.remove('hidden')
    }
  } else {
    document.querySelector('#cpfWarning').textContent = "Insira um cpf válido"
    document.querySelector('#cpfWarning').classList.remove('hidden')
    setTimeout(() => {
      document.querySelector('#cpfWarning').classList.add('hidden')
    },1000)
  }
}

async function searchReceiver(value, type) {
  const { data } = await queryUserCPF(value.replace(/\D/g, ""))
  if (data[0]) {
    document.querySelector('#resume-name').textContent = data[0].name
    if(document.querySelector('#resume-branch')){
      document.querySelector('#resume-branch').textContent = data[0].branch
      document.querySelector('#resume-account').textContent = data[0].account
    }
    return data[0]
  } else {
    document.querySelector('#resume-name').textContent = '---'
    return false
  }

}

function resetPix(){
  document.querySelector('#cpf').value = ''
  document.querySelector('#amount').value = ''
  document.querySelector('#date').value = ''
  document.querySelector('#resume-cpf').textContent = '000.000.000-00'
  document.querySelector('#resume-name').textContent = '---'
  document.querySelector('#resume-amount').textContent = 'R$0,00'
  document.querySelector('#resume-date').textContent = '--/--/----'
}