import { useEffect, useState } from "react";
import Navbar from "./Navbar";
const Profile = () => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const json = await response.json();

      if (response.ok) {
        setUsers(json);
      }
    };

    fetchUsers();
  }, []);
  return (
    <>
      <Navbar />
      <div className="profile">
        <h2 style={{ marginTop: 200, textAlign: "center" }}>
          Welcome to your Profile!
        </h2>
        <div className="searchUsers">
          {users && users.map((user) => <p key={user._id}>{user.name}</p>)}
        </div>
      </div>
    </>
  );
};

export default Profile;
