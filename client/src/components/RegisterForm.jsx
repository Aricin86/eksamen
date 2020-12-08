import React from 'react';
import {
  Button,
  StyledRegisterForm,
  StyledRegisterMain,
} from '../styled/Styled';

const RegisterForm = () => (
  <>
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
