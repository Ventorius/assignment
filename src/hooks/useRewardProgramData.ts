import { splitDataByUser, splitDataByMonth, calculateRewardPoints } from '../utils/calculateRewardPoints';
export const useRewardProgramData = (data) => {
  if (!data) return;

  const res = splitDataByUser(data);

  return Object?.keys(res).reduce((acc, key) => {
    const total = calculateRewardPoints(res[key]);

    const months = splitDataByMonth(res[key]);

    const pointsPerMonth = Object.keys(months).reduce((acc2, month) => {
      acc2[month] = calculateRewardPoints(months[month]);
      return acc2;
    }, {});

    acc[key] = { total, pointsPerMonth };

    return acc;
  }, {});
};
