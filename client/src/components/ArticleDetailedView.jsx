import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledArticleDetailed,
  Button,
  RegisterButton,
  ArticleDate,
  ArticleAuthor,
  ArticleDetailedHeader,
} from '../styled/Styled';

const ArticleDetailedView = ({ error, loading, article }) => {
  // const [error, setError] = useState('');

  // const handleDelete = () => {
  //   // validateRegistrationForm();
  //   // Fiks sletting
  // };

  // const handleEdit = () => {
  //   // validateRegistrationForm();
  //   // Link til ArticleForm og send med id (eller hele artikkelen)
  // };

  const ShowCustomDateTime = (date) => {
    const dateString = `${`0${date.getDate()}`.slice(-2)}.${`0${
      date.getMonth() + 1
    }`.slice(-2)}.${date.getFullYear()}`.slice(-10, -2);
    return dateString;
  };

  console.log(article.title);

  return (
    <StyledArticleDetailed>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      {article.title === undefined && <p>Denne artikkelen finnes ikke</p>}

      <ArticleDetailedHeader>
        <ArticleAuthor>Av {article.author}</ArticleAuthor>
        <ArticleDate>
          {ShowCustomDateTime(new Date(article.createdAt))}
        </ArticleDate>
      </ArticleDetailedHeader>
      <p>{article.ingress}</p>
      <p>{article.content}</p>
      <Button type="button">Slett</Button>
      <RegisterButton type="button">Rediger</RegisterButton>
    </StyledArticleDetailed>
  );
};

ArticleDetailedView.propTypes = {
  error: PropTypes.any,
  loading: PropTypes.any,
  article: PropTypes.any,
  createdAt: PropTypes.any,
  ingress: PropTypes.any,
  content: PropTypes.any,
};

export default ArticleDetailedView;
