//url pokemons request
const url = 'https://pokeapi.co/api/v2/pokemon/';
//html element of the Ol pokemon list
const pokemonList = document.getElementById('pokemonsOlList');


//--convert pokemon JSON list to html -------------
function createPokemonOlList (pokemonsJson){
  
  //detalhar pokemon
  async function detailPokemon(pokemon){
    const response = await fetch(pokemon.url)
    .then(response => response.json())
    .then(response => {console.log(response); return response;});
    return response;
  }


  // --- ... continuar essa função e a de detail pokemon ?
  const stringReturn = pokemonsJson.results.map(function(listedPokemon){


    const detailedPokemon = detailPokemon(listedPokemon);

    return `<li class="pokemonCardLi">    
    <div class="cardImgConteiner">
    <img class="pokemonCardImg" src='' alt="${listedPokemon.name}">            
    </div>
    <span class="pokemonCardName">${listedPokemon.name}</span>
    <span class="pokemonCardNumber">${detailedPokemon.weight}</span>
    </li>
    `;
      }
    );
 
    return stringReturn.join('');
  }










//fetching the api pokemons list endpoint and adding li's to the html for each pokemon
fetch(url)
  .then(response => response.json())
  .then(responseJson => {console.log(responseJson); return responseJson;})
  .then(pokemonsJson =>  createPokemonOlList(pokemonsJson))
  .then(pokemonHtmlList => pokemonList.innerHTML += pokemonHtmlList);










  
