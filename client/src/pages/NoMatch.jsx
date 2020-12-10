import React from 'react';
import Background from '../images/2451354.jpg';
import { BackgroundImage } from '../styled/Styled';

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
