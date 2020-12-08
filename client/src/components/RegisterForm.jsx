import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import { Button } from '../styled/Styled';

const StyledRegisterMain = styled.main`
  width: 40%;
  margin: 0 auto;
`;

const StyledRegisterForm = styled.form`
  margin: 40px 0;
  display: grid;
  grid-template-columns: 1fr;
  & > label {
    margin-top: 30px;
    grid-column: 1/2;
    display: grid;
    font-weight: bold;
    & > input {
      margin-top: 5px;
      padding: 0 10px;
      min-height: 50px;
      border-radius: 5px;
    }
    & > textarea {
      margin-top: 5px;
      padding: 10px;
      min-height: 80px;
      min-width: 100%;
      border-radius: 5px;
      resize: none;
      height: 150px;
    }
  }
  & > button {
    margin-top: 30px;
    grid-row: 4;
    justify-self: right;
  }
`;

const RegisterForm = () => (
  <>
    <Banner>
      <h1>Registrer deg</h1>
    </Banner>
    <StyledRegisterMain>
      <StyledRegisterForm>
        <label htmlFor="name">
          Navn
          <input id="name" />
        </label>
        <label htmlFor="email">
          Epost
          <input id="email" />
        </label>
        <label htmlFor="password">
          Passord
          <input id="password" />
        </label>
        <Button type="button">Registrer deg</Button>
      </StyledRegisterForm>
    </StyledRegisterMain>
  </>
);

export default RegisterForm;
