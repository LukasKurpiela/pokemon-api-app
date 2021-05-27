import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
  font-family: 'Press Start 2P';
  background-color: #f6eec5;
}

body, h1, h2, h3, h4, h5, h6, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}
`;
