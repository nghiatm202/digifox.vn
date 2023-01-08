import axiosClient from './axiosClient';

const countryListApi = {
  getAll(params) {
    const url = '/client/countries';
    return axiosClient.get(url, { params });
  },
};

export default countryListApi;
