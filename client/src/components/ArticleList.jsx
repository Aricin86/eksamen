import React from 'react';
import styled from 'styled-components';

const ArticleList = () => (
  <>
    <header>
      <button type="button">Ny artikkel</button>
      <select>
        <option>Alle kategorier</option>
        <option>Kategori 1</option>
        <option>Kategori 2</option>
      </select>
      <input placeholder="Filtrer på tittel" />
    </header>

    <section>
      <h2>Tittel</h2>
      <h4>Kategori</h4>
      <article>Ingress</article>
    </section>
  </>
);

export default ArticleList;
