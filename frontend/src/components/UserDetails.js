// User Details
const UserDetails = ({ user }) => {
  return (
    <div className="user-details">
      <h4>{user.name}</h4>
      <p>
        <strong>Username: </strong> {user.username}
      </p>
      <p>
        <strong>Checked In? </strong> {user.checkedIn}
      </p>
    </div>
  );
};
//need to add spotify song here

export default UserDetails;
