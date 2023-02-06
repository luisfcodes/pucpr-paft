async function loadUserPage(){
  const allCars = await getAllCars()
  const reservationList = await getAllReservations()
  const carsRenteds = allCars.filter(car => reservationList.findIndex(reservation => reservation.reservation.carId === car.id) !== -1);

  reservationList.sort((a,b) => a.reservation.carId - b.reservation.carId)

  carsRenteds.forEach((car, index) => {
    document.querySelector('#content-home').innerHTML += `
    <div class="user-content-card">
      <div class="user-content-card-header">
        <h2>${car.brand} ${car.model}</h2>
        <section class="user-content-card-description-options">
          <button class="user-content-card-description-options-edit" onclick="handleOpenModalUserPage(${car.id}, ${car.price}, ${reservationList[index].id}, '${reservationList[index].reservation.initialDate}', '${reservationList[index].reservation.endDate}', '${reservationList[index].reservation.note}')">Editar</button>
          <button class="user-content-card-description-options-delete" onclick="deleteCarReservation(${car.id}, ${reservationList[index].id})">Deletar</button>
       </section>
      </div>
      <div class="user-content-card-description">
        <div class="user-content-card-description-image-attributes">
          <img src="../../assets/images/${car.imageName}" alt="">
          <section class="user-content-card-description-attributes">
            <div class="user-content-card-description-attributes-group">

              <div>
                <img src="../../assets/icons/seat.png" alt="Ícone de um assento de carro">
                <span>${car.attributes.seats} passageiros</span>
              </div>

              <div>
                <img src="../../assets/icons/door-car.png" alt="Ícone de uma porta de carro">
                <span>${car.attributes.doors} portas</span>
              </div>

              <div>
                <img src="../../assets/icons/air.png" alt="Ícone representando o vento">
                <span>${car.attributes.air}</span>
              </div>
            </div>

            <div class="user-content-card-description-attributes-group">
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
            </div>

          </section>
        </div>
        <section class="user-content-card-description-dates">
          <div>
            <span class="user-content-card-description-dates-title">Data de Retirada</span>
            <span class="user-content-card-description-dates-date">${formatDate(reservationList[index].reservation.initialDate)}</span>
          </div>

          <div>
            <span class="user-content-card-description-dates-title">Data de Entrega</span>
            <span class="user-content-card-description-dates-date">${formatDate(reservationList[index].reservation.endDate)}</span>
          </div>
        </section>
        <section class="user-content-card-description-prices">
          <div>
            <span class="user-content-card-description-prices-title">Aluguel Diário</span>
            <span class="user-content-card-description-prices-value">${formatCurrency(car.price)}</span>
          </div>

          <div>
            <span class="user-content-card-description-prices-title">Valor Total</span>
            <span class="user-content-card-description-prices-value">${formatCurrency(car.price * calcTotalDays(new Date(reservationList[index].reservation.initialDate), new Date(reservationList[index].reservation.endDate)))}</span>
          </div>
        </section>
      </div>
    </div>
    `
  });
}

loadUserPage()

async function handleOpenModalUserPage(carId, price, reservationId, initialDate, endDate, note){
  await openModal(carId)

  let dateOne = new Date(initialDate)
  dateOne.setDate(dateOne.getDate() + 1)
  document.querySelector('#initial-date').value = new Intl.DateTimeFormat('fr-CA').format(dateOne)

  let dateTwo = new Date(endDate)
  dateTwo.setDate(dateTwo.getDate() + 1)
  document.querySelector('#end-date').value = new Intl.DateTimeFormat('fr-CA').format(dateTwo)

  document.querySelector('#note').textContent = note

  showTotalPrice(price)

  document.querySelector('#modal-button').textContent = 'Atualizar Reserva'

  document.querySelector('form').setAttribute('onsubmit', `handleSubmitModalUserPage(event, ${carId}, ${reservationId})`)
}

function handleSubmitModalUserPage(event, carId, reservationId){
  event.preventDefault()
  const initialDate = new Date(document.querySelector('#initial-date').value);
  const endDate = new Date(document.querySelector('#end-date').value);
  const note = document.querySelector('#note').value

  if(calcTotalDays(initialDate, endDate) > 0 && calcTotalDays(new Date(), initialDate) > 0){
    updateReservation(carId, reservationId, initialDate, endDate, note)
  }
}