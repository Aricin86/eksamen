import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Menu from '../components/Menu';

const StyledMain = styled.main`
  margin: 0 auto;
`;

const StyledHeader = styled.header`
  background: white;
  margin: 0 0 5px 0;
  width: 100%;
`;

const MainLayout = ({ children }) => (
  <>
    <StyledHeader>
      <Menu />
    </StyledHeader>
    <StyledMain>{children}</StyledMain>
  </>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
