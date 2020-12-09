import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useCustomHookForm from '../hooks/useCustomHookForm';
import { create } from '../utils/articleService';
import { categoryList } from '../utils/categoryService';
import { useAuthContext } from '../context/AuthProvider';
// import { getUserInfo } from '../utils/authService';
import CategoryModal from './CategoryModal';
import { StyledArticleForm, Button, DisabledButton } from '../styled/Styled';

const initialState = {
  title: '',
  ingress: '',
  content: '',
  category: '',
  author: '',
};

const ArticleForm = () => {
  const [status, setStatus] = useState(false);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentAdmin, setCurrentAdmin] = useState('');
  const [isSecret, setIsSecret] = useState(false);
  const [categories, setCategories] = useState(null);
  // const [auhtors, setuhtors] = useState(null);
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
  const [finalValues, setFinalValues] = useState([]);

  const capCategory = (word) => {
    if (typeof word !== 'string') {
      return '';
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const handleCheckboxChange = (event) => {
    setIsSecret(event.target.checked);
  };

  const submitForm = () => {
    const postData = async () => {
      try {
        const response = await create(values);
        if (response.status === 201) {
          setError(null);
          history.push('/fagartikler');
        }
      } catch (error) {
        setError(error.message);
      }
    };
    postData();
  };

  const updateFinalValues = () => {
    console.log(user.id);
    const userId = user.id;
    console.log(userId);

    setCurrentAdmin('hello');
    console.log(currentAdmin);

    setFinalValues({ admin: user.id, ...initialState });
    console.log(finalValues);

    // console.log(values);
    // submitForm();
  };

  // useEffect(() => {
  //   const getAdmin = async () => {
  //     setLoading(true);
  //     const { data } = await getUserInfo();
  //     if (!data.success) {
  //       setError(error);
  //     } else {
  //       setAdmin(data.data);
  //       setError(null);
  //     }
  //     setLoading(false);
  //   };
  //   getAdmin();
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    // setAdmin(user.id);
    updateFinalValues();
    // console.log(admin);
    validateArticleForm();
  };

  useEffect(() => {
    if (submitable) {
      updateFinalValues();
    }
  }, [submitable]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     const { data } = await articleList();
  //     if (!data.success) {
  //       setError(error);
  //     } else {
  //       setArticles(data.data);
  //       setError(null);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await categoryList();
      if (error) {
        setError(error);
      } else {
        setCategories(data);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <StyledArticleForm onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        {/* {!admin && <p>Hei,! Hvilke endringer har du lyst til å gjøre?</p>} */}
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
            <select
              id="category"
              name="category"
              // values={values.category}
              onChange={handleChange}
            >
              <option value="">Velg kategori</option>
              {categories &&
                categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {capCategory(category.category)}
                  </option>
                ))}
            </select>
          </label>
          {/* // TODO Fiks modal */}
          <Button type="button" onClick={() => setStatus(true)}>
            Ny
          </Button>
        </div>
        <label htmlFor="author">
          Forfatter *
          <select
            id="author"
            name="author"
            // values={values.author}
            onChange={handleChange}
          >
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
            // values={isSecret}
            onChange={handleCheckboxChange}
          />
        </label>
        <label htmlFor="image">
          Last opp bilde
          <input
            type="file"
            id="image"
            name="image"
            // values={values.image}
            // onChange={handleChange}
            accept="image"
          />
        </label>
        {errors && (
          <div>
            <p>{errors}</p>
          </div>
        )}
        <Button type="submit">Lagre</Button>
      </StyledArticleForm>
      <div>
        {status && <CategoryModal status={status} setStatus={setStatus} />}
      </div>
    </>
  );
};

export default ArticleForm;
