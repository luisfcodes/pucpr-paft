// <------ activity four ------>

async function testNum(number) {
    if (number > 10) {
     console.log(`Activity four\nO número ${number} passou no teste.`)
    } else {
      throw `Activity four\nO número ${number} não passou no teste.`
    }
}

testNum(15)

// <------ activity five ------>

async function sortWords(list) {
  const newList = await list.sort()
  return newList
}

async function makeAllCaps(list) {
    try {
      const newList = await list.map(element => {
        if (typeof element !== "string") {
          throw `Activity five\nLista inválida, ${element} não é do tipo string.`
        } else {
          return element.toUpperCase()
        }
      })
      console.log(`Activity five\nNova lista [${newList}]`)
      sortWords(newList)
        .then(list => console.log(list))
        .catch(err => console.log(err))      
    } catch (err) {
      console.log(err)
    }
}

makeAllCaps(['prédio', 'aula', 'abelha', 'bexiga'])

// <------ activity six ------>

async function request(url, method = "GET") {
  try {
    const req = await new XMLHttpRequest()
    req.open(method, url)
    req.onload = () => {
      if (req.status >= 200 && req.status <= 299) {
       console.log(`Activity six\nRequisição realizada com sucesso! ${req.response}`)
      } else {
        throw `Requisição inválida! ${req.status}: ${req.message}`
      }
    }
    req.send()
  } catch (err) {
    console.log('Activity six\n' + err)
  }   
}

request('https://jsonplaceholder.typicode.com/posts')