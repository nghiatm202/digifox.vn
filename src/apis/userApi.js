import axiosClient from './axiosClient';

const userApi = {
  register(data) {
    const url = '/client/auth/register';
    return axiosClient.post(url, data);
  },

  login(data) {
    const url = '/client/auth/login';
    return axiosClient.post(url, data);
  },

  changePassword(data) {
    const url = '/client/user/password';
    return axiosClient.post(url, data);
  },

  forgotPassword(data) {
    const url = '/client/auth/forgot-password';
    return axiosClient.post(url, data);
  },

  purchasedCourses(params) {
    const url = '/client/user/purchased-courses';
    return axiosClient.get(url, { params });
  },
};

export default userApi;
