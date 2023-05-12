import axios from 'axios';
import { BASE_URL } from '../config.js';

export const instance = axios.create({
  baseURL: BASE_URL,
});
