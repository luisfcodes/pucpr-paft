async function fibonacci(n) {
  try {
    let a = 0
    let b = 1
    let c = n
    const calc = ["0 => 0", "1 => 1"]

    for (let i = 2; i <= n; i++) {
      calc.push(`${i}º => ${a} + ${b} = ${a + b}`)

      c = a + b;
      a = b;
      b = c;
    }

    return {
      c,
      calc
    }
  } catch (err) {
    throw err
  }
}

async function calcFibonacci() {
  const number = Number(document.getElementById('calcFibonacciNumber').value)
  const fibonacciSequenceList = document.getElementById('fibonacciSequenceList')

  if (number) {
    const { c, calc } = await fibonacci(number)

    fibonacciSequenceList.innerHTML = ''
    fibonacciSequenceList.classList.add('fibonacciSequenceList')

    document.getElementById('calcFibonacciResult').innerText = c

    calc.forEach(item => {
      const element = document.createElement('li')
      element.innerText = item
      fibonacciSequenceList.appendChild(element)
    })
  }
}

// Timer

let timerInterval;

function timerFormatted(number) {
  if (number < 10) {
    return "0" + number
  } else {
    return number
  }
}

async function timer() {
  try {
    const timerInput = Number(document.getElementById('inputTimer').value)
    const timerButtonStart = document.getElementById('startTimer')
    const timerButtonReset = document.getElementById('stopTimer')
    const timerMinutes = document.getElementById('minutesTimer')
    const timerSeconds = document.getElementById('secondsTimer')
    let secondsTotal = timerInput * 60

    if (timerInput > 0 && timerInput <= 60) {
      timerMinutes.innerText = await timerFormatted(timerInput)
      timerButtonStart.setAttribute('disabled', true)
      timerButtonReset.removeAttribute('disabled')

      timerInterval = setInterval(() => {
        secondsTotal--
        let minutes = Math.floor(secondsTotal / 60)
        let seconds = (((secondsTotal / 60) - minutes) * 60).toFixed(0)

        timerMinutes.innerText = timerFormatted(minutes)
        timerSeconds.innerText = timerFormatted(seconds)

        if (seconds <= 0) {
          clearInterval(timerInterval)
        }
      }, 1000)
    }
  } catch (err) {
    return err
  }
}

async function resetTimer() {
  try {
    clearInterval(timerInterval)
    document.getElementById('inputTimer').value = ''
    document.getElementById('minutesTimer').innerText = '00'
    document.getElementById('secondsTimer').innerText = '00'
    document.getElementById('startTimer').removeAttribute('disabled')
    document.getElementById('stopTimer').setAttribute('disabled', true)
  } catch (err) {
    return err
  }
}

// Guessing Game

let randomNumber = Math.floor(Math.random() * 100) + 1
let lives = 10

async function guessingGame() {
  try {
    const guess = Number(document.getElementById('inputGuessingGame').value)
    const result = document.getElementById('inputGuessingGameResult')
    const buttonGame = document.getElementById('startGuessingGame')
    const buttonReset = document.getElementById('resetGuessingGame')

    if (guess > 0 && lives > 0 && guess <= 100) {
      buttonGame.setAttribute('disabled', true)
      buttonReset.setAttribute('disabled', true)
      setTimeout(() => {
        if (guess !== randomNumber) {
          lives--
          if (guess < randomNumber) {
            result.innerText = `Errou, o número sorteado é maior.\nVidas restantes: ${lives}`
          } else {
            result.innerText = `Errou, o número sorteado é menor.\nVidas restantes: ${lives}`
          }
        } else {
          result.innerText = `Parabéns você acertou!!!`
        }
        setTimeout(() => {
          buttonGame.removeAttribute('disabled')
          buttonReset.removeAttribute('disabled')

          if (guess === randomNumber) {
            randomNumber = Math.floor(Math.random() * 100) + 1
            result.innerText = ''
            document.getElementById('inputGuessingGame').value = ''
            lives = 10
          }
        }, 5000)
      }, 3000)
    }

    if (guess > 0 && lives === 0 && guess <= 100) {
      result.innerText = `Game over!!!`
    }

  } catch (err) {
    return err
  }
}

async function resetGuessingGame() {
  try {
    randomNumber = Math.floor(Math.random() * 100) + 1
    document.getElementById('inputGuessingGameResult').innerText = ''
    document.getElementById('inputGuessingGame').value = ''
    document.getElementById('resetGuessingGame').setAttribute('disabled', true)
    lives = 10
  } catch (err) {
    return err
  }
}