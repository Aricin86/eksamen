import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Background from '../images/2451354.jpg';

const BackgroundImage = styled.img`
  width: 100%;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;

const NoMatch = () => (
  <>
    <a href="/">
      <BackgroundImage
        src={Background}
        alt="Bilde som viser at denne siden ikke finnes"
      />
    </a>
    <a href="https://www.freepik.com/vectors/business">
      Business vector created by pikisuperstar - www.freepik.com
    </a>
  </>
);

export default NoMatch;
