import PropTypes from 'prop-types';
export const UserCard = ({ user }) => {
  const { total, pointsPerMonth } = user;

  return (
    <div className="flex flex-col shadow w-full max-w-md rounded-xl p-4 text-slate-900">
      <h2 className="text-xl font-medium">{user.clientName}</h2>

      <div className="flex gap-1">
        <span className="text-sky-700 font-bold">{total}</span>
        <span className="text-slate-500">points</span>
      </div>

      <div className="mt-4">
        <h3>Points in last 3 months</h3>
        {Object.keys(pointsPerMonth).map((month) => (
          <div key={month} className="flex gap-4">
            <span className="w-[90px]">{month} </span>
            <span className="text-sky-700 font-bold w-[30px]">{pointsPerMonth[month]} </span>
            <span className="text-slate-500">points</span>
          </div>
        ))}
      </div>
    </div>
  );
};

//that is legacy solution, with typescript this would be redundant
UserCard.propTypes = {
  user: PropTypes.shape({
    clientName: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    pointsPerMonth: PropTypes.object.isRequired,
  }),
};
