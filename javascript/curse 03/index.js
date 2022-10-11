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

  if(a && b) document.getElementById('calcMaisResult').innerText = a + b
}

// second activity

// function menos(a, b = false){
//   return !b ? a * -1 : a - b
// }

function menos(){
  const a = Number(document.getElementById('calcMenosNumberOne').value)
  const b = Number(document.getElementById('calcMenosNumberTwo').value)

  if(!b && a) {
    document.getElementById('calcMenosResult').innerText = a * -1
  } else if (a && b) {
    document.getElementById('calcMenosResult').innerText = a - b
  }
}

// third activity

// function eCrescente(list){
//   for(i = 1; i < list.length; i++){
//     if(list[i] < list[i - 1])
//       return 'Lista Não Crescente'
//   }
//   return 'Lista Crescente'
// }

function eCrescente(){
  const arr = (document.getElementById('calcECrescenteList').value).split(',')
  console.log(arr)
}