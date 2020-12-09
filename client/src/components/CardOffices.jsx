import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { OfficeList } from '../data/OfficeList';
import { StyledCard, StyledTitle } from '../styled/Styled';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:visited {
    color: black;
  }
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
  }).map((data) => (
    <StyledLink to={`/detaljert/${data.officenumber}`} key={data.officenumber}>
      <StyledCard>
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
    </StyledLink>
  ));

export default CardOffices;
