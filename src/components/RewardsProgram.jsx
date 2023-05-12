import { useQuery } from '@tanstack/react-query';
import { getTransactions } from '../api/transactions.js';

export const RewardsProgram = () => {
  const { data } = useQuery({ queryKey: ['transactions'], queryFn: getTransactions });

  return <div></div>;
};
