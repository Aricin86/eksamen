import React, { useState } from 'react';
import { StyledLoginForm, Button, RegisterButton } from '../styled/Styled';

const LoginForm = () => {
  const [sucess, setSuccess] = useState(false);

  return (
    <StyledLoginForm>
      <label htmlFor="email">
        Epost
        <input type="email" id="email" placeholder="Skriv inn epost" />
      </label>
      <label htmlFor="password">
        Passord
        <input type="password" id="password" placeholder="Skriv inn passord" />
      </label>
      <div>
        <Button type="submit">Logg inn</Button>
        <RegisterButton type="button">Registrer ny bruker</RegisterButton>
      </div>
    </StyledLoginForm>
  );
};

export default LoginForm;
