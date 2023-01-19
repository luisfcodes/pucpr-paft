const pokemonImageElement = document.querySelector('#pokedex-pokemon-image')
const pokemonNameElement = document.querySelector('#pokedex-pokemon-name')
const pokemonDescriptionElement = document.querySelector('#pokedex-description')

getPokemons().addEventListener("load", function (){
  const pokemonList = JSON.parse(this.responseText).results

  getPokemon(pokemonList[0].url).addEventListener("load", function (){
    const pokemon = JSON.parse(this.responseText)
    
    pokemonImageElement.setAttribute('src', pokemon.sprites.other.dream_world.front_default)
  
    pokemonDescriptionElement.innerHTML = `
      <h2 id="pokedex-pokemon-name" class="pokedex-pokemon-name">${pokemon.name}</h2>
      <section>
        <ul>
          <li>
            <div>
              <img src="./assets/damage.png" alt="Ícone de explosão">
              <span>Força</span>
            </div>
            <span>${pokemon.stats[0].base_stat}</span>
          </li>
          <li>
            <div>
              <img src="./assets/attack.png" alt="Ícone de uma espada">
              <span>Ataque</span>
            </div>
            <span>${pokemon.stats[1].base_stat}</span>
          </li>
          <li>
            <div>
              <img src="./assets/shield.png" alt="Ícone de um escudo">
              <span>Defesa</span>
            </div>
            <span>${pokemon.stats[2].base_stat}</span>
          </li>
          <li>
            <div>
              <img src="./assets/specialAttack.png" alt="Ícone de bombas">
              <span>Ataque Especial</span>
            </div>
            <span>${pokemon.stats[3].base_stat}</span>
          </li>
          <li>
            <div>
              <img src="./assets/specialDefense.png" alt="Ícone de escudo com bomba">
              <span>Defesa Especial</span>
            </div>
            <span>${pokemon.stats[4].base_stat}</span>
          </li>
          <li>
            <div>
              <img src="./assets/speed.png" alt="Ícone de coelho correndo">
              <span>Velocidade</span>
            </div>
            <span>${pokemon.stats[5].base_stat}</span>
          </li>
        </ul>
      </section>
    `
  })
});