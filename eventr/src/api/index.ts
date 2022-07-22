import axios from 'axios';

export const events = axios.create({
  baseURL: 'http://localhost:8291',
});
