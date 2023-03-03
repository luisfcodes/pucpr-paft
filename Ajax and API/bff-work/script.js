async function handleSubmit(event){
  event.preventDefault()
  
  const user = document.querySelector('#username').value

  let userData = await fetch(`http://127.0.0.1:5000/user?username=${user}`)
  userData = await userData.json()

  let pokedexData = await fetch(`http://127.0.0.1:5000/userData?username=${user}`)
  userData = await pokedexData.json()

  console.log(userData)
}