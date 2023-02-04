fetch('http://127.0.0.1:5000/cars').then(res => res.json().then(res => {

  res.forEach(car => {

    document.querySelector('#cars-card-home').innerHTML = `
    <div class="card-content">
    <div class="card-header card-header-available">
      <h3>${car.brand} ${car.model}</h3>
      <span>${car.status}</span>
    </div>
    <img class="card-banner" src="./assets/images/${car.imageName}" alt="${car.imageName}">
  
    <section class="card-description">
      <div class="card-description-group" id="cars-card-description-home">

        <div>
          <img src="./assets/icons/seat.png" alt="Ícone de um assento de carro">
          <span>${car.attributes[0].seats} passageiros</span>
        </div>
  
        <div>
          <img src="./assets/icons/door-car.png" alt="Ícone de uma porta de carro">
          <span>4 portas</span>
        </div>
  
        <div>
          <img src="./assets/icons/air.png" alt="Ícone representando o vento">
          <span>Ar condicionado</span>
        </div>
      </div>
  
      <div class="card-description-group">
        <div>
          <img src="./assets/icons/gear-stick.png" alt="Ícone de um câmbio de veículo">
          <span>Manual</span>
        </div>
  
        <div>
          <img src="./assets/icons/engine.png" alt="Ícone de um motor de veículo">
          <span>1.0</span>
        </div>
  
        <div>
          <img src="./assets/icons/suitcase.png" alt="Ícone de uma mala de viagem">
          <span>1 - 2 malas</span>
        </div>
      </div>
  
    </section>
  
    <button>Reservar</button>
  </div>
    `   

  })
}))

