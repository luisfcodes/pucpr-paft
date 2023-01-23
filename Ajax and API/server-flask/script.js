async function getDateInterval(event) {
  event.preventDefault()
  const primaryDateElement = document.querySelector('#primary-date')
  const secondaryDateElement = document.querySelector('#secondary-date')
  const responseExOneElement = document.querySelector('#response-ex-one')
  const formResponseContentElement = document.querySelector('#form-response-content')

  const response = await fetch(`http://127.0.0.1:5000/date/${primaryDateElement.value}/${secondaryDateElement.value}`)
    .then(res => res.json()
      .then(data => data))

  responseExOneElement.classList.remove('disabled')
  formResponseContentElement.innerHTML = `
    <p><span>Dias</span>: ${response.days}</p>
    <p><span>Semanas</span>: ${response.weeks}</p>
    <p><span>Meses</span>: ${response.months}</p>
  `
}

async function getNumbers(event){
  event.preventDefault()
  const numbersListElement = document.querySelector('#numbersList')

  const response = await fetch(`http://127.0.0.1:5000/numbers/${numbersListElement.value}`,)
    .then(res => res.json()
      .then(data => data))

  console.log(response)
}