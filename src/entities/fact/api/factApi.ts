import axios from 'axios';

export const factApi = axios.create({
  baseURL: 'https://catfact.ninja/fact',
});
