import React from 'react';
import styled from 'styled-components';
import ArticleForm from '../components/ArticleForm';

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

const CreateArticle = () => (
  <>
    <Banner>
      <h1>Ny artikkel</h1>
    </Banner>
    <ArticleForm />
  </>
);

export default CreateArticle;
