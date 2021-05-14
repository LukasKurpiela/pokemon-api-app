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
        <h2>Welcome!</h2>
        <PikachuImage src={Pikachu} alt="Flying Pikachu with Ballons" />
        <EichImage src={Eich} alt="Pic of Prof. Eich" />
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
  padding: 0.3rem;
`;

const PikachuImage = styled.img`
  top: 16rem;
  left: 5rem;
  position: absolute;
  width: 7rem;
  z-index: 10;
`;

const EichImage = styled.img`
  position: relative;
`;
