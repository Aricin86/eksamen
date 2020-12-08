import React /* , { useState } */ from 'react';
import { Link } from 'react-router-dom';
import { StyledLoginForm, Button, RegisterButton } from '../styled/Styled';
// import RegisterForm from './RegisterForm';

const LoginForm = () => (
  // const [sucess, setSuccess] = useState(false);

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
      <Link to="/registrer">
        <RegisterButton type="button">Registrer ny bruker</RegisterButton>
      </Link>
    </div>
  </StyledLoginForm>
);
export default LoginForm;
