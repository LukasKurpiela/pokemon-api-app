```jsx
import { useState } from 'react';

const [showModal, setShowModal] = useState(false);

<>
  <button onClick={() => setShowModal(!showModal)}>
    Show the only one and best Modal ever build!
  </button>

  <InfoModal
    modalIsOpen={showModal}
    character={{
      name: 'Bulbasaur',
      id: 1,
      type: 'Grass',
      description:
        'A strange seed was planted on its back at birth.The plant sprouts and grows with this POKéMON.',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1',
    }}
    hideModal={() => setShowModal(!showModal)}
  />
</>;
```
