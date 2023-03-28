import React from "react";
import PropTypes from "prop-types";

const PokemonCard = ({ pokemonList }) => {
  let pokemon = pokemonList[0];
  if (Math.random() > 0.5) {
    pokemon = pokemonList[1];
  }
  PokemonCard.propTypes = {
    pokemonList: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
    }).isRequired,
  };

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
