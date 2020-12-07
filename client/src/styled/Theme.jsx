import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Global';

// export const theme = {
//   primaryDark: '#0D0C1D',
//   primaryLight: '#EFFFFA',
//   primaryHover: '#343078',
//   mobile: '576px',
// };

const theme = {
  // body: '#FFF',
  // text: '#333',
  // background: '#999',
  colors: {
    title: '#1c1c21',
    background: '#d3d3d3',
    default: '#479eb9',
    warning: '#ff6347',
    info: '#167df6',
    success: '#5cb85c',
    // primaryDark: '#0D0C1D',
    // primaryLight: '#EFFFFA',
    // primaryHover: '#343078',
  },
  breakpoints: {
    sm: '(max-width: 420px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 1300px)',
  },
};

const Theme = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default Theme;
