import React from "react";
import PropTypes from "prop-types";

const PokemonCard = ({ pokemonList, pokemonIndex }) => {
  let pokemon = pokemonList[pokemonIndex];

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
