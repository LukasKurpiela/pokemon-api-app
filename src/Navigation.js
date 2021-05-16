import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

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

Navigation.propTypes = {
  onChangeToPage: PropTypes.func,
};

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
