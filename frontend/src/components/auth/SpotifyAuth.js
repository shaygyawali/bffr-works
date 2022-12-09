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
  const scope = 'user-read-recently-played user-read-currently-playing' ;
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
      const hash = window.location.hash;
      let token = window.localStorage.getItem("token");
      console.log("THIS IS OUR TOKEN ------>  ",token)


      if(!token && hash){
        token = hash.substring(2).split("&").find(e => e.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("token",token)
        setToken(token)
      }
  },[]);

    //end of new line 

  return (
          <form>
            
             {!token ? <a href={url} >Login to Spotify</a>
            : <button>Logout</button>}
            
          </form>
  )
}

export default SpotifyAuth