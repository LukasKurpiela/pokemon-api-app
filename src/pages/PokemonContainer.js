import { useState } from 'react';
import PropTypes from 'prop-types';
import { CardWrapper } from '../pages/Favorites';
import PokeCard from '../components/PokeCard';
import SearchBar from '../components/SearchBar';

export default function PokemonContainer({ allPokemon, toggleFavorite }) {
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [view, setView] = useState('all');

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
    return view === 'all' ? drawList(allPokemon) : drawList(filteredCharacters);
  }

  return (
    <div>
      <SearchBar
        allPokemon={allPokemon}
        setFilteredCharacters={setFilteredCharacters}
        setView={setView}
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
