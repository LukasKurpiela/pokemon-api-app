import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import PokemonContainer from './pages/PokemonContainer';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import Favorites from './pages/Favorites';
import { saveToLocal, loadFromLocal } from './lib/localStorage';

function App() {
  const [allPokemon, setAllPokemon] = useState(
    loadFromLocal('All Pokemon') ?? []
  );
  const [likedPokemon, setLikedPokemon] = useState(
    loadFromLocal('favoritePokemon') ?? []
  );
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [detailedChar, setDetailedChar] = useState({
    name: 'currywurst',
    id: 1,
  });
  //detailedChar braucht IRGENDEINEN Startwert, damit InfoModal IRGENDWAS machen kann. ansonsten ist detailedChar undefined und InfoModal hat keinen Input

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const pokemon = await fetchPokemon();
    const additionalInfoPokemon = await Promise.all(
      pokemon.map(async (pokemon, index) => {
        const type = await getType(pokemon.url);
        const description = await getDescription(index + 1);
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          index + 1
        }.png`;
        return {
          name: pokemon.name,
          isFavorite: false,
          id: index + 1,
          type: type.charAt(0).toUpperCase() + type.slice(1),
          description: description,
          image: image,
        };
      })
    );
    setAllPokemon(additionalInfoPokemon);
  }, []);

  async function fetchPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await response.json();
    return data.results;
  }

  async function getDescription(pokemonId) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
    );
    const data = await response.json();
    return data.flavor_text_entries[0].flavor_text;
  }

  async function getType(pokemonUrl) {
    const response = await fetch(pokemonUrl);
    const data = await response.json();
    return data.types[0].type.name;
  }

  useEffect(() => {
    saveToLocal('All Pokemon', allPokemon);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    saveToLocal('favoritePokemon', likedPokemon);
  }, [likedPokemon]);

  /*   useEffect(() => {
    loadFavoritePokemon(allPokemon, setLikedPokemon);
  }, [allPokemon]); */

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
    loadFavoritePokemon(allPokemon, setLikedPokemon);
  }

  function showCharDetails(character) {
    setModalIsOpen(true);
    setDetailedChar(character);
  }

  function hideModal() {
    setModalIsOpen(false);
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
              modalIsOpen={modalIsOpen}
              detailedChar={detailedChar}
              showCharDetails={showCharDetails}
              hideModal={hideModal}
            />
          </Route>
          <Route path="/favorites">
            <Favorites
              likedPokemon={likedPokemon}
              toggleFavorite={toggleFavorite}
              modalIsOpen={modalIsOpen}
              detailedChar={detailedChar}
              showCharDetails={showCharDetails}
              hideModal={hideModal}
            />
          </Route>
        </Switch>
      </MainContainer>
      <Footer>© 2021 Bejan, Helena, Lukas, Sharine</Footer>
    </div>
  );
}

export default App;

const Headline = styled.h1`
  text-align: center;
  color: yellow;
  padding: 1.5rem;
  text-shadow: 0 0 0.7rem #00f, 0 0 0.7rem #00f;
  line-height: 1.4;
`;

const MainContainer = styled.div`
  text-align: center;
  margin: 0;
`;

const Footer = styled.footer`
  font-size: 0.6rem;
  margin-bottom: 0.5rem;
  margin-left: 0.3rem;
`;
