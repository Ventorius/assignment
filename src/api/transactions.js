import { instance } from './client.js';

export const getTransactions = async () => {
  const { data } = await instance.get('/transactions');
  return data;
};
