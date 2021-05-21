import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import PokemonContainer from './pages/PokemonContainer';
import PokeCard from './components/PokeCard';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import Favorites from './pages/Favorites';

function App() {
  const [allPokemon, setAllPokemon] = useState([]);
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

  return (
    <div>
      <Headline>Pokemon World</Headline>
      <Navigation />
      <MainContainer>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/pokemon">
            <PokemonContainer
              allPokemon={allPokemon}
              toggleFavorite={toggleFavorite}
            />
          </Route>
          <Route path="/favorites">
            <Favorites
              likedPokemon={likedPokemon}
              toggleFavorite={toggleFavorite}
            />
          </Route>
        </Switch>
      </MainContainer>
    </div>
  );
}

export default App;

const Headline = styled.h1`
  text-align: center;
  color: yellow;
  padding: 1.5rem;
  text-shadow: 0 0 0.7rem #00f, 0 0 0.7rem #00f;
`;

const MainContainer = styled.div`
  text-align: center;
  margin: 0;
`;
