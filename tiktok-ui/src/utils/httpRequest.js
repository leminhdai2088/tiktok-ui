import axios from 'axios';
const httpRequest = axios.create({
  // LẤY URL TRONG FILE .ENV
  baseURL: process.env.REACT_APP_BASE_URL,
});

// trước hàm có từ async thì hàm sẽ trả về 1 promise
export const get = async (path, option = {}) => {
  const response = await httpRequest.get(path, option);
  return response.data;
};

export default httpRequest;
