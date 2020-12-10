import { useState } from 'react';

const useCustomHookFormCategory = ({ initialState }) => {
  const [values, setValues] = useState(initialState || {});
  const [errors, setErrors] = useState('');
  const [submitable, setSubmitable] = useState(false);

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };

  const validateCategoryForm = () => {
    setSubmitable(false);

    if (!values.category || values.category === '') {
      setErrors('Fyll inn en kategori');
      setSubmitable(false);
    } else {
      setErrors('');
      setSubmitable(true);
    }
  };

  return {
    values,
    errors,
    handleChange,
    validateCategoryForm,
    submitable,
  };
};

export default useCustomHookFormCategory;
