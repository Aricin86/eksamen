import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useCustomHookForm from '../hooks/useCustomHookForm';
import { register } from '../utils/authService';
import {
  StyledRegisterMain,
  StyledRegisterForm,
  Button,
} from '../styled/Styled';

const initialState = { name: '', email: '', password: '' };

const RegisterForm = () => {
  const [error, setError] = useState(null);
  const history = useHistory();
  const {
    values,
    errors,
    handleChange,
    validateRegistrationForm,
    submitable,
  } = useCustomHookForm({ initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    validateRegistrationForm();
  };

  const submitForm = () => {
    const postData = async () => {
      try {
        console.log(values);
        const response = await register(values);
        if (response.status === 200) {
          setError(null);
          history.push('/login');
        }
      } catch (error) {
        setError(error.message);
      }
    };
    postData();
  };

  useEffect(() => {
    if (submitable) {
      submitForm();
    }
  }, [submitable]);

  return (
    <>
      <StyledRegisterMain>
        <StyledRegisterForm onSubmit={handleSubmit}>
          <label htmlFor="name">
            Navn
            <input
              type="text"
              name="name"
              id="name"
              values={values.name}
              onChange={handleChange}
              placeholder="Skriv inn navnet ditt"
            />
          </label>
          <label htmlFor="email">
            Epost
            <input
              type="email"
              name="email"
              id="email"
              values={values.email}
              onChange={handleChange}
              placeholder="Skriv inn epost"
            />
          </label>
          <label htmlFor="password">
            Passord
            <input
              type="password"
              name="password"
              id="password"
              values={values.password}
              onChange={handleChange}
              placeholder="Skriv inn passord"
            />
          </label>
          {error ||
            (errors && (
              <div>
                {error && <p>{error}</p>}
                {errors &&
                  errors.split('\n').map((err, i) => <p key={i}>{err}</p>)}
              </div>
            ))}
          <Button type="submit">Registrer deg</Button>
        </StyledRegisterForm>
      </StyledRegisterMain>
    </>
  );
};
export default RegisterForm;
