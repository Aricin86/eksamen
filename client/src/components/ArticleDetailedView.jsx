import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { remove } from '../utils/articleService';
import { useAuthContext } from '../context/AuthProvider';
import DeletePrompt from './DeletePrompt';
import {
  StyledArticleDetailed,
  Button,
  RegisterButton,
  ArticleDate,
  ArticleAuthor,
  ArticleDetailedHeader,
} from '../styled/Styled';

const ArticleDetailedView = ({ article }) => {
  const [showDeletePrompt, setShowDeletePrompt] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();
  const { isLoggedIn, isAdmin } = useAuthContext();

  const togglePrompt = () => {
    setShowDeletePrompt((promptOpen) => !promptOpen);
  };

  const handleDelete = () => {
    const deleteArticle = async () => {
      try {
        const response = await remove(article.id);
        if (response.status === 204) {
          setError(null);
          history.push('/fagartikler');
        }
      } catch (error) {
        setError(error);
      }
    };
    deleteArticle();
  };

  const ShowCustomDateTime = (date) => {
    const dateString = `${`0${date.getDate()}`.slice(-2)}.${`0${
      date.getMonth() + 1
    }`.slice(-2)}.${date.getFullYear()}`.slice(-10, -2);

    return dateString;
  };

  console.log(article.title);

  return (
    <>
      <StyledArticleDetailed>
        {error && <p>{error}</p>}
        {article.title === undefined && <p>Denne artikkelen finnes ikke</p>}

        <ArticleDetailedHeader>
          <ArticleAuthor>Av {article.author}</ArticleAuthor>
          <ArticleDate>
            {ShowCustomDateTime(new Date(article.createdAt))}
          </ArticleDate>
        </ArticleDetailedHeader>
        <p>{article.ingress}</p>
        <p>{article.content}</p>
        {isLoggedIn && isAdmin && (
          <>
            <Button type="button" onClick={() => setShowDeletePrompt(true)}>
              Slett
            </Button>
            {/* <RegisterButton as={NavLink} to={`/rediger/${article.id}`}> */}
            <RegisterButton>Rediger</RegisterButton>
          </>
        )}
      </StyledArticleDetailed>

      {showDeletePrompt && (
        <DeletePrompt
          togglePrompt={togglePrompt}
          handleDelete={handleDelete}
          title={article.title}
        />
      )}
    </>
  );
};

ArticleDetailedView.propTypes = {
  article: PropTypes.any,
  createdAt: PropTypes.any,
  ingress: PropTypes.any,
  content: PropTypes.any,
};

export default ArticleDetailedView;
