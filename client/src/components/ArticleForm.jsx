import React from 'react';

const ArticleForm = () => (
  <form>
    <label htmlFor="title">
      Tittel
      <input id="title" />
    </label>
    <label htmlFor="ingress">
      Ingress
      <textarea id="ingress" />
    </label>
    <label htmlFor="content">
      Artikkeltekst
      <textarea id="content" />
    </label>
    <label htmlFor="category">
      Velg kategori
      <select id="category">
        <option>Kategori</option>
      </select>
    </label>
    <button type="button">Ny</button>
    <label htmlFor="author">
      Velg forfatter
      <select id="author">
        <option>Forfatter</option>
      </select>
    </label>
    <button type="submit">Lagre</button>
  </form>
);

export default ArticleForm;
