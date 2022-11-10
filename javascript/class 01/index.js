//first activity
function calcIMC() {
  const weight = Number(document.getElementById('weight').value)
  const height = Number(document.getElementById('height').value)

  const imc = ((weight / (height**2) * 100) * 100).toFixed(2)

  const obese = imc >= 30

  if (weight && height) {
    document.getElementById('calcImcResult').textContent = `IMC Atual`
    const resultNumberElement = document.getElementById('calcImcNumberResult')
    if (!resultNumberElement) {
      document.getElementById('calcImcResult').insertAdjacentHTML('afterend', `<span class="resultNumber" id="calcImcNumberResult">${imc}</span>`)
    } else {
      document.getElementById('card_content_calcImc').removeChild(resultNumberElement)
      document.getElementById('calcImcResult').insertAdjacentHTML('afterend', `<span class="resultNumber" id="calcImcNumberResult">${imc}</span>`)
    }
  }
}

// second activity
function calcCollatz() {
  let number = Number(document.getElementById('numberSelected').value)
  const collatzResult = []

  if (number) {
    while (number > 1) {
      if (number % 2 === 0) {
        number = number / 2
      } else {
        number = (3 * number + 1)
      }
      collatzResult.push(number)
    }

    function createList() {
      document.getElementById('calcCollatzResult').insertAdjacentHTML('afterend', `<ul class="resultNumber resultNumberList" id="calcCollatzNumberResult"></ul>`)
      collatzResult.forEach(item => {
        let li = document.createElement("li")
        li.innerText = item
        li.classList.add('resultNumberItemList')
        document.getElementById('calcCollatzNumberResult').appendChild(li)
      })
    }

    document.getElementById('calcCollatzResult').textContent = `Collatz gerado`
    const resultNumberElement = document.getElementById('calcCollatzNumberResult')

    if (!resultNumberElement) {
      createList()
    } else {
      document.getElementById('card_content_calcCollatz').removeChild(resultNumberElement)
      createList()
    }
  }
}

// third activity
function calcHeight() {
  let heightOfChico = 150
  let heightOfZe = 110
  let yearCounter = 0

  do {
    heightOfChico += 2
    heightOfZe += 3
    yearCounter++
  } while (heightOfChico >= heightOfZe)

  function createElement(){
    document.getElementById('calcHeightResult').innerText = `${yearCounter} anos`
    document.getElementById('calcHeightResult').insertAdjacentHTML('beforebegin', 
    `<div class="result" id="calcHeightDivResult">
      <p class="calcHeightResultParagraph">Chico teria ${heightOfChico / 100} metro</p>
      <p class="calcHeightResultParagraph">Zé teria ${heightOfZe / 100} metro</p>
    </div>`
    )
  }

  const resultNumberElement = document.getElementById('calcHeightDivResult')

  if(!resultNumberElement){
    createElement()
  } 
}