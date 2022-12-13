import { useState, useEffect } from "react";
import Component from "react";
import axios from "axios";
import "./Feed.css";
import Song from "./Song";
import SelfSong from "./SelfSong";
import search from "./search.png";
import CheckIn from './CheckIn'
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Navbar from "../Navbar";

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

const SongHold = ({
  userName,
  profilePic,
  song,
  artist,
  songImage,
  songLink,
  pmos,
}) => (
  <Song
    name={userName}
    profilePic={profilePic}
    song={song}
    artist={artist}
    songImage={songImage}
    songLink={songLink}
    pmos={pmos}
  />
);

const SelfSongHold = () => (
  <SelfSong
    song={self.song}
    artist={self.artist}
    songImage={self.songImage}
    songLink={self.songLink}
  />
);

function changeStatus(){
  
}

function Feed() {
  const [token, setToken] = useState("");
  const [checkedInn, setCheckedInn] = useState(false)
  const {state} = useLocation();
  try{
    const {username, friendsList, checkedIn, song, number} =  state
    window.localStorage.setItem('username', username);
    window.localStorage.setItem('friendsList', friendsList)
    window.localStorage.setItem('checkedIn', checkedIn);
    window.localStorage.setItem('song', JSON.stringify(song))
    window.localStorage.setItem('number', number);
    console.log("DATA: " + number + username + friendsList + checkedIn + song.title)
  } catch(err){
    console.log("not exist")
  }


  // Similar to componentDidMount and componentDidUpdate:
  useEffect( () => {
      const getFriendsSongs = async () => {
        let num = window.localStorage.getItem('number')
        let friendsList = window.localStorage.getItem('friendsList')
        const userInfo = {
          number: num,
          friends: friendsList
        };
        try {
          await axios
          .post(`http://localhost:3001/user/getFriendSongs`, userInfo)
          .catch(function(res){
            console.log("idk" + res)
          })
          .then(function(res){
            console.log(res)
          });
        } catch (err){
          alert(err)
        }
      }

      const spotifyPull = async() => {
        console.log("inside spotify pull")
        const client_id = '84fb2e6474644740868e43ea3da113a2'
        const client_secret = 'af17e40b326342cca3dbf1b6810cde9d'
        const serialize = function(obj) {
          var str = [];
          for (var p in obj) {
              if (obj.hasOwnProperty(p)) {
                  str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
              }
          }
          return str.join("&");
      }

        axios
            .post('https://accounts.spotify.com/api/token',
                serialize({
                    grant_type: 'client_credentials'
                }), {
                headers: {
                    'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret),
                }
            })
            .then(function(res) {
              //  console.log(res)
              if(res.data.stat == false){
                 console.log("USER NOT FOUND!!")
    
    
              } else if(res.data){
                console.log("we did it joe")
                  console.log(res.data.access_token)    
                }
            })
            console.log("mommy 3 spotify pull")
  
  
            const response = await 
            axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
              params: {
                  'market': 'US'
              },
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer BQCw15gujMyhB-pLiVQVHqXWGo2ptohzZBqBCUEDg2GU96mOqTLtZsfMSbR0Ttx5N9ZPB6tOJlnekYX7WhlqW4UlygBHHORRHUeZLJhAkNUs6aEw0vrcFPuIsoRBVXXQJzRFyx4BWRp4Rih-WUMXaDABi-tFw9PKNCoOCgRQQ0kMHANizzxkSySuP6QXZ8hfYg' 
              }
            });
  
            //+ localStorage.token
            
  
            //THIS IS THE WORKING OBJECT WITH THE SONG IN IT AHHHHHHH
            console.log("response: ", response)
  
            console.log("just the item: ", response.data.item)
  
            console.log("song name: ", response.data.item.name)
  
            console.log("artist name: ", response.data.item.artists[0].name)
  
            console.log("album artwork: ",response.data.item.album.images[0].url)
  
            console.log("link to the song: ", response.data.item.external_urls.spotify)
  
  
  
      }
    
      /*f(window.localStorage.getItem('checkedIn') == "false"){
        console.log("checkin")
        setCheckedInn(false)
      } else { 
        console.log("hmmm")
        setCheckedInn(true) 
        console.log(checkedInn)
      }*/

      //this is the URL
      const hash = window.location.href;
      //this is the storage
      let storageVal = window.localStorage;
      console.log("THIS IS OUR TOKEN ------>  ",storageVal)
      console.log("And this is the hash ", hash)

      window.localStorage.setItem("token",hash.split("&")[0].split("=")[1])
      setToken(token)

      if(window.localStorage.getItem('token') != "undefined"){
        window.localStorage.setItem("checkedIn", "true")
        spotifyPull()
      }

      console.log("checked INNN" + checkedInn)

      if(window.localStorage.getItem('checkedIn') == "true"){
        console.log("getting frined song")
        getFriendsSongs()
      }



      

  }, []);


  if(window.localStorage.getItem("checkedIn") == "true"){
    return (
      <div class="App">
        {/* <Navbar /> */}
        <div class="header">
          <img class="search" src={search} />
          <p class="headerTitle"> BFFR </p>
          <img class="profilePicture" src={self.profilePic} />
        </div>
  
        <span class="dot"></span>
        <span class="dot2"></span>
        <span class="dot3"></span>
        <span class="dot4"></span>
  
        <div class="selfSong">
          <SelfSongHold />
        </div>
  
        <hr></hr>
  
        <div class="songs">
          {songs.map((s, i) => (
            <SongHold {...s} key={i} />
          ))}
        </div>
      </div>
    );
  }
  else {
    return (
        <div class="App">
        {/* <Navbar /> */}
        <div class="header">
          <img class="search" src={search} />
          <p class="headerTitle"> BFFR </p>
          <img class="profilePicture" src={self.profilePic} />
        </div>
  
        <span class="dot"></span>
        <span class="dot2"></span>
        <span class="dot3"></span>
        <span class="dot4"></span>
  
        <div class="selfSong">
          <CheckIn></CheckIn>
        </div>
  
        <hr></hr>


        <div class="songsHide">
          {songs.map((s, i) => (
            <SongHold {...s} key={i}></SongHold>
          ))}
        </div>

      </div>
    );
  }

}

export default Feed;