import { splitDataByMonth, calculateRewardPoints } from './calculateRewardPoints.js';

describe('splitDataByMonth', () => {
  test('split for one month', () => {
    const input = [
      {
        id: 3,
        date: '2023-03-15',
        amount: 63.82,
      },
      {
        id: 3,
        date: '2023-03-15',
        amount: 63.82,
      },
      {
        id: 3,
        date: '2023-03-15',
        amount: 63.82,
      },
    ];

    const expected = splitDataByMonth(input);

    expect(expected).toEqual({
      'March 2023': [
        {
          id: 3,
          date: '2023-03-15',
          amount: 63.82,
        },
        {
          id: 3,
          date: '2023-03-15',
          amount: 63.82,
        },
        {
          id: 3,
          date: '2023-03-15',
          amount: 63.82,
        },
      ],
    });
  });

  test('split for two months', () => {
    const input = [
      {
        id: 3,
        date: '2023-04-15',
        amount: 63.82,
      },
      {
        id: 3,
        date: '2023-03-15',
        amount: 63.82,
      },
      {
        id: 3,
        date: '2023-03-15',
        amount: 63.82,
      },
    ];

    const expected = splitDataByMonth(input);

    expect(expected).toEqual({
      'March 2023': [
        {
          id: 3,
          date: '2023-03-15',
          amount: 63.82,
        },
        {
          id: 3,
          date: '2023-03-15',
          amount: 63.82,
        },
      ],
      'April 2023': [
        {
          id: 3,
          date: '2023-04-15',
          amount: 63.82,
        },
      ],
    });
  });

  test('split for three month', () => {
    const input = [
      {
        id: 3,
        date: '2023-03-15',
        amount: 63.82,
      },
      {
        id: 3,
        date: '2023-04-15',
        amount: 63.82,
      },
      {
        id: 3,
        date: '2023-05-15',
        amount: 63.82,
      },
    ];

    const expected = splitDataByMonth(input);

    expect(expected).toEqual({
      'March 2023': [
        {
          id: 3,
          date: '2023-03-15',
          amount: 63.82,
        },
      ],
      'April 2023': [
        {
          id: 3,
          date: '2023-04-15',
          amount: 63.82,
        },
      ],
      'May 2023': [
        {
          id: 3,
          date: '2023-05-15',
          amount: 63.82,
        },
      ],
    });
  });
});

describe('calculateRewardPoints', () => {
  test('Transaction list with all transactions below 50$', () => {
    const input = [
      {
        id: 9,
        date: '2023-03-04',
        amount: 12,
      },
      {
        id: 10,
        date: '2023-03-07',
        amount: 20,
      },
      {
        id: 11,
        date: '2023-03-12',
        amount: 14.66,
      },
      {
        id: 12,
        date: '2023-04-01',
        amount: 38.29,
      },
    ];

    const expected = calculateRewardPoints(input);

    expect(expected).toEqual(0);
  });

  test('Transaction list with transactions for 50$ exactly', () => {
    const input = [
      {
        id: 9,
        date: '2023-03-04',
        amount: 50,
      },
      {
        id: 10,
        date: '2023-03-07',
        amount: 50,
      },
      {
        id: 11,
        date: '2023-03-12',
        amount: 50,
      },
      {
        id: 12,
        date: '2023-04-01',
        amount: 50,
      },
    ];

    const expected = calculateRewardPoints(input);

    expect(expected).toEqual(0);
  });

  test('Transaction list with all transactions between 50$ and 100$', () => {
    const input = [
      {
        id: 9,
        date: '2023-03-04',
        amount: 60,
      },
      {
        id: 10,
        date: '2023-03-07',
        amount: 70,
      },
      {
        id: 11,
        date: '2023-03-12',
        amount: 80,
      },
      {
        id: 12,
        date: '2023-04-01',
        amount: 90,
      },
    ];

    const expected = calculateRewardPoints(input);

    expect(expected).toEqual(100);
  });

  test('Transaction list with transactions for 100$ exactly', () => {
    const input = [
      {
        id: 9,
        date: '2023-03-04',
        amount: 100,
      },
      {
        id: 10,
        date: '2023-03-07',
        amount: 100,
      },
      {
        id: 11,
        date: '2023-03-12',
        amount: 100,
      },
      {
        id: 12,
        date: '2023-04-01',
        amount: 100,
      },
    ];

    const expected = calculateRewardPoints(input);

    expect(expected).toEqual(200);
  });

  test('Transaction list with all transactions over 100$', () => {
    const input = [
      {
        id: 9,
        date: '2023-03-04',
        amount: 110,
      },
      {
        id: 10,
        date: '2023-03-07',
        amount: 120,
      },
      {
        id: 11,
        date: '2023-03-12',
        amount: 130,
      },
      {
        id: 12,
        date: '2023-04-01',
        amount: 140,
      },
    ];

    const expected = calculateRewardPoints(input);

    expect(expected).toEqual(400);
  });

  test('Transaction list with mixed transactions (50$ and 100$)', () => {
    const input = [
      {
        id: 9,
        date: '2023-03-04',
        amount: 55,
      },
      {
        id: 10,
        date: '2023-03-07',
        amount: 120,
      },
      {
        id: 11,
        date: '2023-03-12',
        amount: 72,
      },
      {
        id: 12,
        date: '2023-04-01',
        amount: 113,
      },
    ];

    const expected = calculateRewardPoints(input);

    expect(expected).toEqual(193);
  });
});
