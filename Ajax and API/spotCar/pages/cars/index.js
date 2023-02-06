async function loadCarsPage(){
  const carList = await getAllCars()
  showCars(carList, carList.length, 'cars-card-cars')
}

loadCarsPage()