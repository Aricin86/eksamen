import http from './http';

const API_IMAGE_UPLOAD_URL = '/upload';

export const upload = async (image) => {
  try {
    const data = new FormData();
    data.append('image', image);
    return await http.post(`${API_IMAGE_UPLOAD_URL}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    return error.response;
  }
};
