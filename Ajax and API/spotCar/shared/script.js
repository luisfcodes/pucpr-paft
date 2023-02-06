function showCars(res, length, elementId){
  for (let i = 0; i < length; i++) {
    document.querySelector(`#${elementId}`).innerHTML += `
      <div class="card-content">
        <div class="card-header ${res[i].status === 'Disponível' ?  'card-header-available' : res[i].status === 'Indisponível' ? 'card-header-rented' : 'card-header-maintenance'}">
          <h3>${res[i].brand} ${res[i].model}</h3>
          <span>${res[i].status}</span>
        </div>
        <img class="card-banner" src="../../assets/images/${res[i].imageName}" alt="${res[i].imageName}">
  
        <section class="card-description">
          <div class="card-description-group" id="cars-card-description-home">
  
            <div>
              <img src="../../assets/icons/seat.png" alt="Ícone de um assento de carro">
              <span>${res[i].attributes.seats} passageiros</span>
            </div>
  
            <div>
              <img src="../../assets/icons/door-car.png" alt="Ícone de uma porta de carro">
              <span>${res[i].attributes.doors} portas</span>
            </div>
  
            <div>
              <img src="../../assets/icons/air.png" alt="Ícone representando o vento">
              <span>${res[i].attributes.air}</span>
            </div>
          </div>
  
          <div class="card-description-group">
            <div>
              <img src="../../assets/icons/gear-stick.png" alt="Ícone de um câmbio de veículo">
              <span>${res[i].attributes.gear}</span>
            </div>
  
            <div>
              <img src="../../assets/icons/engine.png" alt="Ícone de um motor de veículo">
              <span>${res[i].attributes.engine}</span>
            </div>
  
            <div>
              <img src="../../assets/icons/suitcase.png" alt="Ícone de uma mala de viagem">
              <span>${res[i].attributes.trunk}</span>
            </div>
          </div>
  
        </section>
  
        <button ${res[i].status === 'Disponível' ? `onclick="openModal(${res[i].id})"` : ''} class="${res[i].status === 'Disponível' ? '' : 'not-allowed'}">Reservar</button>
      </div>
  `
  }
}

function calcTotalDays(dateOne, dateTwo) {
  let difference = dateTwo.getTime() - dateOne.getTime();
  let totalDays = Math.ceil(difference / (1000 * 3600 * 24)) + 1;

  return totalDays
}

function formatDate(date){
  let dateFormated = new Date(date)
  dateFormated.setDate(dateFormated.getDate() + 1)
  return new Intl.DateTimeFormat('pt-BR').format(dateFormated)
}

function formatCurrency(value){
  return Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}