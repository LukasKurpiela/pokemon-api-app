export default function PokemonContainer({ characters }) {
  function getPictures(index) {
    const link = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      index + 1
    }.png`;
    return link;
  }

  return (
    <div>
      {characters.map((character, index) => (
        <article>
          <h2>
            #{index + 1 + ' '}
            {character.name.charAt(0).toUpperCase() + character.name.slice(1)}
          </h2>
          <img src={getPictures(index)} />
          <button>😍 I liiiike! 😍</button>
        </article>
      ))}
    </div>
  );
}
