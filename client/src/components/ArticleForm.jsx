import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { create } from '../utils/articleService';
import useCustomHookForm from '../hooks/useCustomHookForm';
import { categoryList } from '../utils/categoryService';
import { useAuthContext } from '../context/AuthProvider';
import CategoryModal from './CategoryModal';
import { StyledArticleForm, Button } from '../styled/Styled';

const initialState = {
  title: '',
  ingress: '',
  content: '',
  category: '',
  author: '',
};

const ArticleForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSecretValue, setIsSecretValue] = useState(false);
  const [categories, setCategories] = useState(null);
  const authors = ['Lars Larsen', 'Gunn Gundersen', 'Simen Simensen'];
  const history = useHistory();
  const { user } = useAuthContext();
  const {
    values,
    errors,
    handleChange,
    validateArticleForm,
    submitable,
  } = useCustomHookForm({ initialState });

  const toggleModal = () => {
    setShowModal((modalOpen) => !modalOpen);
  };

  const fetchCategoryData = async () => {
    setLoading(true);
    const { data, error } = await categoryList();
    if (error) {
      setError(error);
    } else {
      setError(null);
      setCategories(data);
    }
    setLoading(false);
  };

  const capCategory = (word) => {
    if (typeof word !== 'string') {
      return '';
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const handleCheckboxChange = (event) => {
    setIsSecretValue(event.target.checked); // Kopiert fra nett
  };

  const submitForm = () => {
    const postData = async () => {
      setLoading(true);
      try {
        values.admin = user.id;
        values.isSecret = isSecretValue;
        const response = await create(values);
        if (response.status === 201) {
          setError(null);
          history.push('/fagartikler');
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    postData();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateArticleForm();
  };

  useEffect(() => {
    if (submitable) {
      submitForm();
    }
  }, [submitable]);

  useEffect(() => {
    fetchCategoryData();
  }, []);

  return (
    <>
      <StyledArticleForm onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
        <label htmlFor="title">
          Tittel *
          <input
            type="text"
            name="title"
            id="title"
            values={values.title}
            onChange={handleChange}
            placeholder="Tittel"
          />
        </label>
        <label htmlFor="ingress">
          Ingress *
          <textarea
            type="text"
            name="ingress"
            id="ingress"
            values={values.ingress}
            onChange={handleChange}
            placeholder="Kort oppsummering av hva artikkelene handler om"
          />
        </label>
        <label htmlFor="content">
          Artikkeltekst *
          <textarea
            type="text"
            name="content"
            id="content"
            values={values.content}
            onChange={handleChange}
            placeholder="Her skal hovedinnholdet i artikkelen fylles inn"
          />
        </label>
        <div>
          <label htmlFor="category">
            Kategori *
            <select id="category" name="category" onChange={handleChange}>
              <option value="">Velg kategori</option>
              {categories &&
                categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {capCategory(category.category)}
                  </option>
                ))}
            </select>
          </label>
          <Button type="button" onClick={() => setShowModal(true)}>
            Ny
          </Button>
        </div>
        <label htmlFor="author">
          Forfatter *
          <select id="author" name="author" onChange={handleChange}>
            <option value="">Velg forfatter</option>
            {authors.map((name, i) => (
              <option key={i} value={name}>
                {name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="isSecret">
          Hemmelig artikkel?
          <input
            type="checkbox"
            id="isSecret"
            name="isSecret"
            onChange={handleCheckboxChange}
          />
        </label>
        <label htmlFor="image">
          Last opp bilde
          <input type="file" id="image" name="image" accept="image" />
        </label>
        {errors && (
          <div>
            <p>{errors}</p>
          </div>
        )}
        <Button type="submit">Lagre</Button>
      </StyledArticleForm>
      {showModal && (
        <CategoryModal
          toggleModal={toggleModal}
          fetchCategoryData={fetchCategoryData}
        />
      )}
    </>
  );
};

export default ArticleForm;
