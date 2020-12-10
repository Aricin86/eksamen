import http from './http';

const API_URL = '/articles';

export const get = async (id) => {
  try {
    return await http.get(`${API_URL}/${id}`);
  } catch (error) {
    return error.response;
  }
};

export const articleList = async () => {
  try {
    return await http.get(`${API_URL}`);
  } catch (error) {
    return error.response;
  }
};

export const create = async (data) => {
  try {
    return await http.post(`${API_URL}`, data);
  } catch (error) {
    return error.response;
  }
};

export const update = async (id, data) => {
  try {
    return await http.put(`${API_URL}/${id}`, data);
  } catch (error) {
    return error.response;
  }
};

export const remove = async (id) => {
  try {
    return await http.delete(`${API_URL}/${id}`);
  } catch (error) {
    return error.response;
  }
};

export default {
  create,
  articleList,
  get,
  update,
  remove,
};
