const pokemonImageElement = document.querySelector('#pokedex-pokemon-image')
const pokemonNameElement = document.querySelector('#pokedex-pokemon-name')
const pokemonDescriptionElement = document.querySelector('#pokedex-description')
const arrowLeftElement = document.querySelector("#arrow-left");
const arrowRightElement = document.querySelector("#arrow-right");

let indexPokemon = 0;

function loadPokemon(){
    const pokemonList = JSON.parse(this.responseText).results
    qualquercoisa = pokemonList;
    getPokemon(pokemonList[indexPokemon].url).addEventListener("load", function (){
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
  }


 getPokemons().addEventListener("load", loadPokemon );

function showPokedex(){

  document.querySelector('#home-page').innerHTML = `
    <div class="loading">
      <img src="./assets/loading.gif" alt="Loading de carregamento">
    </div>
  `

  setTimeout(() => {
    document.querySelector('#home-page').classList.add('disabled')
    document.querySelector('#pokedex').classList.remove('disabled')
  },2000)
}


arrowLeftElement.onclick = function(){
  handleIndexPokedex(0)
}

arrowRightElement.onclick = function(){
  handleIndexPokedex(1);
}



function handleIndexPokedex(direction){
    if(direction==0){
      if(indexPokemon>0){
        indexPokemon--;
        getPokemons().addEventListener("load", loadPokemon );

      }
    }
    if(direction==1){
      if(indexPokemon<150){
        indexPokemon++;
        getPokemons().addEventListener("load", loadPokemon );

      }
    }


}