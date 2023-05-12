import { useQuery } from '@tanstack/react-query';
import { getTransactions } from '../api/transactions.js';
import { useRewardProgramData } from '../hooks/useRewardProgramData';
import { UserCard } from './UserCard';

export const RewardsProgram = () => {
  const { data, isLoading } = useQuery({ queryKey: ['transactions'], queryFn: getTransactions });

  const rewardProgramData = useRewardProgramData(data);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col gap-8 items-center">
      {Object.keys(rewardProgramData)?.map((clientId) => {
        const user = rewardProgramData[clientId];

        return <UserCard key={user.clientId} user={user} />;
      })}
    </div>
  );
};
