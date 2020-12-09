import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    max-width: 1400px;
    }
  html {
    background-color: #F5F4F5;
    margin: 0 auto;
    font-family: 'Roboto', 'Helvetica', sans-serif;
    /* height: 100vh; */
  }
  main {
    background-color: white;
    min-height: 100vh;
  }
  body {
    h1 {
      font-size: 3.2rem;
      text-align: center;
      padding: 160px;
      margin: 0;
    }
    h2 {
      font-size: 2.8rem;
    }
    h3 {
      font-size: 2.4rem;
    }
    h4 {
      font-size: 2rem;
    }
    h5 {
      font-size: 1.6rem;
    }
    h6 {
      font-size: 1.3rem;
      margin: 5px 0;
    }
  }
  ${normalize}
`;
