const modalElement = document.querySelector('#modal')

function showModal() {
  modalElement.classList.remove('disabled')
  modalElement.innerHTML = `
    <section class="modal-content">
    <button class="modal-button-close" onclick="closeModal()">
      <img src="./images/close-icon.png" alt="Ícone de fechar">
    </button>
    <span class="modal-title">Adicionar novo produto</span>

    <form onsubmit="addProduct(event)">
      <div class="modal-input">
        <label for="name">Nome</label>
        <input type="text" placeholder="Banana" id="name" required>
      </div>

      <div class="modal-inputs-group">
        <div class="modal-input">
          <label for="quantity">Quantidade</label>
          <input type="number" id="quantity" placeholder="2" class="modal-input-quantity" required>
        </div>

        <div class="modal-input">
          <label for="unit_type">Tipo de medida</label>
          <select name="unit_type" id="unit_type" required>
            <option selected disabled style="display:none;" value="0">Selecione</option>
            <option value="kg">Kg</option>
            <option value="und">Unidade</option>
          </select>
        </div>
      </div>

      <button class="modal-button">Cadastrar</button>
    </form>
  </section>
`
}

function closeModal() {
  document.getElementById('name').value = ''
  document.querySelector('#quantity').value = ''
  document.querySelector('#unit_type').value = ''
  modalElement.classList.add('disabled')
}