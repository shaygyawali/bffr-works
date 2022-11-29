import { useEffect, useState } from "react";
import Component from "react";
import axios from "axios";
import "./LogIn.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import SignUp from "./SignUp";

import "intl-tel-input/build/css/intlTelInput.css";

function LogIn() {
  // new line start
  const [profileData, setProfileData] = useState(null);
  const [userNumber, setUserNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [statusMessage, setStatusMessage] = useState("none");

  /* */
  //Spotify login link constants
  const CLIENT_ID = "84fb2e6474644740868e43ea3da113a2";
  const REDIRECT_URI = "http://localhost:3000/feed";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");

  //taking token from the url and saving it locally
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    console.log(token);
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((e) => e.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
      setToken(token);
    }
  }, []);

  function updateNumber(evt) {
    setUserNumber(evt.target.value);
    setStatusMessage("none");
    console.log(userNumber);
  }

  let navigate = useNavigate();
  const routeChange = () => {
    console.log(userNumber);
    if (userNumber.length > 12 || userNumber.length < 12) {
      setStatusMessage("Phone number not valid");
    } else {
      let path = "../phone-verify";
      navigate(path, { state: { number: "6464622111", name: "shay" } });
    }
  };

  function getData() {
    axios({
      method: "GET",
      url: "/",
    })
      .then((response) => {
        const res = response.data;
        setProfileData({
          profile_name: res.name,
          about_me: res.about,
        });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }
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
          <form>
            {/* <h2 class = "numberTxt"> Phone Number </h2>

            <input
              class="phoneInput"
              type="tel"
              name="name"
              placeholder="000-000-0000"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              maxlength="12"
              onChange={(evt) => updateNumber(evt)}
            />

            {(statusMessage != "none") === true ? (
              <p class="statusMessage"> {statusMessage} </p>
            ) : null}


            <button class = "submitButton" type="submit" onClick={routeChange} value="Log In -->" > Log In --> </button> */}

            {/* {!token ?  */}
            <a
              href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
            >
              Login to Spotify
            </a>
            {/* : <button>Logout</button>
            } */}
            <p value={userNumber}></p>
          </form>
        </div>

        <h2 class="createAccountTxt">
          <a href={"sign-up"} style={{ textDecoration: "none" }}>
            New here? Sign Up
          </a>
        </h2>
      </div>
    </div>

    /* <div>
      <center>
      <h1>BFFR</h1><br></br>
      <ul>
        <li><a href="https://bffr.atlassian.net/wiki/spaces/BFFR/pages/1671170/BFFR+Documentation">User Guide</a></li>
        <li><a href="/profile.html">Profile</a></li>
        <li><a href="/feed.html">Feed</a></li>
      </ul>
      <p>Hello World!</p>
      <input placeholder="Email"></input><br></br>
      <input placeholder="Password"></input><br></br>
      <button>Sign Up!</button>
      <br></br>
      <p>Already have an account? Log in</p>
      </center>
    </div>
*/
  );
}

export default LogIn;
