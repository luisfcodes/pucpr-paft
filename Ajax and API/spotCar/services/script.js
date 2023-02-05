function getAllCars() {
  return fetch('http://127.0.0.1:5000/cars')
  .then(res => res.json()
  .then(res => res))
}

function getUser() {
  return fetch('http://127.0.0.1:5000/users')
  .then(res => res.json()
  .then(res => res))
}

async function addCarReservation(id, totalDays){
  const carList = await getAllCars()
  const car = carList.filter(car => car.id === id)

  console.log(car)
}