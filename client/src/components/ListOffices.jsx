import React from 'react';
import styled from 'styled-components';
import { useRouteMatch, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { OfficeList } from '../data/OfficeList';

const StyledLink = styled(Link)`
  text-decoration: none;

  &:visited {
    color: black;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: auto 1fr 1fr 1fr 1fr;
  padding: 0;
  align-items: baseline;
`;

const StyledNumber = styled.p`
  background-color: black;
  color: white;
  padding: 6px 10px;
  margin-right: 10px;
  text-align: center;
`;

const StyledTitle = styled.p`
  margin: 0;
  font-weight: bold;
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
        <StyledTitle>Rørlegger {data.locale}</StyledTitle>
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
