import axios, { AxiosRequestConfig } from 'axios';
import TokenService from '../token';

const baseUrl = import.meta.env.VITE_URL_API;

const api = axios.create({
  baseURL: baseUrl,
  headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
});

api.interceptors.request.use(
  (config: AxiosRequestConfig<any>) => {
    const { authData } = TokenService.getAuthData();

    if (config && authData) {
      config.headers = {
        'Authorization': `Bearer ${authData?.token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      };
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
