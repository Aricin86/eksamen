import React from 'react';
import styled from 'styled-components';

const Banner = styled.header`
  grid-row: 1;
  grid-column: 1 / 4;
  color: #1c1c21;
  background-color: lightgray;
  height: 400px;

  h1 {
    text-align: center;
    padding: 160px;
    margin: 0;
    font-size: 36px;
  }
`;

// Alle disse skal fylles med data fra DB
const ArticleDetailedView = () => (
  <>
    <Banner>
      <h1>Tittel</h1>
    </Banner>
    <p>Av forfatter</p>
    <p>Dato</p>
    <p>Ingress</p>
    <h2>Undertittel</h2>
    <p>Innholdstekst</p>
    <button type="button">SLETT</button>
    <button type="button">REDIGER</button>
  </>
);

export default ArticleDetailedView;
