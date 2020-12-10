import http from './http';

export const register = async (values) => {
  try {
    return await http.post('/register', { ...values });
  } catch (error) {
    return error.response;
  }
};

export const login = async (credentials) => {
  try {
    return await http.post('/login', { ...credentials });
  } catch (error) {
    return error.response;
  }
};

export const logout = async () => {
  try {
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
