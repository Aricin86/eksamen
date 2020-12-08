import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import { OfficeList } from '../data/OfficeList';
// import FilterOffices from '../hooks/filters';
import { StyledList, StyledNumber, StyledListTitle } from '../styled/Styled';

const StyledLink = styled(Link)`
  text-decoration: none;

  &:visited {
    color: black;
  }
`;

const ListOffices = ({ search }) => {
  const { url } = useRouteMatch();

  return OfficeList.filter((data) => {
    if (search === '') return data;
    if (
      data.place.toLowerCase().includes(search) ||
      data.locale.toLowerCase().includes(search)
    ) {
      return data;
    }
  }).map((data, i) => (
    <StyledLink to={`${url}/${data.officenumber}`} key={i}>
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
};

export default ListOffices;
