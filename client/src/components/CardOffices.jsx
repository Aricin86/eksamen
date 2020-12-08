import React from 'react';
import { Link } from 'react-router-dom';
import { OfficeList } from '../data/OfficeList';
import { StyledCard, StyledTitle } from '../styled/Styled';

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
