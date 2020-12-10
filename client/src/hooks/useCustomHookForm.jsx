import { useState } from 'react';

const useCustomHookForm = ({ initialState }) => {
  const [values, setValues] = useState(initialState || {});
  const [errors, setErrors] = useState('');
  const [submitable, setSubmitable] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };

  const validateArticleForm = () => {
    setSubmitable(false);

    if (
      !values.title ||
      values.title === '' ||
      !values.ingress ||
      values.ingress === '' ||
      !values.content ||
      values.content === '' ||
      !values.category ||
      values.category === '' ||
      !values.author ||
      values.content === ''
    ) {
      setErrors('Alle felter markert med * må være fylt ut');
      setSubmitable(false);
    } else {
      setErrors('');
      setSubmitable(true);
    }
  };

  const validateRegistrationForm = () => {
    let errorMessage = '';
    setSubmitable(false);

    if (!values.name || values.name === '' || values.name.length < 3) {
      errorMessage = 'Navnet må bestå av minst tre bokstaver\n';
      setNameValid(false);
    } else {
      setNameValid(true);
    }

    if (!values.email || values.email === '') {
      errorMessage += 'Fyll inn en epostadresse\n';
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }

    if (
      !values.password ||
      values.password === '' ||
      values.password.length < 6
    ) {
      errorMessage += 'Passordet må bestå av minst 6 verdier';
      setPasswordValid(false);
    } else {
      setPasswordValid(true);
    }

    setErrors(errorMessage);

    if (nameValid && emailValid && passwordValid) {
      setErrors('');
      setSubmitable(true);
    }
  };

  return {
    values,
    errors,
    handleChange,
    validateArticleForm,
    validateRegistrationForm,
    submitable,
  };
};

export default useCustomHookForm;
