```jsx
<PokeCard
  character={{
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
    id: 1,
    isFavorite: false,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  }}
  onToggle={(character[isFavorite]) => true}
/>
```
