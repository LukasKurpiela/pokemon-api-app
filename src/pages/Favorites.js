import PokeCard from '../components/PokeCard';
import styled from 'styled-components';

export default function Favorites({ likedPokemon, toggleFavorite }) {
  return (
    <CardWrapper>
      {likedPokemon.map((pokemon) => (
        <PokeCard
          character={pokemon}
          onToggle={toggleFavorite}
          //   toggleModal={toggleModal}
        />
      ))}
    </CardWrapper>
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
