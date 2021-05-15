import styled from 'styled-components/macro';

/* useEffect(() => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((result) => result.json())
    .then((data) => data);
}, []);
 */

export default function Info() {
  return (
    <div>
      <p>Type: </p>
      <p>Description: </p>
    </div>
  );
}
