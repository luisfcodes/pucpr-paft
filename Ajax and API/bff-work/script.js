async function handleSubmit(event){
  event.preventDefault()

  document.querySelector('#loader').classList.remove('hidden')
  document.querySelector('#span-button-search').classList.add('hidden')
  
  const user = document.querySelector('#username').value
  const divGithubElement = document.querySelector('#div-user-github')
  const spanGithubElement = document.querySelector('#span-user-github')
  const divPokedexElement = document.querySelector('#div-pokedex')
  const spanPokedexElement = document.querySelector('#span-pokedex')
  const divRickAndMortyElement = document.querySelector('#div-rickAndMorty')
  const spanRickAndMortyElement = document.querySelector('#span-rickAndMorty')

  try {
    let userData = await fetch(`http://127.0.0.1:5000/user?username=${user}`)
    userData = await userData.json()

    if(userData.message !== "Not Found"){
      divGithubElement.classList.add('success')
      spanGithubElement.textContent = "Usuário encontrado com sucesso!!!"
      divGithubElement.classList.remove('hidden', 'warning')

      setTimeout(async () => {
        try {
          let loadData = await fetch(`http://127.0.0.1:5000/userData`)
          loadData = await loadData.json()
      
          const pokedexData = loadData.pokedex
          const rickAndMortyData = loadData.rickAndMorty
      
          if(pokedexData.results.length){
            divPokedexElement.classList.add('success')
            spanPokedexElement.textContent = "Pokedex carregada com sucesso!!!"
            divPokedexElement.classList.remove('hidden', 'warning')
          } else {
            spanPokedexElement.textContent = "Falha ao carregar Pokedex!!!"
            divPokedexElement.classList.add('warning')
            divPokedexElement.classList.remove('hidden', 'success')
  
            throw new Error
          }
      
          setTimeout(() => {
            if(rickAndMortyData.results.length){
              divRickAndMortyElement.classList.add('success')
              spanRickAndMortyElement.textContent = "Série favorita carregada com sucesso!!!"
              divRickAndMortyElement.classList.remove('hidden', 'warning')
            } else {
              spanRickAndMortyElement.textContent = "Falha ao carregar Pokedex!!!"
              divRickAndMortyElement.classList.add('warning')
              divRickAndMortyElement.classList.remove('hidden', 'success')
    
              throw new Error
            }
          }, 1000)

          setTimeout(() => {
            window.location.href = `http://127.0.0.1:5000/user.html?username=${user}`
          }, 500)
        } catch (err){
          console.log(err)
        }
      }, 1000)
    } else {
      spanGithubElement.textContent = "Usuário não encontrado!!!"
      divGithubElement.classList.add('warning')
      divGithubElement.classList.remove('hidden', 'success')
      throw new Error
    }
  } catch (err){
    document.querySelector('#loader').classList.add('hidden')
    document.querySelector('#span-button-search').classList.remove('hidden')
    console.log(err)
  }
}