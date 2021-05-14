import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import PokemonContainer from './PokemonContainer';
import Favorite from './Favorite';
import Navigation from './Navigation';
import Home from './Home';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((result) => result.json())
      .then((data) => setPokemon(data.results));
  }, []);

  return (
    <MainContainer>
      <Headline>Pokemon World</Headline>
      <Navigation />
      <Home />
      <PokemonContainer characters={pokemon} />
    </MainContainer>
  );
}

export default App;

const Headline = styled.h1`
  text-shadow: 0 0 0.7rem #00f, 0 0 0.7rem #00f;
  color: yellow;
`;

const MainContainer = styled.div`
  text-align: center;
`;
