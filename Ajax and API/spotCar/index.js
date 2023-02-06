async function loadHomePage(){
  const carList = await getAllCars()
  showCars(carList, 4, 'cars-card-home')
}

loadHomePage()

async function teste(){
  const teste = await getAllReservations()
  const teste2 = await getAllCars()
  console.log(teste)
  console.log(teste2)
}

teste()