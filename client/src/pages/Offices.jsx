import React, { useState } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faThList } from '@fortawesome/free-solid-svg-icons';

// import {
//   BrowserRouter as Router,
//   Route,
//   useRouteMatch,
//  from 'react-router-dom';
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

const CardSection = styled.section`
  margin: 0 auto 40px auto;
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  text-decoration: none;
`;

const ListSection = styled.section`
  width: 70%;
  margin: 0 auto 40px auto;
`;

const SearchInput = styled.input`
  height: 30px;
  width: 250px;
  margin: 3px 10px;
  padding: 5px;
  border: 1px solid #479eb9;
  border-radius: 0;
`;

const Icons = styled.a`
  color: #333;
  margin: 0 10px;

  &:hover {
    color: #479eb9;
  }
`;

const UserInput = styled.header`
  display: flex;
  width: 85%;
  margin: 80px auto 10px auto;
  justify-content: flex-end;
`;

const Offices = () => {
  const [search, setSearch] = useState('');
  const [list, setList] = useState(false);
  const [card, setCard] = useState(true);
  // const { path, url } = useRouteMatch();

  const searchOffice = (e) => {
    const word = e.target.value;
    setSearch(word);
  };

  const clickCard = () => {
    setCard(true);
    setList(false);
  };

  const clickList = () => {
    setCard(false);
    setList(true);
  };

  return (
    <>
      <Banner>
        <h1>Kontorer</h1>
      </Banner>
      <UserInput>
        <SearchInput
          type="text"
          placeholder="Filtrer etter sted eller by"
          onChange={searchOffice}
        />
        <Icons onClick={clickCard}>
          <FontAwesomeIcon icon={faThLarge} size="2x" />
        </Icons>
        <Icons onClick={clickList}>
          <FontAwesomeIcon icon={faThList} size="2x" />
        </Icons>
      </UserInput>
      {card && (
        <CardSection>
          <CardOffices search={search} />
        </CardSection>
      )}
      {list && (
        <ListSection>
          <ListOffices search={search} />
        </ListSection>
      )}
    </>
  );
};

export default Offices;
