import axios from 'axios';
import { TLocalStorage } from 'types/localstorage';

export const private_axios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

private_axios.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(TLocalStorage.ACCESSTOKEN);

  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});
