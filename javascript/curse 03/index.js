// <----- first activity ----->

// function soma(a,b){
//   return a + b
// }

// const soma = function(a,b) {
//   return a + b
// }

// const soma = () => a + b

const soma = () => {
  const a = Number(document.getElementById('calcSomaNumberOne').value)
  const b = Number(document.getElementById('calcSomaNumberTwo').value)

  if (a && b) document.getElementById('calcMaisResult').innerText = a + b
}

// <----- second activity ----->

// function menos(a, b = false){
//   return !b ? a * -1 : a - b
// }

function menos() {
  const a = Number(document.getElementById('calcMenosNumberOne').value)
  const b = Number(document.getElementById('calcMenosNumberTwo').value)

  if (!b && a) {
    document.getElementById('calcMenosResult').innerText = a * -1
  } else if (a && b) {
    document.getElementById('calcMenosResult').innerText = a - b
  }
}

// <----- third activity ----->

// function eCrescente(list){
//   for(i = 1; i < list.length; i++){
//     if(list[i] < list[i - 1])
//       return 'Lista Não Crescente'
//   }
//   return 'Lista Crescente'
// }

function eCrescente() {
  const arr = (document.getElementById('calcECrescenteList').value).split(',')

  if (arr.length > 1) {
    for (i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1])
        return document.getElementById('calcECrescenteResult').innerText = 'Lista Não Crescente'
    }
    return document.getElementById('calcECrescenteResult').innerText = 'Lista Crescente'
  }
}

// <----- fourth activity ----->

// function maior(list){
//   let number = 0
//   list.forEach(item => {
//     if(Number(item) > number) 
//       number = item
//   })
//   return number
// }

function maior() {
  const list = (document.getElementById('calcMaiorList').value).split(',')

  if (list.length > 1) {
    let number = 0
    list.forEach(item => {
      if (Number(item) > number)
        number = item
    })
    return document.getElementById('calcMaiorResult').innerText = number
  }
}

// <----- fifth activity ----->

// function myJoin(list, separator = ','){
//   let text = ''
//   list.forEach(item => {
//     if(item !== list[list.length - 1]){
//       text += item + separator
//     } else {
//       text += item
//     }
//   })
//   return text
// }

function myJoin(){
  let text = ''
  const list = (document.getElementById('MyJoinList').value).split(',')
  const separator = document.getElementById('MyJoinSeparator').value === "" ? ',' : document.getElementById('MyJoinSeparator').value

  if(list.length > 1){
    list.forEach(item => {
      if(item !== list[list.length - 1]){
        text += item + separator
      } else {
        text += item
      }
    })
    return document.getElementById('MyJoinResult').innerText = text
  }
}