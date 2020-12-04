import React, { useState } from 'react';
import styled from 'styled-components';
import { OfficeList } from '../data/OfficeList';

const StyledCard = styled.ul`
  list-style: none;
  border: 1px solid black;
  width: 250px;
  margin-left: 10px;
  padding: 10px;
  display: inline-grid;
`;

const StyledTitle = styled.h3`
  margin: 0;
`;

const CardOffices = ({ search }) =>
  OfficeList.filter((data) => {
    if (search === '') return data;
    if (
      data.place.toLowerCase().includes(search) ||
      data.locale.toLowerCase().includes(search)
    ) {
      return data;
    }
  }).map((data, i) => (
    <StyledCard key={i}>
      <StyledTitle>{data.place}</StyledTitle>
      <li>Rørlegger {data.locale}</li>
      <li>Rørleggerveien {data.officenumber}</li>
      <li>
        Tlf. 69 99 00{' '}
        {data.officenumber < 10 ? `0${data.officenumber}` : data.officenumber}
      </li>
      <li>
        {data.place.toLowerCase()}.{data.locale.toLowerCase()}@lgror.no
      </li>
    </StyledCard>
  ));

export default CardOffices;
