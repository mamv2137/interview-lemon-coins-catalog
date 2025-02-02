import { AxiosRequestConfig } from 'axios';
import axiosInstance from './axios';

const api = {
  get: async <T>(url: string, config?: AxiosRequestConfig) => {
    return await axiosInstance.get<T>(url, config);
  },
};

export default api;
