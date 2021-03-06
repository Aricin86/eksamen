import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledArticleListed } from '../styled/Styled';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:visited {
    color: black;
  }
`;

const ArticleFilterCategory = ({ filterCat, categories, articles }) => {
  const capCategory = (word) => {
    if (typeof word !== 'string') {
      return '';
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <section>
      {categories &&
        articles
          .filter((data) => {
            if (filterCat === null) return data;
            if (data.title.toLowerCase().includes(filterCat)) {
              return data;
            }
          })
          .map((article) => (
            <StyledArticleListed key={article.id}>
              <div id="bilde" />
              <StyledLink to={`/fagartikkel/${article.id}`}>
                <h4>{article.title}</h4>
              </StyledLink>
              <h5>{capCategory(article.category.category)}</h5>
              <p>{article.ingress}</p>
            </StyledArticleListed>
          ))}
    </section>
  );
};

ArticleFilterCategory.propTypes = {
  filterCat: PropTypes.any,
  categories: PropTypes.any,
  articles: PropTypes.any,
};

export default ArticleFilterCategory;
