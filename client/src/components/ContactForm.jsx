import React from 'react';
import styled from 'styled-components';
import { Button } from '../styled/Styled';

const StyledContactMain = styled.main`
  width: 40%;
  margin: 0 auto;
`;

const StyledContactForm = styled.form`
  margin: 40px 0;
  display: grid;
  grid-template-columns: 1fr;
  & > label {
    margin-top: 30px;
    grid-column: 1/2;
    display: grid;
    font-weight: bold;
    & > input {
      margin-top: 5px;
      padding: 0 10px;
      min-height: 50px;
      border-radius: 5px;
    }
    & > textarea {
      margin-top: 5px;
      padding: 10px;
      min-height: 80px;
      min-width: 100%;
      border-radius: 5px;
      resize: none;
      height: 150px;
    }
  }
  & > button {
    margin-top: 30px;
    grid-row: 3;
    justify-self: right;
  }
`;

const ContactForm = () => (
  <StyledContactMain>
    <StyledContactForm>
      <label htmlFor="name">
        Navn
        <input name="name" id="name" />
      </label>

      <label htmlFor="message">
        Melding
        <textarea id="message" />
      </label>
      <Button type="submit">Send inn</Button>
    </StyledContactForm>
  </StyledContactMain>
);

export default ContactForm;
