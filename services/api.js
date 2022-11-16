import axios from 'axios'

const api = axios.create({
   baseURL: `https://api.musixmatch.com/ws/1.1`,
});

export default api;
