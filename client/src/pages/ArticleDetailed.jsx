import React, { useEffect, useState } from 'react';
// import ArticleDetailedView from '../components/ArticleDetailedView';
import { useParams } from 'react-router-dom';
import Banner from '../components/Banner';
import { get } from '../utils/articleService';

const ArticleDetailed = () => {
  const { id } = useParams();
  const [article, setArticle] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const { data, error } = await get(id);
        if (error) {
          setError(error);
          setArticle([]);
        } else {
          setArticle(data);
        }
      };
      fetchData();
    }
  }, [id]);

  return (
    <>
      <Banner>
        <h1>{article.title}</h1>
      </Banner>
      <p>{article.author}</p>
      <p>{article.createdAt}</p>
      <p>{article.ingress}</p>
      <p>{article.content}</p>
      {/* // ! TODO knapper med funksjon */}
      <button type="button">SLETT</button>
      <button type="button">REDIGER</button>
    </>
  );
};

export default ArticleDetailed;
