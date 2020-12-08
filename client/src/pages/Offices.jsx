import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faThList } from '@fortawesome/free-solid-svg-icons';

import ListOffices from '../components/ListOffices';
import CardOffices from '../components/CardOffices';
import Banner from '../components/Banner';

import {
  CardSection,
  ListSection,
  SearchInput,
  Icons,
  UserInput,
} from '../styled/Styled';

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
