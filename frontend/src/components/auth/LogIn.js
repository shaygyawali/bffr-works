import { useEffect, useState } from "react";
import Component from "react";
import axios from "axios";
import "./LogIn.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
import SpotifyAuth from './SpotifyAuth';

import "intl-tel-input/build/css/intlTelInput.css";

function LogIn() {
  // new line start
  const [profileData, setProfileData] = useState(null);
  const [userNumber, setUserNumber] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [statusMessage, setStatusMessage] = useState("none");

  //SPOTIFY AUTH URL PARSING
  const CLIENT_ID = "84fb2e6474644740868e43ea3da113a2";
  const REDIRECT_URI = "http://localhost:3000/feed";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const scope = 'app-remote-control user-read-playback-state user-modify-playback-state playlist-read-private playlist-read-collaborative user-follow-read user-read-currently-playing user-read-playback-position user-library-modify playlist-modify-private user-read-recently-played playlist-modify-public user-top-read streaming user-library-read';
  const state = "";
  var url = AUTH_ENDPOINT;
  url += '?response_type='+ encodeURIComponent(RESPONSE_TYPE);
  url += '&client_id=' + encodeURIComponent(CLIENT_ID);
  url += '&scope=' + encodeURIComponent(scope);
  url += '&redirect_uri=' + encodeURIComponent(REDIRECT_URI);

  function updateNumber(evt) {
    setUserNumber(evt.target.value);
    setStatusMessage("none");
    console.log(userNumber);
  }
  function updatePwd(evt){
    setUserPwd(evt.target.value);
  }

  //login
  let navigate = useNavigate();
  const loginUser = async (event) => {
    event.preventDefault();
    const loginInfo = {
      password: userPwd,
      number: userNumber
    };
    try{
      await axios
        .post(`http://localhost:3001/user/login`, loginInfo)
        .catch(function(res){
          console.log("check response after login button: ", res);
        })
       .then(function(res) {
          //  console.log(res)
          if(res.data.stat == false){
             console.log("USER NOT FOUND!!")
            setStatusMessage("USER NOT FOUND BITCH")


          } else if(res.data){
              console.log(res.data)
              navigate("/feed", {state:{
                username:res.data.username,
                friendsList:res.data.friendsList,
                checkedIn: res.data.checkedIn,
                song: res.data.song
                }
              });

            }
        })
        //ONCE SUCCESSFUL, CALL ROUTECHANGE
    }catch (err) {
      alert(err);
    }
  }
  /////////////////////////////////////////////////////////////////
{/*
  const routeChange = () => {
    console.log(userNumber);
    if (userNumber.length > 12 || userNumber.length < 12) {
      setStatusMessage("Phone number not valid");
    } else {
      let path = "/feed";
      navigate(path, { state: { token: currentToken, user: user } });
    }
  };
*/}


  //end of new line

  const inputProps = {
    placeholder: "ReactIntlTelInput",
  };

  const intlTelOpts = {
    preferredCountries: ["cn"],
  };

  const value = { iso2: "cn", dialCode: "86", phone: "12345678901" };

  const onChange = (value) => console.log(value);
  const onReady = (instance, IntlTelInput) =>
    console.log(instance, IntlTelInput);

  return (
    <div class="App">
      <span class="dot"></span>
      <span class="dot2"></span>
      <span class="dot3"></span>
      <span class="dot4"></span>

      <div class="accentBalls">
        <span class="dot5"></span>
        <span class="dot6"></span>
      </div>

      <div class="logoHolder">
        <h1 class="title"> BFFR </h1>
        <h2 class="subtitle"> Friends' Music Now </h2>
      </div>

      <div class="mainContainer">
        <div class="loginContainer">

        <form >
            <h2 class = "numberTxt"> Phone Number </h2>

            <input class = "phoneInput" type="tel" name="name" placeholder="000-000-0000"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" maxlength="12" onChange={evt => updateNumber(evt)}/>
            
            <h2 class = "numberTxt"> Password </h2>
            <input class = "phoneInput" type="password" name="Password" onChange={evt => updatePwd(evt)}/>
            { (statusMessage != "none") === true ? (<p class = "statusMessage"> {statusMessage} </p>) : null }

            <button class = "submitButton" type="submit" onClick={loginUser} value="Log In -->" > Log In --> </button>

          </form>
        </div>

        <h2 class="createAccountTxt">
          <a href={"sign-up"} style={{ textDecoration: "none" }}>
            New here? Sign Up
          </a>
        </h2>
      </div>
    </div>
  );
}

export default LogIn;
