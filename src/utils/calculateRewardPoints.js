const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const splitDataByMonth = (transactions) => {
  const res = transactions?.reduce((acc, transaction) => {
    const date = new Date(transaction.date);
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const key = `${month} ${year}`;

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(transaction);

    return acc;
  }, {});

  return res;
};

export const calculateRewardPoints = (transactions) => {
  let totalPoints = 0;

  transactions?.forEach((transaction) => {
    const amount = Math.floor(transaction.amount);
    let points = 0;

    if (amount > 100) {
      points += 2 * (amount - 100);
      points += 50; // 1 point for every dollar spent between $50 and $100
    } else if (amount > 50) {
      points += amount - 50;
    }

    totalPoints += points;
  });

  return totalPoints;
};
