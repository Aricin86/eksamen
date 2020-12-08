import React from 'react';
import styled from 'styled-components';
import ArticleList from '../components/ArticleList';

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

const Articles = () => (
  <>
    <Banner>
      <h1>Fagartikler</h1>
    </Banner>

    <ArticleList />
  </>
);

export default Articles;
