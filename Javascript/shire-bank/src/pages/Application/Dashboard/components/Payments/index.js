function Payments(type){
  const elementRoot = document.querySelector('#root')
  elementRoot.innerHTML = `
  <section class="section-container">
  <div class="section-content transfer-and-payments-section">
    <span class="transfer-and-payments-section-title">Pague suas contas sem sair de casa.</span>

    <button class="transfer-and-payments-section-card" id="payment-pix" onclick="Payments('pix')">
      <img src="../../../assets/icon-pix.png" alt="">
      <span>Pague com Pix</span>
    </button>

    <button class="transfer-and-payments-section-card" id="ted" onclick="Payments('ted')">
      <img src="../../../assets/icon-slipPayment.png" alt="">
      <span>Boleto</span>
    </button>

    <button class="transfer-and-payments-section-card" id="doc" onclick="Payments('doc')">
      <img src="../../../assets/icon-invoice.png" alt="">
      <span>Fatura</span>
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
}