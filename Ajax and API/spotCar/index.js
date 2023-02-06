async function loadHomePage(){
  const carList = await getAllCars()
  showCars(carList, 4, 'cars-card-home')
}

loadHomePage()