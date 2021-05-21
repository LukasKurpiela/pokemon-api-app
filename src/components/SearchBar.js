import styled from 'styled-components';

export default function SearchBar({
  allPokemon,
  setFilteredCharacters,
  setView,
}) {
  function searchPokemon(event) {
    const filtered = allPokemon.filter((character) =>
      character.name.includes(event.target.value.toLowerCase())
    );
    setFilteredCharacters(filtered);
    setView('filteredList');
  }
  return (
    <div>
      <PokemonSearch
        type="text"
        placeholder="Search..."
        onChange={searchPokemon}
      />
    </div>
  );
}
const PokemonSearch = styled.input`
  margin: 0 1rem 1rem;
  padding: 0.3rem;
`;
