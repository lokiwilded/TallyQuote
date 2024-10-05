import axios from 'axios';

// Replace with the URL of your backend deployed on Render
const axiosInstance = axios.create({
  baseURL: 'https://tallyquote-backend.onrender.com',
});

export default axiosInstance;
