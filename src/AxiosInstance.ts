// src/axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 1000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('Token');
    console.log(token)
    
    config.headers['Content-Type'] = 'application/json';
    config.headers['Authorization'] = `Bearer ${token}`;
    
    console.log(config)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
    (response) => {
      if (response.status === 404) {
        console.log('404 페이지로 넘어가야 함!');
      }
  
      return response;
    },
    async (error) => {
      if (error.response?.status === 401) {
        // if (error) await tokenRefresh();
        const token = localStorage.getItem('Token');

  
        error.config.headers = {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        };
  
        const response = await axios.request(error.config);
        return response;
      }
      return Promise.reject(error);
    }
  );

export default axiosInstance;
