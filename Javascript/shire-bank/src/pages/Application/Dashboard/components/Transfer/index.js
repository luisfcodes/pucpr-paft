function Transfer(type) {
  const rootElement = document.querySelector('#root')
  rootElement.innerHTML = `
  <section class="section-container">
  <div class="section-content transfer-and-payments-section">
    <span class="transfer-and-payments-section-title">Realize suas transferência de forma rápida e segura.</span>

    <button class="transfer-and-payments-section-card" id="transfer-pix" onclick="Transfer('pix')">
      <img src="../../../assets/icon-pix.png" alt="">
      <span>Pix</span>
    </button>

    <button class="transfer-and-payments-section-card" id="transfer-ted" onclick="Transfer('ted')">
      <img src="../../../assets/icon-transfer.png" alt="">
      <span>TED</span>
    </button>

    <button class="transfer-and-payments-section-card" id="transfer-doc" onclick="Transfer('doc')">
      <img src="../../../assets/icon-doc.png" alt="">
      <span>DOC</span>
    </button>

  </div>

  <div class="section-content transfer-and-payments-section-form">

    <div class="transfer-and-payments-section-form-resume">
      <span class="transfer-and-payments-section-form-resume-title">Resumo</span>

      <div class="transfer-and-payments-section-form-resume-group">
        <span>CPF do destinatário</span>
        <span>100.348.499-98</span>
      </div>

      <div class="transfer-and-payments-section-form-resume-group">
        <span>Valor</span>
        <span>R$1.345,00</span>
      </div>

      <div class="transfer-and-payments-section-form-resume-group">
        <span>Data</span>
        <span>22/11/2022</span>
      </div>
    </div>

    <form action="">
      <div class="transfer-and-payments-section-form-input-group">
        <label for="cpf-pix">CPF</label>
        <input type="number" id="cpf-pix">
      </div>

      <div class="transfer-and-payments-section-form-input-group">
        <label for="amount-pix">Valor</label>
        <input type="number" id="amount-pix">
      </div>

      <div class="transfer-and-payments-section-form-input-group">
        <label for="date-pix">Data para transferência</label>
        <input type="date" id="date-pix">
      </div>

      <button>Transferir</button>
    </form>

  </div>
</section>
  `

  // switch (type) {
  //   case 'pix':
  //     document.querySelector('#pix').classList.toggle('active')
  //     break
  //   case 'ted':
  //     document.querySelector('#ted').classList.toggle('active')
  //     break
  //   case 'doc':
  //     document.querySelector('#doc').classList.toggle('active')
  //     break
  //   default:
  //     return
  // }
}