import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../utils/articleService';
import Banner from '../components/Banner';
import ArticleDetailedView from '../components/ArticleDetailedView';

const ArticleDetailed = () => {
  const { id } = useParams();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState([]);

  useEffect(() => {
    if (id) {
      const fetchArticle = async () => {
        setLoading(true);
        try {
          const { data } = await get(id);
          if (data.success) {
            setArticle(data.data);
            setError('');
          }
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
      fetchArticle();
    }
  }, [id]);

  return (
    <>
      <Banner>
        <h1>{article.title}</h1>
      </Banner>

      <ArticleDetailedView error={error} loading={loading} article={article} />
    </>
  );
};

export default ArticleDetailed;
