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

// <----- sixth activity ----->

function myObjectList(list){
  const favoriteColorList = []
  const individualColorList = []
  
  list.forEach(item => {
    favoriteColorList.push(Object.getOwnPropertyDescriptor(item, 'favoriteColor').value)
  })
  favoriteColorList.forEach(color => {
    if(!individualColorList.includes(color)) {
      individualColorList.push(color)
    }
  })

  return individualColorList
}

console.log(myObjectList([
  {
    name: 'Luis Fernando',
    age: 24,
    favoriteColor: 'azul'
  },
  {
    name: 'Amanda',
    age: 24,
    favoriteColor: 'rosa'
  },
  {
    name: 'Lorena',
    age: 30,
    favoriteColor: 'violeta'
  },
  {
    name: 'Bryan',
    age: 26,
    favoriteColor: 'azul'
  },
]))

// <----- seventh activity ----->

// function fibonacciNoRecursion(n) {
//   let a = 0
//   let b = 1
//   let c = n
  
//   for(let i = 2; i <= n; i++) {
//     c = a + b;
//     a = b; 
//     b = c; 
//   }
  
//   return c;
// };


function fibonacciWithRecursion(n){
  if (n <= 1) return n

  return fibonacciWithRecursion(n - 1) + fibonacciWithRecursion(n - 2)
}

function calcFibonacci(){
  const number = Number(document.getElementById('calcFibonacciNumber').value)
  if(number){
    const fibonacciResult = fibonacciWithRecursion(number)
    return document.getElementById('calcFibonacciResult').innerText = fibonacciResult
  }
}

// <----- eighth activity ----->

function mapear(list,func){
  const newList = []

  list.forEach(item => {
    newList.push(func(item))
  })
  return newList
}

console.log(mapear([1,2,3,5,6,8], x => x * 2))

// <----- ninth activity ----->

function calcCollatz(n){
  let numberCurrent = n
  return function(){
    if(numberCurrent <= 1) return numberCurrent
    if(numberCurrent % 2 === 0){
      return numberCurrent = numberCurrent / 2
    }
    return numberCurrent = 3 * numberCurrent + 1
  }
}

const calcCollatzResult = calcCollatz(8)
// console.log(calcCollatzResult())
// console.log(calcCollatzResult())
// console.log(calcCollatzResult())
// console.log(calcCollatzResult())

// <----- tenth activity ----->

function verbose(func) {
  return function(a,b){
    console.log(`${func.name}(${a},${b}) = ${func(a,b)}`)
  }
}

const somaNumbers = (a, b) => a + b;
const sum = verbose(somaNumbers)
sum(2,3)