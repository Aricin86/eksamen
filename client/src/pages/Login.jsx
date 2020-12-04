import React from 'react';
import styled from 'styled-components';
// import LoginForm from '../components/LoginForm';

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

const Login = () => (
  <>
    <Banner>
      <h1>Logg inn</h1>
    </Banner>
  </>
);

export default Login;
