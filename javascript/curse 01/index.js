//first activity
function calcIMC() {
  const weight = Number(document.getElementById('weight').value)
  const height = Number(document.getElementById('height').value)

  const imc = ((weight / (height * 2)) * 100).toFixed(2)

  const obese = imc >= 30

  if (weight && height) {
    document.getElementById('calcImcResult').textContent = `IMC Atual`
    const resultNumberElement = document.getElementById('calcImcNumberResult')
    if(!resultNumberElement){
      document.getElementById('calcImcResult').insertAdjacentHTML('afterend', `<span class="resultNumber" id="calcImcNumberResult">${imc}</span>`) 
    } else {
      document.getElementById('card_content_calcImc').removeChild(resultNumberElement)
      document.getElementById('calcImcResult').insertAdjacentHTML('afterend', `<span class="resultNumber" id="calcImcNumberResult">${imc}</span>`) 
    }
  }
}

// second activity

function calcCollatz(){
  let number = Number(document.getElementById('numberSelected').value)
  const collatzResult = []

  while(number > 1 ){
      if (number % 2 === 0) {
          number = number / 2
      } else {
          number = (3 * number + 1)
      }
      collatzResult.push(number)
  }

  if (number) {
    document.getElementById('calcCollatzResult').textContent = `Collatz gerado`
    const resultNumberElement = document.getElementById('calcCollatzNumberResult')
    if(!resultNumberElement){
      document.getElementById('calcCollatzResult').insertAdjacentHTML('afterend', `<span class="resultNumber" id="calcCollatzNumberResult">${collatzResult.join(" | ")}</span>`) 
    } else {
      document.getElementById('card_content_calcCollatz').removeChild(resultNumberElement)
      document.getElementById('calcCollatzResult').insertAdjacentHTML('afterend', `<span class="resultNumber" id="calcCollatzNumberResult">${collatzResult.join(" | ")}</span>`) 
    }
  }
}

// third activity

// let heightOfChico = 150
// let heightOfZe = 110

// // while(heightOfChico > heightOfZe){

// // }

// console.log(abs(0.30000000000000004))