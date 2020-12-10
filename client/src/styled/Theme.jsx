import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { GlobalStyles } from './Global';

const theme = {
  colors: {
    title: '#1c1c21',
    background: '#F0F7F9',
    default: '#479eb9',
  },
};

const Theme = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
