import React from 'react';
// import ContactForm from '../components/LoginForm'; // ! Må endres
import styled from 'styled-components';
import { officeData } from '../data/offices';

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

const Offices = () => (
  <>
    <Banner>
      <h1>Kontorer</h1>
    </Banner>
    {officeData.map((data, i) => (
      <ul key={i}>
        <li>
          Rørlegger {data.place} {data.officenumber}
        </li>
        <li>Rørleggerveien {data.officenumber}</li>
        <li>Tlf. 69 99 00 {data.officenumber}</li>
        <li>
          {data.place.toLowerCase()}.{data.locale.toLowerCase()}@lgror.no
        </li>
      </ul>
    ))}
  </>
);

export default Offices;
