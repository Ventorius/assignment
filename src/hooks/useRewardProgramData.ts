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

    acc[key] = { total, pointsPerMonth, clientName: res[key][0].clientName, clientId: res[key][0].clientId };

    return acc;
  }, {});
};
