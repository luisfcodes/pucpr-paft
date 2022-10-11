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