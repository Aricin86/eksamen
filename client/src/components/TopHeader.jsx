import React from 'react';
import styled from 'styled-components';

const Banner = styled.header`
  grid-row: 1;
  grid-column: 1 / 4;
  color: white;
  background-color: lightgray;
  height: 400px;
`;

const TopHeader = () => <Banner />;

export default TopHeader;
