import axios from 'axios';

const request = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

// trước hàm có từ async thì hàm sẽ trả về 1 promise
export const get = async (path, option = {}) => {
  const response = await request.get(path, option);
  return response.data;
};

export default request;
