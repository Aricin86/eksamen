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

const ArticleDetailedView = ({ error, loading, article }) => (
  // const [error, setError] = useState('');

  // const handleDelete = () => {
  //   // validateRegistrationForm();
  //   // Fiks sletting
  // };

  // const handleEdit = () => {
  //   // validateRegistrationForm();
  //   // Link til ArticleForm og send med id (eller hele artikkelen)
  // };

  // const FormatDate = () => article.createdAt.substring(0, 9);

  <StyledArticleDetailed>
    {loading && <p>Loading...</p>}
    {error && <p>{error}</p>}
    {!article && (
      <p>
        Artikkelen kunne ikke hentest fra databasen eller finnes ikke lenger.
      </p>
    )}
    <ArticleDetailedHeader>
      <ArticleAuthor>Av {article.author}</ArticleAuthor>
      <ArticleDate>
        {/* <FormatDate /> */}
        {article.createdAt}
      </ArticleDate>
    </ArticleDetailedHeader>
    {/* <p>{article.ingress}</p> */}
    <p>{article.content}</p>
    <Button type="button">Slett</Button>
    <RegisterButton type="button">Rediger</RegisterButton>
  </StyledArticleDetailed>
);
ArticleDetailedView.propTypes = {
  error: PropTypes.any,
  loading: PropTypes.any,
  article: PropTypes.any,
  createdAt: PropTypes.any,
  // ingress: PropTypes.any,
  content: PropTypes.any,
};

export default ArticleDetailedView;
