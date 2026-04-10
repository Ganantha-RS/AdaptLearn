import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add interceptors for tokens or logging
api.interceptors.request.use(
  (config) => {
    // If you use JWT, you can add it here
    // const session = localStorage.getItem('userSession');
    // if (session) {
    //   const { token } = JSON.parse(session);
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Global error handling can be done here
    return Promise.reject(error);
  }
);

export default api;
