import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import PokemonContainer from './PokemonContainer';
import Navigation from './Navigation';
import Home from './Home';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [activePage, setActivePage] = useState('Home');
  const [likedPokemon, setLikedPokemon] = useState([]);
  const [typeInfo, setTypeInfo] = useState([]);

  /* const Home = () => <h1>Home</h1>; */

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((result) => result.json())
      .then((data) =>
        setPokemon(
          data.results.map((item, index) => {
            item.isFavorite = false;
            item.id = index + 1;
            return item;
          })
        )
      );
  }, []);

  function fetchTypeInfo(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then((result) => result.json())
      .then((data) => setTypeInfo(data.flavor_text_entries[0].flavor_text));
  }

  //Dafür da
  useEffect(() => {
    loadFavoritePokemon(pokemon, setLikedPokemon);
  }, [pokemon]);

  // function ( curryWurst und Super curryWurst)
  function loadFavoritePokemon(characters, setFavoriteCharacters) {
    const selectedPokemon = characters.filter(
      (curryCharacter) => curryCharacter.isFavorite
    );
    setFavoriteCharacters(selectedPokemon);
  }

  function toggleFavorite(itemToToggle) {
    const updatedPokemonList = pokemon.map((curryPokemon) => {
      if (curryPokemon.id === itemToToggle.id) {
        curryPokemon.isFavorite = !curryPokemon.isFavorite;
      }
      return curryPokemon;
    });
    setPokemon(updatedPokemonList);
  }

  function drawComponent() {
    switch (activePage) {
      case 'Home':
        return <Home />;
      case 'PokemonContainer':
        return (
          <PokemonContainer
            characters={pokemon}
            onToggle={toggleFavorite}
            loadInfo={fetchTypeInfo}
            changePage={setActivePage}
          />
        );
      case 'Favorite':
        return (
          <PokemonContainer
            characters={likedPokemon}
            onToggle={toggleFavorite}
            loadInfo={fetchTypeInfo}
            changePage={setActivePage}
          />
        );

      default:
        return <Home />;
    }
  }

  return (
    <MainContainer>
      <Headline>Pokemon World</Headline>
      <Navigation onChangeToPage={setActivePage} />
      <section>{drawComponent()}</section>
    </MainContainer>
  );
}

export default App;

const Headline = styled.h1`
  color: yellow;
  padding: 1.5rem;
  text-shadow: 0 0 0.7rem #00f, 0 0 0.7rem #00f;
`;

const MainContainer = styled.div`
  text-align: center;
  background-color: #f6eec5;
  margin: 0;
`;
