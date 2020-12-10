import React from 'react';
import Background from '../images/3819740.jpg';
import { BackgroundImage } from '../styled/Styled';

// BILDE HENTET FRA FREEPIK.COM
const NoMatch = () => (
  <>
    <a href="/">
      <BackgroundImage
        src={Background}
        alt="Bilde som viser at denne siden ikke finnes"
      />
    </a>
    <a href="https://www.freepik.com/vectors/web">
      Web vector created by stories - www.freepik.com
    </a>
  </>
);

export default NoMatch;
