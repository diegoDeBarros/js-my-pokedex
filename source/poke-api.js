const pokeApi = {}


pokeApi.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/';

    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetails))             
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => {console.log (pokemonsDetails); return pokemonsDetails})
}


