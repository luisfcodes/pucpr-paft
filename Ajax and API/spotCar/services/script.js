function getAllCars() {
  return fetch('http://127.0.0.1:5000/cars')
    .then(res => res.json()
      .then(res => res))
}

function getAllReservations() {
  return fetch('http://127.0.0.1:5000/reservations')
    .then(res => res.json()
      .then(res => res))
}

function getUser() {
  return fetch('http://127.0.0.1:5000/users')
    .then(res => res.json()
      .then(res => res))
}

async function addCarReservation(id, initialDate, endDate, note) {
  const carList = await getAllCars()
  const [userCurrent] = await getUser()
  const [car] = carList.filter(car => car.id === id)

  fetch(`http://127.0.0.1:5000/reservations/${id}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        'username': userCurrent.username,
        'reservation': {
          'carId': car.id,
          'initialDate': initialDate,
          'endDate': endDate,
          'note': note
        }
      }
    )
  }).then(res => res.json().then(res => {
    console.log(res)
  }))
}

async function deleteCarReservation(carId, reservationId) {
  fetch(`http://127.0.0.1:5000/reservations/${carId}/${reservationId}`, {
    method: 'DELETE'
  }).then(res => res.json().then(res => {
    console.log(res)
  }))
}