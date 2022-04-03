import axios from 'axios';

const API = axios.create({
  baseURL: 'https://authline-server.herokuapp.com/v1',
  withCredentials: true,
});

export default API;
