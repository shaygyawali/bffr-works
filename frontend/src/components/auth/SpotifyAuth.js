import { useEffect, useState } from 'react';
import Component from 'react';
import axios from "axios";
import './LogIn.css';
import {Routes, Route, useNavigate} from 'react-router-dom'
import SignUp from './SignUp'

import 'intl-tel-input/build/css/intlTelInput.css';

function SpotifyAuth() {
  /* */
  //Spotify login link constants
  const CLIENT_ID = "84fb2e6474644740868e43ea3da113a2";
  const REDIRECT_URI = "http://localhost:3000/feed";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const scope = 'user-read-currently-playing'
  const state = "";
  var url = AUTH_ENDPOINT;
  url += '?response_type='+ encodeURIComponent(RESPONSE_TYPE);
  url += '&client_id=' + encodeURIComponent(CLIENT_ID);
  url += '&scope=' + encodeURIComponent(scope);
  url += '&redirect_uri=' + encodeURIComponent(REDIRECT_URI);
  // url += '&state=' + encodeURIComponent(state);

  const [token, setToken] = useState("");
  const [path, setPath] = useState("");

  //taking token from the url and saving it locally
  useEffect( () => {
    const hash = window.location.href;
    //this is the storage
    let storageVal = window.localStorage;
    console.log("THIS IS OUR TOKEN ------>  ",storageVal)
    console.log("And this is the hash ", hash)


    window.localStorage.setItem("token",hash.split("&")[0].split("=")[1])
    setToken(token)
  },[]);

    //end of new line 

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
          <a href={url} >Login to Spotify</a>
        </form>
      </div>
    </div>
  </div>

  )
}

export default SpotifyAuth