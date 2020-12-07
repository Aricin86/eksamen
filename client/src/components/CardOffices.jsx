import React from 'react';
import styled from 'styled-components';
import { useRouteMatch, Link } from 'react-router-dom';
import { OfficeList } from '../data/OfficeList';
import OfficeDetailed from '../pages/OfficeDetailed';

const StyledCard = styled.section`
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
  // const { url } = useRouteMatch();

  OfficeList.filter((data) => {
    if (search === '') return data;
    if (
      data.place.toLowerCase().includes(search) ||
      data.locale.toLowerCase().includes(search)
    ) {
      return data;
    }
  }).map((data) => (
    <StyledCard key={data.officenumber}>
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
      <button type="button" as={Link} to={`kontor/${data.officenumber}`}>
        Mer info
      </button>
    </StyledCard>
  ));
export default CardOffices;
