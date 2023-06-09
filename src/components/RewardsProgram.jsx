import { useQuery } from '@tanstack/react-query';
import { getTransactions } from '../api/transactions.js';
import { useRewardProgramData } from '../hooks/useRewardProgramData';
import { UserCard } from './UserCard';
import { Loader } from './Loader.jsx';

export const RewardsProgram = () => {
  const { data, isLoading } = useQuery({ queryKey: ['transactions'], queryFn: getTransactions });

  const rewardProgramData = useRewardProgramData(data);

  if (isLoading)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Loader />
      </div>
    );

  return (
    <div className="flex flex-col gap-8 items-center">
      {Object.keys(rewardProgramData)?.map((clientId) => {
        const user = rewardProgramData[clientId];

        return <UserCard key={user.clientId} user={user} />;
      })}
    </div>
  );
};
