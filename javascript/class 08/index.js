// <------ activity one ------>

let count = 5

const timer = setInterval(() => {
  console.log('PUCPR')
  count--

  if(count <= 0) {
    clearInterval(timer)
  }
},500)

// <------ activity two ------>

setTimeout(() => {
  console.log('Pontifícia Universidade')
  setTimeout(() => {
    console.log('Católica do')
    setTimeout(() => {
      console.log('Paraná')
    }, 1000)
  }, 1000)
}, 1000)