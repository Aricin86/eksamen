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
              <option key={category.id}>{category.category}</option>
            ))}
        </select>
        <input placeholder="Søk på tittel" />
      </header>

      <section>
        {error && <p>{error}</p>}
        <div>
          {loading && <div>Loading...</div>}
          {!articles && (
            <p>Det er for tiden ingen artikler i denne visningen.</p>
          )}
          {articles &&
            articles.map((article) => (
              <div key={article.id}>
                <h2>{article.title}</h2>
                <h4>{article.category.category}</h4>
                <article>{article.ingress}</article>
                <Button
                  type="button"
                  as={NavLink}
                  to={`fagartikler/${article.id}`}
                >
                  Les mer her
                </Button>
              </div>
            ))}
        </div>
      </section>
    </Container>
  );
};

export default ArticleList;
