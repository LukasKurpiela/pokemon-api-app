import React, { useEffect, useState } from 'react';
import PokemonContainer from './PokemonContainer';
import Favorite from './Favorite';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((result) => result.json())
      .then((data) => setPokemon(data.results));
  }, []);

  return (
    <div>
      <nav>
        <ul></ul>
      </nav>
      <h1>Pokemon World</h1>
      <PokemonContainer characters={pokemon} />
    </div>
  );
}

export default App;
