import { useState } from "react";
import Component from "react";
import axios from "axios";
import "./CheckIn.css";



const self = {
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

const songs = [
  {
    userName: "Ellie",
    profilePic:
      "https://s.wsj.net/public/resources/images/BN-BN985_goodlu_G_20140216163547.jpg",
    song: "YOU'RE THE ONE",
    artist: "KAYTRANADA",
    songImage:
      "https://media.pitchfork.com/photos/5929b5ae5e6ef959693227e9/1:1/w_600/ac919768.jpg",
    songLink:
      "https://open.spotify.com/track/70kdJnm1X6eEM8DbWa8Mnc?si=f72507ecb1544e7c",
    pmos: 1,
  },
  {
    userName: "Medha",
    profilePic:
      "https://static1.personality-database.com/profile_images/0b8bbabd562c44938df2c649a7de4d04.png",
    song: "Maroon",
    artist: "Taylor Swift",
    songImage:
      "https://upload.wikimedia.org/wikipedia/en/9/9f/Midnights_-_Taylor_Swift.png",
    songLink:
      "https://open.spotify.com/track/3eX0NZfLtGzoLUxPNvRfqm?si=92f9376502bb4ad7",
    pmos: 2,
  },
  {
    userName: "Omri",
    profilePic:
      "https://m.media-amazon.com/images/M/MV5BMTU3MzM4ODgzOV5BMl5BanBnXkFtZTgwOTIwNTc3MjE@._V1_QL75_UY281_CR93,0,190,281_.jpg",
    song: "Nostalgia",
    artist: "Chance the Rapper",
    songImage:
      "https://images.squarespace-cdn.com/content/v1/54930dc1e4b029df98af9a8a/1444980607470-FXB9SB3ZEIWX6HSKVR1F/image-asset.jpeg",
    songLink:
      "https://open.spotify.com/track/34oFssnMdj7HNZRX7L98pT?si=97704cbd53594cbb",
    pmos: 3,
  },
  {
    userName: "Shrey",
    profilePic:
      "https://resizing.flixster.com/3fQXIY9pLrPDVRnKhOTen2nK7no=/300x300/v2/https://flxt.tmsimg.com/assets/p8058346_e_h9_ad.jpg",
    song: "Bejeweled",
    artist: "Taylor Swift",
    songImage:
      "https://upload.wikimedia.org/wikipedia/en/9/9f/Midnights_-_Taylor_Swift.png",
    songLink:
      "https://open.spotify.com/track/3qoftcUZaUOncvIYjFSPdE?si=bd5ba95b1d0a4bc8",
    pmos: 4,
  },
  {
    userName: "Shay",
    profilePic:
      "https://static1.personality-database.com/profile_images/a8f4be87e47949c7af1df06bd099e58b.png",
    song: "Law of Attraction",
    artist: "Dave, Snoh Aalegra",
    songImage:
      "https://media.pitchfork.com/photos/60f888ec2e77ffecd64d6378/1:1/w_600/Dave.jpeg",
    songLink:
      "https://open.spotify.com/track/25tXNghelZKdGZZVoSL9Yg?si=6c7a996a004d4d02",
    pmos: 5,
  },
];

function pullInfo(){
    //pull info here
    console.log("blah blah");
}



function CheckIn(props) {
    return (
      <div class="checkIn">
            <input
              class="submitButton"
              type="submit"
              onClick={pullInfo}
              value="BFFR RN"
            />
            <h3 class = "checkInNote"> Check in now to see your friends' music </h3>
      </div>
    );
}

export default CheckIn;
