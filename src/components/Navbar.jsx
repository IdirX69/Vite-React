import React from "react";

const Navbar = ({ pokemonList, setPokemonIndex }) => {
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => setPokemonIndex(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
