import React from 'react';

const ArticleDetailedView = ({ error, loading, article }) => {
  // const [error, setError] = useState('');

  const handleDelete = () => {
    // validateRegistrationForm();
    // Fiks sletting
  };

  const handleEdit = () => {
    // validateRegistrationForm();
    // Link til ArticleForm og send med id (eller hele artikkelen)
  };

  return (
    <section>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!article && (
        <p>
          Artikkelen kunne ikke hentest fra databasen eller finnes ikke lenger.
        </p>
      )}
      <p>{article.author}</p>
      <p>{article.createdAt}</p>
      <p>{article.ingress}</p>
      <p>{article.content}</p>
      <button type="button">Slett</button>
      <button type="button">Rediger</button>
    </section>
  );
};

export default ArticleDetailedView;
