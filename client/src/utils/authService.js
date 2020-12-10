import http from './http';

export const register = async (values) => {
  try {
    // await getCsrfToken();
    return await http.post('/register', { ...values });
  } catch (error) {
    return error.response;
  }
};

export const login = async (credentials) => {
  try {
    // await getCsrfToken();
    return await http.post('/login', { ...credentials });
  } catch (error) {
    return error.response;
  }
};

export const logout = async () => {
  try {
    // await getCsrfToken();
    return await http.post('/logout');
  } catch (error) {
    return error.response;
  }
};

export const getUserInfo = async () => {
  try {
    return await http.get('/me');
  } catch (error) {
    return error.response;
  }
};

// export const getCsrfToken = async () => {
//   try {
//     const { data } = await http.get('/csrf-token');
//     http.defaults.headers['X-CSRF-Token'] = data.data;
//   } catch (err) {
//     return err.response;
//   }
// };
