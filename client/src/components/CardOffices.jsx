import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { OfficeList } from '../data/OfficeList';

// const StyledLink = styled(Link)`
//   text-decoration: none;

//   &:visited {
//     color: black;
//   }
// `;

const StyledCard = styled.section`
  list-style: none;
  border: 1px solid black;
  width: 250px;
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
      {/* Her skal det være noe sånt som {`${url}/:id`} eller /{data.officenumber} */}
      <Link to="/detaljert">
        <button type="button">Mer info</button>
      </Link>
    </StyledCard>
  ));
export default CardOffices;
