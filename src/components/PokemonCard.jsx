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
      <button
        onClick={() =>
          pokemonIndex === 0
            ? setPokemonIndex(pokemonIndex)
            : setPokemonIndex(pokemonIndex - 1)
        }
      >
        Precedent
      </button>
      <button
        onClick={() =>
          pokemonList.length - 1 !== pokemonIndex
            ? setPokemonIndex(pokemonIndex + 1)
            : setPokemonIndex(0)
        }
      >
        Suivant
      </button>
    </div>
  );
};

export default PokemonCard;
