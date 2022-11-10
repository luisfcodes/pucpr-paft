//first activity
let myArrayFirstActivity = []

function addNewNumber() {
  let number = Number(document.getElementById('addNumber').value)

  if (number) {
    myArrayFirstActivity.push(number)
  }
  document.getElementById('addNumber').value = ''
  document.getElementById('addNumber').focus()
  calcSumOfNumbersAndAverage()
}

function calcSumOfNumbersAndAverage() {
  if (myArrayFirstActivity.length > 0) {
    let newArrayPositiveNumbers = myArrayFirstActivity.filter(element => element > 0)
    const average = (newArrayPositiveNumbers.reduce((accumulator, value) => accumulator + value, 0) / newArrayPositiveNumbers.length).toFixed(2)

    const resultElement = document.getElementById('resultsListPositiveAndAverage')

    resultElement.innerHTML = `
      <p class='result resultCalcSumOfNumbersAndAverage'>Array Original</p>
      <span class='resultNumber'>[${myArrayFirstActivity}]</span>
      <p class='result resultCalcSumOfNumbersAndAverage'>Array Positivo Gerado</p>
      <span class='resultNumber'>[${newArrayPositiveNumbers}]</span>
      <p class='result resultCalcSumOfNumbersAndAverage'>Média dos valores</p>
      <span class='resultNumber'>${average}</span>
    `
  }
}

function resetCalcSumOfNumbersAndAverage() {
  myArrayFirstActivity = []
  document.getElementById('resultsListPositiveAndAverage').innerHTML = ''
}

// second activity
let myArraySecondActivity = []

function addNewPerson() {
  let newPerson = document.getElementById('addNewPerson').value
  let colorDescription = document.getElementById('colorSelect').value

  if (newPerson && colorDescription) {
    myArraySecondActivity.push({
      name: newPerson,
      color: colorDescription
    })

    showPeopleColorCount()
    document.getElementById('addNewPerson').value = ''
    colorDescription = document.getElementById('colorSelect').value = ''
    document.getElementById('addNewPerson').focus()
  }
}

function showPeopleColorCount() {
  const colorsList = []

  for (const elements of myArraySecondActivity) {
    colorsList.push(Object.getOwnPropertyDescriptor(elements, 'color').value)
  }

  const countColorType = colorsList.reduce((accumulator, element) => {
    accumulator[element]++
    return accumulator
  }, {
    branco: 0,
    negro: 0,
    pardo: 0,
    outro: 0
  })

  document.getElementById('resultsListNamesAndColors').innerHTML = `
    <table class="resultsListNamesAndColorsTable">
      <thead>
        <tr>
          <th colspan="4">Quantidade de pessoas por cor</th>
        </tr>
        <tr>
          <th>Brancos</th>
          <th>Negros</th>
          <th>Pardos</th>
          <th>Outros</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${countColorType['branco']}</td>
          <td>${countColorType['negro']}</td>
          <td>${countColorType['pardo']}</td>
          <td>${countColorType['outro']}</td>
        </tr>
      </tbody>
    </table>
  `
}

function resetCalcSamplingPeopleByColor() {
  myArraySecondActivity = []
  document.getElementById('resultsListNamesAndColors').innerHTML = ''
}

// third activity
let numberDrawn = Number((Math.random() * 99 + 1).toFixed(0))

function showMessage(text, className, cleanInput = false) {
  document.getElementById('resultsGuessingGame').innerHTML = `
    <p class="resultGuessingGame ${className}">${text}</p>
  `

  if (cleanInput) {
    setTimeout(() => {
      document.getElementById('resultsGuessingGame').innerHTML = ''
    }, 1000)
  }
}

function stopGame() {
  document.getElementById('addNewGuess').setAttribute('disabled', '')
  document.getElementById('addNewGuessButton').setAttribute('disabled', '')
}

function addNewGuess() {
  const playerGuess = document.getElementById('addNewGuess').value

  if (playerGuess) {
    if (playerGuess < 1 || playerGuess > 100) {
      showMessage("Desistiu? </br> Game Over!!!", "loserMessage")
      stopGame()
    } else {
      if (playerGuess > numberDrawn) {
        showMessage("Menor", "guessesMessage", true)
      } else if (playerGuess < numberDrawn) {
        showMessage("Maior", "guessesMessage", true)
      } else {
        showMessage("Acertou!!!", "victoryMessage")
        stopGame()
      }
    }
    document.getElementById('addNewGuess').value = ''
    document.getElementById('addNewGuess').focus()
  }
}

function newGuessingGame() {
  showMessage("Jogo reiniciado", "victoryMessage", true)
  numberDrawn = Number((Math.random() * 99 + 1).toFixed(0))
  document.getElementById('addNewGuess').removeAttribute('disabled', '')
  document.getElementById('addNewGuessButton').removeAttribute('disabled', '')
}