import { useQuery } from '@tanstack/react-query';
import { getTransactions } from '../api/transactions.js';
import { calculateRewardPoints, splitDataByUser } from '../utils/calculateRewardPoints.js';

export const RewardsProgram = () => {
  const { data } = useQuery({ queryKey: ['transactions'], queryFn: getTransactions });

  const res = splitDataByUser(data);

  console.log(res);

  if (data) {
    const perMonthPoints = Object.keys(res).map((key) => {
      const points = calculateRewardPoints(res[key]);
      return { month: key, points };
    });

    console.log(perMonthPoints);
  }

  return <div>test</div>;
};
