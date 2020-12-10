import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { login } from '../utils/authService';
import { useAuthContext } from '../context/AuthProvider';
import { StyledLoginForm, Button, RegisterButton } from '../styled/Styled';
// import RegisterForm from './RegisterForm';

const LoginForm = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const history = useHistory();
  const { setUser, isLoggedIn } = useAuthContext();
  // const { state } = useLocation();
  const { register, handleSubmit, formState } = useForm({
    mode: 'onBlur',
  });

  // useEffect(() => {
  //   if () {

  //   }
  // }, []);

  const onSubmit = async (credentials) => {
    const { data } = await login(credentials);
    if (!data.success) {
      setError(data.message);
    } else {
      const user = data?.user;
      const expire = JSON.parse(window.atob(data.token.split('.')[1])).exp;
      setUser({ ...user, expire });
      setSuccess(true);
      setTimeout(() => {
        history.push(`/`);
      }, 2000);
    }
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">
        Epost
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Skriv inn epost"
          ref={register({
            required: true,
          })}
        />
      </label>
      <label htmlFor="password">
        Passord
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Skriv inn passord"
          ref={register({
            required: true,
            minLength: 6,
          })}
        />
      </label>

      {success && <p>Du er nå logget inn!</p>}
      {error && <p>{error}</p>}
      <div>
        <Button isLodading={formState.isSubmitting} type="submit">
          Logg inn
        </Button>
        <RegisterButton as={Link} to="/registrer">
          Registrer ny bruker
        </RegisterButton>
      </div>
    </StyledLoginForm>
  );
};

export default LoginForm;
