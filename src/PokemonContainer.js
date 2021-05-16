import styled from 'styled-components/macro';
import Pokedex from './image/pokedex.png';

export default function PokemonContainer({ characters, onToggle, loadInfo }) {
  function getPictures(curryId) {
    const link = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${curryId}.png`;
    return link;
  }

  return (
    <CardWrapper>
      {characters.map((character, index) => (
        <Card>
          <h2>
            #{index + 1 + ' '}
            {character.name.charAt(0).toUpperCase() + character.name.slice(1)}
          </h2>
          <PokeImage src={getPictures(character.id)} />
          <LikeButton onClick={() => onToggle(character)}>
            {character.isFavorite ? 'Free again 🥲' : 'I like!😍'}
          </LikeButton>
          {/* <InfoButton onClick={() => showModal()}>i</InfoButton> */}
        </Card>
      ))}
    </CardWrapper>
  );
}

{
  /* <PokedexImage src={Pokedex} alt="Image of Pokedex" /> */
}

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 1rem;
  gap: 2rem;
`;

const Card = styled.article`
  background-image: linear-gradient(to bottom right, #ffe259, #ffa751);
  align-items: center;
  border: 2px solid black;
  border-radius: 1rem;
  box-shadow: 3px 5px 5px grey;
  display: flex;
  flex-direction: column;
  height: 14rem;
  justify-content: center;
  padding: 1rem;
  position: relative;
  width: 20rem;
`;

const LikeButton = styled.button`
  background-color: lightgrey;
  height: 2rem;
  padding-top: 0.3rem;
`;

const InfoButton = styled.button`
  background-color: lightgrey;
  border: lightgrey solid 1px;
  border-radius: 50%;
  box-shadow: 2px 2px 3px grey;
  height: 1.5rem;

  padding: 0 0.3rem;
  bottom: 0.5rem;
  cursor: pointer;
  position: absolute;
  right: 0.4rem;
`;

const PokeImage = styled.img`
  transition: transform 0.4s ease-out;
  &:hover {
    transform: scale(1.5);
  }
`;

const PokedexImage = styled.img`
  bottom: 0.5rem;
  border-radius: 0.6rem;
  box-shadow: 3px 5px 5px grey;
  background: lightgrey;
  cursor: pointer;
  padding: 0.3rem 0;
  position: absolute;
  right: 0.4rem;
  width: 2.2rem;
`;
