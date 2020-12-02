import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Nav from '../components/Nav';

const StyledDiv = styled.div`
  margin: 0 auto;
`;

const StyledHeader = styled.header`
  background: white;
  margin-bottom: 60px;
  width: 100%;
`;

const MainLayout = ({ children }) => (
  <StyledDiv>
    <StyledHeader>
      <Nav />
    </StyledHeader>
    <StyledDiv w="100%" padding="0 20px" margin="0 auto">
      {children}
    </StyledDiv>
  </StyledDiv>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
