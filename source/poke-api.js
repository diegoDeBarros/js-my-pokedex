const pokeApi = {};

//converting api object fields to simple model class pokemon fields
function convertToPokemonModel(pokemonDetailed){
    const pokemon = new Pokemon()

    pokemon.name = pokemonDetailed.name;
    pokemon.number = pokemonDetailed.order;
    pokemon.photo = pokemonDetailed.sprites.other.dream_world.front_default;
    pokemon.types = pokemonDetailed.types.map(typeSlot => typeSlot.type.name)
    pokemon.type = pokemonDetailed.types.map(typeSlot => typeSlot.type.name)[0];
    return pokemon;
}

pokeApi.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
                             .then((responseJson) => convertToPokemonModel(responseJson))
}

pokeApi.getPokemons = (offset, limit) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetails))             
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => {console.log (pokemonsDetails); return pokemonsDetails})


}



