import React from 'react';
import { Button, StyledContactMain, StyledContactForm } from '../styled/Styled';

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
