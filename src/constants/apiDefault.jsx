import axios from 'axios';

 const instance = axios.create({
  baseURL: 'https://your-delivery-by-sayshn.onrender.com/api/',
});

export default instance;
