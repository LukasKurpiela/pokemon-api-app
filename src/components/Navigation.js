import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <ButtonWrapper>
      <NavLink exact to="/" className="navButton">
        Home
      </NavLink>
      <NavLink to="/pokemon" className="navButton">
        Pokemon
      </NavLink>
      <NavLink to="/favorites" className="navButton">
        Favorites
      </NavLink>
    </ButtonWrapper>
  );
}

Navigation.propTypes = {
  onChangeToPage: PropTypes.func,
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;

  .navButton {
    background-color: lightgrey;
    margin: 0 0.6rem;
    padding: 0.4rem;
    color: black;
    text-decoration: none;
  }
`;
