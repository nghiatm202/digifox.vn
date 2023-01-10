import axios from 'axios';
import { StorageKeys } from '../constants';

// console.log(localStorage.getItem(StorageKeys.TOKEN));

const axiosClient = axios.create({
  baseURL: 'http://api.dc.edu.vn/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem(StorageKeys.TOKEN)}`,
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default axiosClient;
