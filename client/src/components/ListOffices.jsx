import React, { useState } from 'react';
import styled from 'styled-components';
import { OfficeList } from '../data/OfficeList';

const StyledList = styled.ul`
  list-style: none;
  display: flex;
`;

const StyledListItem = styled.li`
  margin: 5px 25px;
`;

const StyledTitle = styled.h3`
  margin: 0;
`;
const ListOffices = ({ search }) =>
  OfficeList.filter((data) => {
    if (search === '') return data;
    if (
      data.place.toLowerCase().includes(search) ||
      data.locale.toLowerCase().includes(search)
    ) {
      return data;
    }
  }).map((data, i) => (
    <StyledList key={i}>
      <StyledTitle>
        {data.locale} - {data.place}
      </StyledTitle>
      {/* <li>Rørlegger {data.locale}</li> */}
      <StyledListItem>Rørleggerveien {data.officenumber}</StyledListItem>
      <StyledListItem>
        Tlf. 69 99 00{' '}
        {data.officenumber < 10 ? `0${data.officenumber}` : data.officenumber}
      </StyledListItem>
      <StyledListItem>
        {data.place.toLowerCase()}.{data.locale.toLowerCase()}@lgror.no
      </StyledListItem>
    </StyledList>
  ));

export default ListOffices;
