function convertPokemonsToLi(pokemon){
return `<li class="pokemonCardLi">    
                <div class="cardImgConteiner">
                    <img class="pokemonCardImg" src=${pokemon.sprites.other.dream_world.front_default} alt="">            
                </div>
                <span class="pokemonCardName">${pokemon.name}</span>
                <span class="pokemonCardNumber">#${pokemon.order}</span>
            </li>`
}

const pokemonList = document.getElementById('pokemonsList');

pokeApi.getPokemons().then((pokemons = []) => {
  
  const newHtml = pokemons.map(convertPokemonsToLi).join('')
  // console.log(newHtml)
  pokemonList.innerHTML += newHtml
})

