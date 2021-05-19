import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import PokemonContainer from './PokemonContainer';
import PokeCard from './PokeCard';
import Navigation from './Navigation';
import Home from './Home';

function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [activePage, setActivePage] = useState('Home');
  const [likedPokemon, setLikedPokemon] = useState([]);
  //const [typeInfo, setTypeInfo] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((result) => result.json())
      .then((data) =>
        setAllPokemon(
          data.results.map((item, index) => {
            item.isFavorite = false;
            item.id = index + 1;
            return item;
          })
        )
      );
  }, []);

  /*   function fetchTypeInfo(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then((result) => result.json())
      .then((data) => setTypeInfo(data.flavor_text_entries[0].flavor_text));
  } */

  useEffect(() => {
    loadFavoritePokemon(allPokemon, setLikedPokemon);
  }, [allPokemon]);

  // function ( curryWurst und Super curryWurst)
  function loadFavoritePokemon(characters, setFavoriteCharacters) {
    const selectedPokemon = characters.filter(
      (curryCharacter) => curryCharacter.isFavorite
    );
    setFavoriteCharacters(selectedPokemon);
  }

  function toggleFavorite(itemToToggle) {
    const updatedPokemonList = allPokemon.map((curryPokemon) => {
      if (curryPokemon.id === itemToToggle.id) {
        curryPokemon.isFavorite = !curryPokemon.isFavorite;
      }
      return curryPokemon;
    });
    setAllPokemon(updatedPokemonList);
  }

  function toggleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  function drawComponent() {
    switch (activePage) {
      case 'Home':
        return <Home />;
      case 'PokemonContainer':
        return (
          <PokemonContainer
            allPokemon={allPokemon}
            toggleFavorite={toggleFavorite}
          />
        );
      case 'Favorite':
        return (
          <CardWrapper>
            {likedPokemon.map((pokemon) => (
              <PokeCard
                character={pokemon}
                onToggle={toggleFavorite}
                toggleModal={toggleModal}
              />
            ))}
          </CardWrapper>
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
  margin: 0;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin: 0 1rem;
  padding-bottom: 1rem;
`;
