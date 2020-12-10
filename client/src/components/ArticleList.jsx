import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Button, ArticleHeader } from '../styled/Styled';

import { articleList } from '../utils/articleService';
import { categoryList } from '../utils/categoryService';
import { useAuthContext } from '../context/AuthProvider';

import ArticleSearchTitle from './ArticleSearchTitle';

const ArticleList = () => {
  const [articles, setArticles] = useState(null);
  const [filterCat, setFilterCat] = useState('All');
  const [categories, setCategories] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { isLoggedIn, isAdmin } = useAuthContext();
  const [search, setSearch] = useState('');

  const searchArticle = (e) => {
    const keyword = e.target.value;
    setSearch(keyword);
  };

  const filterCategory = (e) => {
    const chosenOption = e.target.value;
    setFilterCat(chosenOption);
  };

  const capCategory = (word) => {
    if (typeof word !== 'string') {
      return '';
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data, error } = await articleList();
      if (!data.success) {
        setError(error);
      } else {
        setArticles(data.data);
        setError(null);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await categoryList();
      if (error) {
        setError(error);
      } else {
        setCategories(data);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <ArticleHeader>
        {isLoggedIn && isAdmin && (
          <Button as={NavLink} to="/ny-artikkel">
            Ny artikkel
          </Button>
        )}
        <input placeholder="Søk på tittel" onChange={searchArticle} />
        <select onChange={filterCategory}>
          <option value="All">Velg kategori</option>
          {categories &&
            categories.map((category) => (
              <option value={category.category} key={category.id}>
                {capCategory(category.category)}
              </option>
            ))}
        </select>
      </ArticleHeader>
      {error && <p>{error}</p>}
      {loading && <div>Loading...</div>}

      {articles && (
        <>
          <ArticleSearchTitle search={search} articles={articles} />
        </>
      )}
    </Container>
  );
};

export default ArticleList;
