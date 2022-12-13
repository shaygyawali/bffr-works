import { Link } from "react-router-dom";
import "./search/Search.css";
import search from "./feed/search.png";
// import profilePic from "./feed/Feed.js";

export const self = {
  userName: "shaylmao",
  profilePic:
    "https://static1.personality-database.com/profile_images/75b307a6bb904bf68ad869a7611b4666.png",
  checkedIn: false,
  song: "Break You Off",
  artist: "Sonder",
  songImage:
    "https://static.wixstatic.com/media/7809b1_3f1c1efb17ae4739aef5f3e361f6d73b~mv2.png/v1/fill/w_568,h_442,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Sonder%20-%20TLTDY-01.png",
  songLink:
    "https://open.spotify.com/track/3ijLtvQmoX17q1wTgU7SiI?si=879ec6d80ede49a2",
  pmos: 0,
};
// console.log("hi");
// console.log(profilePic);
// console.log("hi");
const Navbar = () => {
  return (
    <div class="header">
      <Link to="/search" class="search" style={{ textDecoration: "none" }}>
        <img class="search" src={search} />
      </Link>
      <Link
        to="/feed"
        class="headerTitle"
        style={{ textDecoration: "none", textAlign: "center" }}
      >
        <p class="headerTitle"> BFFR </p>
      </Link>
      <Link
        to="/profile"
        class="profilePicture"
        style={{ textDecoration: "none" }}
      >
        <img class="profilePicture" src={self.profilePic} />
      </Link>
    </div>
  );
};

export default Navbar;
