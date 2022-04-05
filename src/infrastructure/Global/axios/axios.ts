import axios from 'axios';

const API = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000/v1'
      : 'https://authline-server.herokuapp.com/v1',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    creditials: 'include',
  }
});

export default API;
