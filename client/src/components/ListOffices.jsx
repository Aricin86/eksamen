import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import { StyledList, StyledNumber, StyledListTitle } from '../styled/Styled';
import { OfficeList } from '../data/OfficeList';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:visited {
    color: black;
  }
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
  }).map((data) => (
    <StyledLink to={`/kontor/${data.officenumber}`} key={data.officenumber}>
      <StyledList>
        <StyledNumber>{data.officenumber}</StyledNumber>
        <StyledListTitle>Rørlegger {data.locale}</StyledListTitle>
        <li>Rørleggerveien {data.officenumber}</li>
        <li>
          <FontAwesomeIcon icon={faPhone} /> 69 99 00{' '}
          {data.officenumber < 10 ? `0${data.officenumber}` : data.officenumber}
        </li>
        <li>
          {data.place.toLowerCase()}.{data.locale.toLowerCase()}@lgror.no
        </li>
      </StyledList>
    </StyledLink>
  ));

export default ListOffices;
