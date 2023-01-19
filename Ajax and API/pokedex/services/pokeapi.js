function getPokemons() {
  const req = new XMLHttpRequest();
  req.open("GET", "https://pokeapi.co/api/v2/pokemon");
  req.send();
  return req
}

function getPokemon(url) {
  const req = new XMLHttpRequest();
  req.open("GET", url);
  req.send();
  return req
}