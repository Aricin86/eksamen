import React, { useState } from 'react';
import { StyledArticleForm, Button, DisabledButton } from '../styled/Styled';
import CategoryModal from './CategoryModal';

const ArticleForm = () => {
  const [status, setStatus] = useState(false);
  const authors = ['Lars Larsen', 'Gunn Gundersen', 'Simen Simensen'];

  return (
    <>
      <StyledArticleForm>
        <label htmlFor="title">
          Tittel
          <input id="title" placeholder="Tittel" />
        </label>
        <label htmlFor="ingress">
          Ingress
          <textarea id="ingress" placeholder="Ingress" />
        </label>
        <label htmlFor="content">
          Artikkeltekst
          <textarea id="content" placeholder="Artikkeltekst" />
        </label>
        <div>
          <label htmlFor="category">
            Velg kategori
            <select id="category">
              <option>Kategori</option>
            </select>
          </label>
          <Button type="button" onClick={() => setStatus(true)}>
            Ny
          </Button>
        </div>
        <label htmlFor="author">
          Velg forfatter
          <select id="author">
            {authors.map((data, i) => (
              <option key={i}>{data}</option>
            ))}
          </select>
        </label>
        <label htmlFor="secret">
          Hemmelig artikkel?
          <input type="checkbox" id="secret" />
        </label>
        <label htmlFor="image">
          Last opp bilde
          <input type="file" id="image" accept="image" />
        </label>
        <Button type="submit">Lagre</Button>
      </StyledArticleForm>
      <div>
        {status && <CategoryModal status={status} setStatus={setStatus} />}
      </div>
    </>
  );
};

export default ArticleForm;
