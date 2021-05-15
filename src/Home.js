import styled from 'styled-components/macro';
import Eich from './image/eich.png';
import Kanto from './image/kanto.jpg';
import Johto from './image/johto.jpg';
import Hoenn from './image/hoenn.png';
import Sinnoh from './image/sinnoh.png';
import Pikachu from './image/pikachu.gif';

export default function Home() {
  return (
    <section>
      <article>
        <H2>Welcome!</H2>
        <EichWrapper>
          <PikachuImage src={Pikachu} alt="Flying Pikachu with Ballons" />
          <EichImage src={Eich} alt="Pic of Prof. Eich"></EichImage>
        </EichWrapper>
        <IntroText>
          Hello there! Welcome to the world of pokémon! My name is Prof. Eich!
          People call me the pokémon Prof! This world is inhabited by creatures
          called pokémon! For some people, pokémon are pets. Others use them for
          fights. Myself...I study pokémon as a profession.
        </IntroText>
      </article>

      <MapImageWrapper>
        <MapImage src={Kanto} alt="Kanto Map" />
        <MapImageOpacity src={Johto} alt="Johto Map" />
        <MapImageOpacity src={Hoenn} alt="Hoenn Map" />
        <MapImageOpacity src={Sinnoh} alt="Sinnoh Map" />
      </MapImageWrapper>
    </section>
  );
}

const MapImage = styled.img`
  border: 2px black solid;
  border-radius: 10px;
  box-shadow: 3px 5px 5px grey;
  width: 15rem;
`;

const MapImageOpacity = styled(MapImage)`
  opacity: 0.3;
`;

const MapImageWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 0 2rem;
  margin-top: 3rem;
  padding-bottom: 2rem;
`;

const PikachuImage = styled.img`
  top: 90px;
  left: 50%;
  position: absolute;
  margin-left: -110px;
  width: 7rem;
  z-index: 10;
`;

const EichImage = styled.img`
  left: 50%;
  margin-left: -170px;
  top: 50%;
  position: absolute;
`;

const H2 = styled.h2`
  margin-bottom: 1rem;
`;

const EichWrapper = styled.div`
  position: relative;
`;

const IntroText = styled.p`
  margin-top: 30rem;
  padding: 0 3rem;
`;
