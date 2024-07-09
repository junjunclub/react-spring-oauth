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
    return response;
  },
  async (error) => {
    console.log('응답실패')
    const originalRequest = error.config;
    console.log(originalRequest)
    if (error.response && error.response.status === 401 && error.response.data === "access token expired") {
      try {
        const response = await axios.post('http://localhost:8080/api/user/reissue', {}, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        let token = response.data.accessToken
        console.log('====')
        console.log(token)
        localStorage.setItem('Token', response.data.accessToken);
        originalRequest.headers['Authorization'] = `Bearer ${response.data.accessToken}`;
        return axiosInstance(originalRequest);
      } catch (err) {
        console.log('Error!')
        console.error('Token reissue failed:', err);
        localStorage.removeItem('Token');
        window.location.href = '/login'; // or any other action to handle the situation
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
