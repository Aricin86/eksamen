import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import useCustomHookFormCategory from '../hooks/useCustomHookFormCategory';
import { create } from '../utils/categoryService';

import { ModalContent, ModalStyled, Button, Overlay } from '../styled/Styled';

const initialState = {
  category: '',
};

const CategoryModal = ({ toggleModal, fetchCategoryData }) => {
  const [error, setError] = useState(null);
  const {
    values,
    errors,
    handleChange,
    validateCategoryForm,
    submitable,
  } = useCustomHookFormCategory({ initialState });

  const closeModal = (e) => {
    toggleModal(e);
  };

  const addCategory = () => {
    const postData = async () => {
      try {
        const response = await create(values);
        if (response.status === 201) {
          setError(null);
          fetchCategoryData();
          toggleModal(false);
        }
      } catch (error) {
        setError(error);
      }
    };
    postData();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateCategoryForm();
  };

  useEffect(() => {
    if (submitable) {
      addCategory();
    }
  }, [submitable]);

  return (
    <>
      <ModalStyled>
        <ModalContent>
          <label htmlFor="category">
            Ny kategori
            <input
              type="text"
              name="category"
              id="category"
              values={values.category}
              onChange={handleChange}
              placeholder="Fyll inn kategori"
            />
          </label>
          <Button type="submit" onClick={handleSubmit}>
            Opprett
          </Button>
        </ModalContent>
        {error && <p>{error}</p>}
        {errors && <p>{errors}</p>}
      </ModalStyled>

      <Overlay onClick={closeModal} />
    </>
  );
};

// CategoryModal.propTypes = {
//   status: PropTypes.bool,
//   setStatus: PropTypes.func,
// };

export default CategoryModal;
