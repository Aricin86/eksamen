import React from 'react';
import Banner from '../components/Banner';
import ArticleForm from '../components/ArticleForm';

const CreateArticle = () => (
  <>
    <Banner>
      <h1>Ny artikkel</h1>
    </Banner>

    <ArticleForm />
  </>
);

export default CreateArticle;
