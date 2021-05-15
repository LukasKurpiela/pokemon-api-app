import styled from 'styled-components/macro';

export default function Navigation({ onChangeToPage }) {
  return (
    <ButtonWrapper>
      <button className="navButton" onClick={() => onChangeToPage('Home')}>
        Home
      </button>
      <button
        className="navButton"
        onClick={() => onChangeToPage('PokemonContainer')}
      >
        Pokemon
      </button>
      <button className="navButton" onClick={() => onChangeToPage('Favorite')}>
        Favorites
      </button>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  .navButton {
    background-color: lightgrey;
    margin: 0 0.6rem;
    padding: 0.4rem;
  }
`;
