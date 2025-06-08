
import axios from 'axios';

// Create axios instance with base URL
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle response and errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle authentication errors
    if (error.response && error.response.status === 401) {
      // Clear local storage and redirect to login if unauthorized
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      
      if (window.location.pathname !== '/account') {
        window.location.href = '/account';
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;

// Auth API
export const authApi = {
  register: (data: any) => apiClient.post('/api/auth/register', data),
  login: (data: any) => apiClient.post('/api/auth/login', data),
  getProfile: () => apiClient.get('/api/auth/profile'),
};

// Products API
export const productsApi = {
  getAll: (params?: any) => apiClient.get('/api/products', { params }),
  getById: (id: string) => apiClient.get(`/api/products/${id}`),
  getByCategory: (category: string) => apiClient.get(`/api/products/category/${category}`),
};

// Orders API
export const ordersApi = {
  getAll: () => apiClient.get('/api/orders'),
  getById: (id: string) => apiClient.get(`/api/orders/${id}`),
  create: (data: any) => apiClient.post('/api/orders', data),
};

// Reviews API
export const reviewsApi = {
  getByProduct: (productId: string) => apiClient.get(`/api/reviews/product/${productId}`),
  getUserReviews: () => apiClient.get('/api/reviews/user'),
  create: (data: any) => apiClient.post('/api/reviews', data),
  delete: (id: string) => apiClient.delete(`/api/reviews/${id}`),
};
