function getPokemons() {
  const request = axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
    .then(res => res.data.results)
    .catch(err => console.log(err))
  return request
}

function getPokemon(url) {
  const request = axios.get(url)
    .then(res => res.data)
    .catch(err => console.log(err))
  return request
}

axios.interceptors.request.use(function (config) {
  document.querySelector('#home-page').innerHTML = `
    <div class="loading">
      <img src="./assets/loading.gif" alt="Loading de carregamento">
    </div>
  `
  return config;
}, function (error) {
  return Promise.reject(error);
});