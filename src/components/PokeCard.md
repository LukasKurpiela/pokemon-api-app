## Description

Bulbasaur rocks.

```jsx
import { useState } from 'react';

const [character, setCharacter] = useState({
  name: 'bulbasaur',
  url: 'https://pokeapi.co/api/v2/pokemon/1/',
  id: 1,
  isFavorite: false,
  image:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
});

<PokeCard
  character={character}
  onToggle={() =>
    setCharacter({ ...character, isFavorite: !character.isFavorite })
  }
  showDetails={() => alert('Show me more details!')}
/>;
```
