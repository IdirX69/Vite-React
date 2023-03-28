import React from "react";

const PokemonCard = ({ pokemonList }) => {
  let pokemon = pokemonList[0];
  if (Math.random() > 0.5) {
    pokemon = pokemonList[1];
  }

  return (
    <div>
      <figure>
        {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>???</p>
        )}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </div>
  );
};

export default PokemonCard;
