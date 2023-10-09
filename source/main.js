const pokemonList = document.getElementById('pokemonsList');
const btnLoadMore = document.getElementById('btnLoadMore');
const body = document.body;


let offsetV = 0;
let limitV = 5;


function listTypes (pokemon){
  const liPokemons = pokemon.types.map(type => {
    return `<li class="${type}"> 
                  ${type}
    </li>  `
  }).join('');
  return liPokemons;
}

function convertPokemonsToLi(pokemon){
return ` <li class="pokemon${pokemon.type}">    
          <div class="pokemonCardImgConteiner">
              <img class="pokemonCardImg" id="${pokemon.name}Img" src=${pokemon.photo} alt="">            
          </div>
          <div class="pokemonDetails">
            <span class="pokemonCardName">${pokemon.name}</span>
            <ol class="types">
              ${listTypes(pokemon)}
            </ol>
          </div>
          <div class="overlay"></div>
          </li>
        `
}




function loadMore (offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
  const newHtml = pokemons.map(convertPokemonsToLi).join('')
  pokemonList.innerHTML += newHtml
  offsetV += 5;
})}

loadMore(offsetV, limitV);

btnLoadMore.addEventListener('click', () => {
  loadMore(offsetV, limitV)
})



