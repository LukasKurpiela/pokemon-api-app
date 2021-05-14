import styled from 'styled-components/macro';

export default function Navigation() {
  return (
    <ButtonWrapper>
      <button className="navButton">Home</button>
      <button className="navButton">Pokemon</button>
      <button className="navButton">Favorites</button>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  .navButton {
    margin: 0 0.6rem;
  }
`;
