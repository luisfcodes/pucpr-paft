async function getDateInterval(event) {
  event.preventDefault()
  const primaryDateElement = document.querySelector('#primary-date')
  const secondaryDateElement = document.querySelector('#secondary-date')
  const responseExOneElement = document.querySelector('#response-ex-one')
  const responseExOneContentElement = document.querySelector('#response-ex-one-content')

  const response = await fetch(`http://127.0.0.1:5000/date/${primaryDateElement.value}/${secondaryDateElement.value}`)
    .then(res => res.json()
      .then(data => data))

  responseExOneElement.classList.remove('disabled')
  responseExOneContentElement.innerHTML = `
    <p><span>Dias:</span> ${response.days}</p>
    <p><span>Semanas:</span> ${response.weeks}</p>
    <p><span>Meses:</span> ${response.months}</p>
  `
}

async function getNumbers(event) {
  event.preventDefault()
  const numbersListElement = document.querySelector('#numbersList')
  const responseExTwoElement = document.querySelector('#response-ex-two')
  const responseExTwoContentElement = document.querySelector('#response-ex-two-content')

  const response = await fetch(`http://127.0.0.1:5000/numbers/${numbersListElement.value}`,)
    .then(res => res.json()
      .then(data => data))

  responseExTwoElement.classList.remove('disabled')
  responseExTwoContentElement.innerHTML = `
    <p><span>Crescente:</span> [${response.ascending}]</p>
    <p><span>Decrescente:</span> [${response.descending}]</p>
    <p><span>Pares:</span> [${response.evenList}]</p>
  `
}

async function getPhrase(event) {
  event.preventDefault()
  const phraseElement = document.querySelector('#phrase')
  const responseExThreeElement = document.querySelector('#response-ex-three')
  const responseExThreeContentElement = document.querySelector('#response-ex-three-content')

  const response = await fetch(`http://127.0.0.1:5000/phrase/${phraseElement.value}`,)
    .then(res => res.json()
      .then(data => data))

      responseExThreeElement.classList.remove('disabled')
      responseExThreeContentElement.innerHTML = `
        <p><span>Frase:</span> ${response.result}</p>
      `
}