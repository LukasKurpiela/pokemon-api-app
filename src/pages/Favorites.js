import styled from 'styled-components';
import PropTypes, { object } from 'prop-types';
import PokeCard from '../components/PokeCard';
import InfoModal from '../components/InfoModal';

export default function Favorites({
  likedPokemon,
  toggleFavorite,
  modalIsOpen,
  detailedChar,
  showCharDetails,
  hideModal,
}) {
  return (
    <>
      <InfoModal
        modalIsOpen={modalIsOpen}
        hideModal={hideModal}
        character={detailedChar}
      />
      <CardWrapper>
        {likedPokemon.map((pokemon) => (
          <PokeCard
            character={pokemon}
            onToggle={toggleFavorite}
            showDetails={showCharDetails}
          />
        ))}
      </CardWrapper>
    </>
  );
}

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin: 0 1rem;
  padding-bottom: 1rem;
`;

Favorites.propTypes = {
  likedPokemon: PropTypes.arrayOf(object),
  toggleFavorite: PropTypes.func,
  modalIsOpen: PropTypes.bool,
  detailedChar: PropTypes.object,
  showCharDetails: PropTypes.func,
  hideModal: PropTypes.func,
};
