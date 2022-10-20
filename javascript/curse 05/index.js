document.getElementById('gameCard').addEventListener('mouseenter', () => {
  document.getElementById('gameCard').classList.add('gameCardHover')
  setTimeout(() => {
    document.getElementById('gameCard').setAttribute('src', 'images/as.png')
  }, 300)
})

document.getElementById('gameCard').addEventListener('mouseout', () => {
  document.getElementById('gameCard').classList.remove('gameCardHover')
  setTimeout(() => {
    document.getElementById('gameCard').setAttribute('src', 'images/background.png')
  }, 300)
})
