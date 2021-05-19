import styled from 'styled-components/macro';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { CardWrapper } from './App';
import PokeCard from './PokeCard';

export default function PokemonContainer({ allPokemon, toggleFavorite }) {
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [view, setView] = useState('all');

  function searchPokemon(event) {
    const filtered = allPokemon.filter((character) =>
      character.name.includes(event.target.value)
    );
    setFilteredCharacters(filtered);
    setView('filteredList');
  }

  function drawList(charArr) {
    return (
      <CardWrapper>
        {charArr.map((pokemon) => (
          <PokeCard
            character={pokemon}
            onToggle={toggleFavorite}
            //toggleModal={toggleModal}
          />
        ))}
      </CardWrapper>
    );
  }

  function listOnView() {
    if (view === 'all') {
      return drawList(allPokemon);
    } else {
      return drawList(filteredCharacters);
    }
  }

  return (
    <div>
      <PokemonSearch
        type="text"
        placeholder="Search..."
        onChange={searchPokemon}
      />
      {listOnView('all')}
    </div>
  );
}

PokemonContainer.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
  onToggle: PropTypes.func,
  loadInfo: PropTypes.func,
};

const PokemonSearch = styled.input`
  margin: 0 1rem 1rem;
  padding: 0.3rem;
`;
