import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import UserDetails from "./UserDetails";
const Feed = () => {
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
      <div className="feed">
        <h2>Feed</h2>
        <div className="searchUsers">
          (
          {users &&
            users.map((user) => <UserDetails key={user._id} user={user} />)}
        </div>
      </div>
    </>
  );
};

export default Feed;
