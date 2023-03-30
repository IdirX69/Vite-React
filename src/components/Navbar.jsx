import React from "react";

const Navbar = ({ setPokemonIndex, pokemonIndex, pokemonList }) => {
  return (
    <div>
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

export default Navbar;
