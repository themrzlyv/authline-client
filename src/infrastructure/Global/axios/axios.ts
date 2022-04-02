import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:4000/v1', //'https://authline-server.herokuapp.com/v1',
});

export default API;
