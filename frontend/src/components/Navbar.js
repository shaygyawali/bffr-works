import { Link } from "react-router-dom";
//feel free to rename className based on css
//need to update the sign out feature after oauth
const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/feed">
          <h1>BFFR</h1>
        </Link>
        <Link to="/profile">
          <h1>Profile</h1>
        </Link>
		<Link to="/">
          <h1>Sign Out</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
