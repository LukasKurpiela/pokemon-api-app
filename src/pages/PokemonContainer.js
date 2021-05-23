import { useState } from 'react';
import PropTypes from 'prop-types';
import { CardWrapper } from '../pages/Favorites';
import PokeCard from '../components/PokeCard';
import SearchBar from '../components/SearchBar';
import InfoModal from '../components/InfoModal';

export default function PokemonContainer({
  allPokemon,
  toggleFavorite,
  modalIsOpen,
  detailedChar,
  showCharDetails,
  hideModal,
}) {
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [view, setView] = useState('all');

  function drawList(charArr) {
    return (
      <CardWrapper>
        {charArr.map((pokemon) => (
          <PokeCard
            character={pokemon}
            onToggle={toggleFavorite}
            showDetails={showCharDetails}
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
      <InfoModal
        modalIsOpen={modalIsOpen}
        hideModal={hideModal}
        character={detailedChar}
      />
      {listOnView()}
    </div>
  );
}

PokemonContainer.propTypes = {
  allPokemon: PropTypes.arrayOf(PropTypes.object),
  toggleFavorite: PropTypes.func,
  modalIsOpen: PropTypes.bool,
  detailedChar: PropTypes.object,
  showCharDetails: PropTypes.func,
  hideModal: PropTypes.func,
};
