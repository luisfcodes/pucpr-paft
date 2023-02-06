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
          <button class="user-content-card-description-options-edit">Editar</button>
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