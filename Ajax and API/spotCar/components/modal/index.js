async function openModal(id) {
  const cars = await getAllCars()
  const carSelected = cars.filter(item => item.id === id)

  carSelected.forEach(car => {
    document.querySelector('#modal-container').innerHTML = `
      <div class="modal-content-container">
        <div class="modal-content">
          <div class="modal-content-header">
            <h3>${car.brand} ${car.model}</h3>
            <button onclick="closeModal()"><img src="../../assets/icons/close.png" alt="Ícone de saída"></button>
          </div>
          <div class="modal-content-car">
            <img class="modal-content-car-banner" src="../../assets/images/${car.imageName}" alt="${car.model}">
            <div>
              <section class="modal-content-car-attributes">
                <div>
                  <img src="../../assets/icons/seat.png" alt="Ícone de um assento de carro">
                  <span>${car.attributes.seats} Passageiros</span>
                </div>

                <div>
                  <img src="../../assets/icons/door-car.png" alt="Ícone de uma porta de carro">
                  <span>${car.attributes.doors} Portas</span>
                </div>

                <div>
                  <img src="../../assets/icons/air.png" alt="Ícone representando o vento">
                  <span>${car.attributes.air}</span>
                </div>

                <div>
                  <img src="../../assets/icons/gear-stick.png" alt="Ícone de um câmbio de veículo">
                  <span>${car.attributes.gear}</span>
                </div>

                <div>
                  <img src="../../assets/icons/engine.png" alt="Ícone de um motor de veículo">
                  <span>${car.attributes.engine}</span>
                </div>

                <div>
                  <img src="../../assets/icons/suitcase.png" alt="Ícone de uma mala de viagem">
                  <span>${car.attributes.trunk}</span>
                </div>
              </section>
              <section class="modal-content-car-description">
                <span class="modal-content-car-description-title">O que está incluído:</span>
                <div class="modal-content-car-description-content">
                  <div class="modal-content-car-description-group">
                    <div>
                      <img src="../../assets/icons/check.png" alt="Ícone de okay">
                      <span>Proteção do Veículo</span>
                    </div>
                    <div>
                      <img src="../../assets/icons/check.png" alt="Ícone de okay">
                      <span>KM Livre (ilimitado)</span>
                    </div>
                    <div>
                      <img src="../../assets/icons/check.png" alt="Ícone de okay">
                      <span>Sem Taxa de Alteração</span>
                    </div>
                  </div>
                  <div class="modal-content-car-description-group">
                    <div>
                      <img src="../../assets/icons/check.png" alt="Ícone de okay">
                      <span>Melhor Preço Garantido</span>
                    </div>
                    <div>
                      <img src="../../assets/icons/check.png" alt="Ícone de okay">
                      <span>Taxas da Locadora</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <form onSubmit="handleSubmit(event, ${car.id})">
            <div class="modal-form-group">
              <h3>Escolha o período de locação</h3>
              <div class="modal-form-inputs">
                <div class="modal-form-inputs-group">
                  <label for="initial-date">Data inicial:</label>
                  <input type="date" id="initial-date" required onfocusout="showTotalPrice(${car.price})">
                </div>
                <div class="modal-form-inputs-group">
                  <label for="end-date">Data final:</label>
                  <input type="date" id="end-date" required onfocusout="showTotalPrice(${car.price})">
                </div>
              </div>
            </div>
            <div class="modal-form-group">
              <h3>Adicione alguma observação (Opcional)</h3>
              <textarea id="note"></textarea>
            </div>
            <div class="modal-form-total">
              <div>
                <span class="modal-form-total-description">Diária:</span> <span class="modal-form-total-price">${formatCurrency(car.price)}</span>
              </div>
              <div>
                <span class="modal-form-total-description">Total:</span> <span class="modal-form-total-price" id="modal-form-total-price">-</span>
              </div>
            </div>
            <button class="modal-content-car-button" id="modal-button">Reservar</button>
          </form>
        </div>
      </div>
  `
  })

  document.querySelector('#modal-container').classList.remove('hidden')
}

function closeModal() {
  document.querySelector('#modal-container').classList.add('hidden')
}

function showTotalPrice(price){
  let dateOne = new Date(document.querySelector('#initial-date').value);
  let dateTwo = new Date(document.querySelector('#end-date').value);
  const totalDays = calcTotalDays(dateOne, dateTwo)

  if(totalDays >= 0){
    document.querySelector('#modal-form-total-price').textContent = `${formatCurrency(price * totalDays)}`
  } else {
    document.querySelector('#modal-form-total-price').textContent = '-'
  }
}

function handleSubmit(event, id){
  event.preventDefault()
  const dateOne = new Date(document.querySelector('#initial-date').value);
  const dateTwo = new Date(document.querySelector('#end-date').value);
  const note = document.querySelector('#note').value

  if(calcTotalDays(dateOne, dateTwo) > 0 && calcTotalDays(new Date(), dateOne) > 0){
    addCarReservation(id, dateOne, dateTwo, note)
  }
}