import http from './http';

const API_URL = '/categories';

export const categoryList = async () => {
  try {
    return await http.get(`${API_URL}`);
  } catch (error) {
    return error.response.data;
  }
};

export const create = async (data) => {
  try {
    return await http.post(`${API_URL}`, data);
  } catch (error) {
    return error.response.data;
  }
};

export default {
  create,
  categoryList,
};
