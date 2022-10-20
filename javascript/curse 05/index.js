let selectedCardsList = []
let previousCard = null
let scorePlayer = 0
const scorePlayerElement = document.getElementById('scorePlayer')

const cardList = [
  {
    name: 'as',
    id: 'as-one'
  },
  {
    name: 'as',
    id: 'as-two'
  },
  {
    name: 'two',
    id: 'two-one'
  },
  {
    name: 'two',
    id: 'two-two'
  },
  {
    name: 'three',
    id: 'three-one'
  },
  {
    name: 'three',
    id: 'three-two'
  },
  {
    name: 'four',
    id: 'four-one'
  },
  {
    name: 'four',
    id: 'four-two'
  },
  {
    name: 'five',
    id: 'five-one'
  },
  {
    name: 'five',
    id: 'five-two'
  },
  {
    name: 'six',
    id: 'six-one'
  },
  {
    name: 'six',
    id: 'six-two'
  },
]

createCardList()

function createCardList(){
  document.getElementById('cardsGameContainer').innerHTML = ''
  const randomNumberList = []

  while (randomNumberList.length < cardList.length) {
    let randomNumber = Number((Math.random() * ((cardList.length - 1) - 0) + 0).toFixed(0));
    let numberExist = randomNumberList.includes(randomNumber)
    if (!numberExist) {
      randomNumberList.push(randomNumber)
    }
  }
  
  randomNumberList.forEach(item => {
    const element = document.createElement('img')
    element.classList.add('gameCard')
    element.setAttribute('name', cardList[item].name)
    element.setAttribute('id', cardList[item].id)
    element.setAttribute('onclick', `cardsGame('${cardList[item].id}')`)
    element.setAttribute('src', 'images/background.png')
    document.getElementById('cardsGameContainer').appendChild(element)
  })
}

function showCard(element, src) {
  element.classList.add('gameCard_active')
  setTimeout(() => {
    element.setAttribute('src', `images/${src}.png`)
  }, 300)
}

function hideCard(element) {
  element.classList.remove('gameCard_active')
  setTimeout(() => {
    element.setAttribute('src', 'images/background.png')
  }, 300)
}

function cardsGame(id) {
  const elementSelected = document.getElementById(id)
  const idSrc = id.split("-")[0]

  const cardAlreadyExists = selectedCardsList.includes(elementSelected)

  if (!cardAlreadyExists) {
    if (previousCard === null) {
      showCard(elementSelected, idSrc)
      previousCard = elementSelected
    } else if (previousCard && elementSelected !== previousCard) {
      showCard(elementSelected, idSrc)
      if (previousCard.getAttribute('name') === elementSelected.getAttribute('name')) {
        scorePlayer++
        scorePlayerElement.innerText = scorePlayer
        selectedCardsList.push(previousCard, elementSelected)
        previousCard = null
      } else {
        setTimeout(() => {
          hideCard(previousCard)
          hideCard(elementSelected)
          previousCard = null
        }, 800)
      }
      if(scorePlayer === 6){
        setTimeout(() => {
          gameFinished()
        }, 600)
      }
    }
  }
}

function resetCardsGame() {
  selectedCardsList = []
  previousCard = null
  scorePlayer = 0
  scorePlayerElement.innerText = scorePlayer
  document.getElementById('cardsGameContainer').classList.remove('game_finished_message')
  const selectedElementList = document.getElementById('cardsGameContainer').getElementsByTagName('img')
  for (let i = 0; i < selectedElementList.length; i++) {
    hideCard(selectedElementList[i])
  }
  setTimeout(() => {
    createCardList()
  }, 600)
}

function gameFinished(){
  document.getElementById('cardsGameContainer').classList.add('game_finished_message')
}