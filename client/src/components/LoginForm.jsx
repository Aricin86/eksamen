import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  width: 40%;
  margin: 40px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(30px, auto);
`;

// const UserLabel = styled.label`
//   grid-column: 1;
//   grid-row: 1;
// `;

// const PasswordLabel = styled(UserLabel)`
//   grid-column: 1;
//   grid-row: 2;
// `;

const UserInputField = styled.input`
  grid-column: 2;
  grid-row: 1;
  height: 30px;
  border: 1px solid #479eb9;
  margin: 20px;
`;

const PasswordInput = styled(UserInputField)`
  grid-column: 2;
  grid-row: 2;
`;

const Register = styled.button`
  grid-column: 1;
  grid-row: 3;
  width: 150px;
  background-color: #d0f1d4;
  color: #1c1c21;
  border: none;
  font-size: 18px;
  padding: 10px;
  margin: 10px;
`;

const LoginButton = styled(Register)`
  grid-column: 2;
  grid-row: 3;
  background-color: #479eb9;
  color: #f5f5f5;
`;

const LoginForm = () => (
  <Form>
    <label htmlFor="username">
      Brukernavn
      <UserInputField
        type="text"
        id="username"
        placeholder="Skriv inn brukernavn"
      />
    </label>
    <label htmlFor="password">
      Passord
      <PasswordInput
        type="password"
        id="password"
        placeholder="Skriv inn passord"
      />
    </label>
    <Register type="button">Registrer bruker</Register>
    <LoginButton type="submit">Logg inn</LoginButton>
  </Form>
);

export default LoginForm;
