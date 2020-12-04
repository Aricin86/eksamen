import React, { useState } from 'react';
import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThLarge, faThList } from '@fortawesome/free-solid-svg-icons';
import ListOffices from '../components/ListOffices';
import CardOffices from '../components/CardOffices';

const Banner = styled.header`
  grid-row: 1;
  grid-column: 1 / 4;
  color: #1c1c21;
  background-color: lightgray;
  height: 400px;

  h1 {
    text-align: center;
    padding: 160px;
    margin: 0;
    font-size: 36px;
  }
`;

const Offices = () => {
  const [search, setSearch] = useState('');
  const searchOffice = (e) => {
    const keyword = e.target.value;
    setSearch(keyword);
  };

  return (
    <>
      <Banner>
        <h1>Kontorer</h1>
      </Banner>
      <input type="text" placeholder="Filtrer sted" onChange={searchOffice} />
      {/* <FontAwesomeIcon icon={faThLarge} size="3x" /> */}
      {/* <FontAwesomeIcon icon={faThList} size="3x" /> */}
      <button type="button" onClick={ListOffices}>
        Liste
      </button>
      <button type="button" onClick={CardOffices}>
        Kort
      </button>
      <br />
      <ListOffices search={search} />
      <CardOffices search={search} />
    </>
  );
};

export default Offices;
