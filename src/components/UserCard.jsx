import PropTypes from 'prop-types';
export const UserCard = ({ user }) => {
  const { total, pointsPerMonth } = user;

  return (
    <div>
      <h2>{user.clientName}</h2>
      <span>{total}</span>

      <h3>Points Per Month</h3>
      {Object.keys(pointsPerMonth).map((month) => (
        <div key={month}>
          <span>{month}: </span>
          <span>{pointsPerMonth[month]}</span>
        </div>
      ))}
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
