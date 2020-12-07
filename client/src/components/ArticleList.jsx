import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../styled/Styled';
import { articleList } from '../utils/articleService';
import { categoryList } from '../utils/categoryService';

const ArticleList = () => {
  const [articles, setArticles] = useState(null);
  const [categories, setCategories] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await articleList();
      if (error) {
        setError(error);
      } else {
        setArticles(data);
      }
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
        <Button as={Link} to="/ny-artikkel">
          Ny artikkel
        </Button>
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
                  as={Link}
                  to={`fagartikkel/${article.id}`}
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
