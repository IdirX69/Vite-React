import React from "react";
import PropTypes from "prop-types";

const PokemonCard = ({ pokemonList, pokemonIndex, setPokemonIndex }) => {
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
      {pokemonIndex !== 0 ? (
        <button onClick={() => setPokemonIndex(pokemonIndex - 1)}>
          Precedent
        </button>
      ) : null}

      {pokemonList.length - 1 !== pokemonIndex ? (
        <button onClick={() => setPokemonIndex(pokemonIndex + 1)}>
          Suivant
        </button>
      ) : null}
    </div>
  );
};

export default PokemonCard;
