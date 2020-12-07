import React from 'react';
import { StyledArticleForm, Button, DisabledButton } from '../styled/Styled';

const ArticleForm = () => (
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
      <Button type="button">Ny</Button>
    </div>
    <label htmlFor="author">
      Velg forfatter
      <select id="author">
        <option>Forfatter</option>
      </select>
    </label>
    <Button type="submit">Lagre</Button>
  </StyledArticleForm>
);

export default ArticleForm;
