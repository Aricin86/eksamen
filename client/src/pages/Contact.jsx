import React from 'react';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';

const Banner = styled.header`
  grid-row: 1;
  grid-column: 1 / 4;
  color: #1c1c21;
  background-color: lightgray;
  height: 400px;

  h1 {
    text-align: center;
    padding: 160px;
    margin: 0;
    font-size: 36px;
  }
`;

const Contact = () => (
  <>
    <Banner>
      <h1>Kontakt oss</h1>
    </Banner>
    <ContactForm />
  </>
);

export default Contact;
