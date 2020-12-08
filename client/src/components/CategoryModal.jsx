import React from 'react';
import PropTypes from 'prop-types';

import { ModalContent, ModalStyled, Button } from '../styled/Styled';

const CategoryModal = ({ status, setStatus }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus(!status);
  };
  return (
    <ModalStyled>
      <ModalContent>
        <label htmlFor="newCategory">
          Ny kategori
          <input type="text" id="newCategory" />
        </label>
        <Button type="submit" onClick={handleSubmit}>
          Lagre
        </Button>
      </ModalContent>
    </ModalStyled>
  );
};

CategoryModal.propTypes = {
  status: PropTypes.bool,
  setStatus: PropTypes.func,
};

export default CategoryModal;
