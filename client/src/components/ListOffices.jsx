import React from 'react';
import styled from 'styled-components';
import { useRouteMatch, Link } from 'react-router-dom';
import { OfficeList } from '../data/OfficeList';

const StyledList = styled(Link)`
  list-style: none;
  display: flex;
  padding: 0;
  align-items: baseline;
`;

const StyledListItem = styled.li`
  padding-left: 20px;
  display: table-row;
`;

const StyledTitle = styled.h3`
  margin: 0;
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
    <StyledList to={`${url}/${data.officenumber}`} key={i}>
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
};

export default ListOffices;
