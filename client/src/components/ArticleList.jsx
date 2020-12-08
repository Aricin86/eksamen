import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Button } from '../styled/Styled';
import { articleList } from '../utils/articleService';
import { categoryList } from '../utils/categoryService';
import { useAuthContext } from '../context/AuthProvider';

const ArticleList = () => {
  const [articles, setArticles] = useState(null);
  const [categories, setCategories] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { isLoggedIn, isAdmin } = useAuthContext();
  const [search, setSearch] = useState('');

  const capCategory = (word) => {
    if (typeof word !== 'string') {
      return '';
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const filtering = () => {
    articleList.filter((data) => {
      if (search === '') return data;
      if (data.title.toLowerCase().includes(search)) {
        return data;
      }
    });
  };

  const searchArticle = (e) => {
    const keyword = e.target.value;
    setSearch(keyword);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await articleList();
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
      <header>
        {isLoggedIn && isAdmin && (
          <Button as={NavLink} to="/ny-artikkel">
            Ny artikkel
          </Button>
        )}
        <select>
          {categories &&
            categories.map((category) => (
              <option key={category.id}>
                {capCategory(category.category)}
              </option>
            ))}
        </select>
        <input placeholder="Søk på tittel" onChange={searchArticle} />
      </header>

      <section>
        {error && <p>{error}</p>}
        <div>
          {loading && <div>Loading...</div>}
          {!articles && (
            <p>Det er for tiden ingen artikler i denne visningen.</p>
          )}
          {articles &&
            articles
              .filter((data) => {
                if (search === '') return data;
                if (data.title.toLowerCase().includes(search)) {
                  return data;
                }
              })
              .map((article) => (
                <div key={article.id}>
                  <div id="bilde" />
                  <h2>{article.title}</h2>
                  <h4>{capCategory(article.category.category)}</h4>
                  <article>{article.ingress}</article>
                  <Link to={`/fagartikler/${article.id}`}>
                    <Button type="button">Les mer her</Button>
                  </Link>
                </div>
              ))}
        </div>
      </section>
    </Container>
  );
};

export default ArticleList;
