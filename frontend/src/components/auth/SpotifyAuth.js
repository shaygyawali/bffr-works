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
  const SECRET_KEY = "af17e40b326342cca3dbf1b6810cde9d";
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
  // url += '&state=' + encodeURIComponent(state);

  //https://accounts.spotify.com/authorize?response_type=token&client_id=84fb2e6474644740868e43ea3da113a2&scope=user-read-currently-playing&redirect_uri=http://localhost:3000/feed



  const [token, setToken] = useState("");
  const [path, setPath] = useState("");

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