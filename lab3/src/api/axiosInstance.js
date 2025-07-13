import axios from 'axios';

const API_KEY = 'a39baa471d584f6af16b6f3d39e597fd';

export const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

instance.interceptors.request.use(
  (config) => {
    config.params = config.params || {};
    config.params['api_key'] = API_KEY;
    return config;
  },
  (error) => Promise.reject(error)
);
