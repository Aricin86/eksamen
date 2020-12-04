import React from 'react';
import styled from 'styled-components';

const ContactForm = () => (
  <>
    <form>
      <label htmlFor="name">
        Navn
        <input name="name" id="name" />
      </label>

      <label htmlFor="message">
        Melding
        <textarea id="message" />
      </label>
      <button type="submit">Send inn</button>
    </form>
  </>
);

export default ContactForm;
