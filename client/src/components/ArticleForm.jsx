import React from 'react';
import { StyledArticleForm, Button, DisabledButton } from '../styled/Styled';

const ArticleForm = () => {
  const authors = ['Lars Larsen', 'Gunn Gundersen', 'Simen Simensen'];

  return (
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
  );
};

export default ArticleForm;
