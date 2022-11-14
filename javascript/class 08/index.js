// <------ activity one ------>

let count = 5

const timer = setInterval(() => {
  console.log('Activity one\nPUCPR')
  count--

  if (count <= 0) {
    clearInterval(timer)
  }
}, 500)

// <------ activity two ------>

setTimeout(() => {
  console.log('Activity two\nPontifícia Universidade')
  setTimeout(() => {
    console.log('Activity two\nCatólica do')
    setTimeout(() => {
      console.log('Activity two\nParaná')
    }, 1000)
  }, 1000)
}, 1000)

// <------ activity three ------>

setTimeout(() => {
  const a = 5;
  setTimeout(() => {
    const b = 10;
    setTimeout(() => {
      const c = 2;
      console.log('Activity three\n', (a + b * c))
    }, 800)
  }, 200)
}, 500)

// <------ activity four ------>

function testNum(number) {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve(console.log(`Activity four\nO número ${number} passou no teste.`))
    } else {
      reject(new Error(`Activity four\nO número ${number} não passou no teste.`))
    }
  })
}

testNum(15)

// <------ activity five ------>

function sortWords(list) {
  return new Promise(resolve => {
    resolve(console.log(list.sort()))
  })
}

function makeAllCaps(list) {
  return new Promise((resolve, reject) => {
    const newList = list.map(element => {
      if (typeof element !== "string") {
        reject(new Error(`Activity five\nLista inválida, ${element} não é do tipo string.`))
      } else {
        return element.toUpperCase()
      }
    })
    resolve(console.log(`Activity five\nNova lista [${newList}]`), sortWords(newList))
  })
}

makeAllCaps(['prédio', 'aula', 'abelha', 'bexiga'])

// <------ activity six ------>

function request(url, method = "GET") {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest()
    req.open(method, url)
    req.onload = () => {
      if(req.status >= 200 && req.status <= 299){
        resolve(console.log(`Activity six\nRequisição realizada com sucesso! ${req.response}`))
      } else {
        reject(new Error(`Requisição inválida! ${req.status}: ${req.message}`))
      }
    }
    req.send()
  }).catch(err => console.log('Activity six\n' + err))
}

request('https://jsonplaceholder.typicode.com/posts')