import axiosClient from './axiosClient';

const courseApi = {
  getAll(params) {
    const url = '/client/courses';
    return axiosClient.get(url, { params });
  },

  get(id) {
    const url = `/client/courses/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = '/client/courses';
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/client/courses/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/client/courses/${id}`;
    return axiosClient.delete(url);
  },
};

export default courseApi;
