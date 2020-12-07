import React from 'react';
import styled from 'styled-components';

const BannerStyle = styled.header`
  grid-row: 1;
  grid-column: 1 / 4;
  color: ${({ theme: { colors } }) => colors.title};
  background-color: ${({ theme: { colors } }) => colors.background};
  height: 400px;
  & > h1 {
    padding: 160px;
  }
`;

const Banner = ({ children }) => <BannerStyle>{children}</BannerStyle>;

export default Banner;
