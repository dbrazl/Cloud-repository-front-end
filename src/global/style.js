import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import 'react-circular-progressbar/dist/styles.css';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    background: #f0f0f0;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    color: #000;

    &:visited {
      color: #000;
    }
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
