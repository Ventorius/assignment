import { useQuery } from '@tanstack/react-query';
import { getTransactions } from '../api/transactions.js';
import { useRewardProgramData } from '../hooks/useRewardProgramData';

export const RewardsProgram = () => {
  const { data } = useQuery({ queryKey: ['transactions'], queryFn: getTransactions });

  const rewardProgramData = useRewardProgramData(data);

  console.log(rewardProgramData);

  return <div>test</div>;
};
