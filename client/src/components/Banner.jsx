import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

Banner.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Banner;
