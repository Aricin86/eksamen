import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { remove } from '../utils/articleService';
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

  // const handleEdit = () => {
  //   // validateRegistrationForm();
  //   // Link til ArticleForm og send med id (eller hele artikkelen)
  // };

  const ShowCustomDateTime = (date) => {
    const dateString = `${`0${date.getDate()}`.slice(-2)}.${`0${
      date.getMonth() + 1
    }`.slice(-2)}.${date.getFullYear()}`.slice(2);
    // ("0" + date.getDate()).slice(-2) + "." + ("0" + (date.getMonth() + 1)).slice(-2) + "." + date.getFullYear().slice(2);
    return dateString;
  };

  return (
    <>
      <StyledArticleDetailed>
        {error && <p>{error}</p>}
        {!article && (
          <p>
            Artikkelen kunne ikke hentest fra databasen eller finnes ikke
            lenger.
          </p>
        )}
        <ArticleDetailedHeader>
          <ArticleAuthor>Av {article.author}</ArticleAuthor>
          <ArticleDate>
            {ShowCustomDateTime(new Date(article.createdAt))}
          </ArticleDate>
        </ArticleDetailedHeader>
        <p>{article.ingress}</p>
        <p>{article.content}</p>
        <Button type="button" onClick={() => setShowDeletePrompt(true)}>
          Slett
        </Button>
        <RegisterButton as={NavLink} to={`/rediger/${article.id}`}>
          Rediger
        </RegisterButton>
        {/* <StyledLink to={`/rediger/${article.id}`}>Rediger</StyledLink> */}
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
  // ingress: PropTypes.any,
  content: PropTypes.any,
};

export default ArticleDetailedView;
