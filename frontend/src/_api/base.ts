import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.API_URL,
  withCredentials: true,
});

export default instance;