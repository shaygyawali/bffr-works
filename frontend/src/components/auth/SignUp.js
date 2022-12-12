import { useState } from "react";
import Component from "react";
import axios from "axios";
import "./SignUp.css";
import { Routes, Route, useNavigate, useRevalidator } from "react-router-dom";
import SpotifyAuth from "./SpotifyAuth";
// import dotenv from "dotenv";
// dotenv.config();


function SignUp() {
  // new line start
  const [profileData, setProfileData] = useState(null);
  const [userNumber, setUserNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [userID, setUserID] = useState("");
  const [statusMessage, setStatusMessage] = useState("none");
  const [statusMessage2, setStatusMessage2] = useState("none");
  const [statusMessage3, setStatusMessage3] = useState("none");
  const [statusMessage4, setStatusMessage4] = useState("none");

  

  let names = [
    "Nicki Minaj",
    "Taylor Swift",
    "Childish Gambino",
    "Drake",
    "Brent Faiyaz",
    "Harry Styles",
    "Steve Lacey",
    "Ur Mom",
    "Hasbulla",
  ];
  let phName = names[Math.floor(Math.random() * names.length)];

  function updateNumber(evt) {
    setUserNumber(evt.target.value);
    setStatusMessage("none");
    console.log("THIS IS NUMBER:   "+userNumber);
  }

  function updateName(evt) {
    setUserName(evt.target.value);
    setStatusMessage2("none");
    console.log("THIS IS NAME:   "+userName);
  }

  function updatePwd(evt){
    setUserPwd(evt.target.value);
    setStatusMessage3("none");
    console.log("THIS IS PWD:   " + userPwd);
  }

  function updateID(evt){
    setUserID(evt.target.value);
    setStatusMessage4("none");
    console.log("THIS IS USERID:   "+userID);
  }
  let navigate = useNavigate();

//CREATE USER
  const createUser = async (event) => {
    event.preventDefault();
    const user = {
      name: userName,
      username: userID,
      password: userPwd,
      number: userNumber,
      friendsList: [],
      pendingFriendsList: [],
      checkedIn: false
    };
    try{
      await axios
        .post(`http://localhost:3001/user/createUser`, user)
        .catch(function(res){
          console.log("check response after creating user: ", res);
        })
        .then(function(res) {
          console.log(res.data.stat)
          if(res.data.stat == true){
            console.log("CAN CREATE USER")
          } else {console.log("nah")}
          console.log("checking execution ==> " + res.status);
        })
    }catch (err) {
      alert(err);
    }
  }


//ONCE SUCCESSFUL, CALL ROUTECHANGE
  // const routeChange = async (event) => {

  //   console.log(userNumber);
  //   if (userNumber.length > 12 || userNumber.length < 12) {
  //     setStatusMessage("Phone number not valid");
  //   }
  //   if (userName.length < 4) {
  //     setStatusMessage2("Username too short");
  //   } else {
  //     console.log(user);
  //     await axios

  //       .post(`${process.env.REACT_APP_BACKEND_URL}/api/users/`, { user })
  //       .then((res) => {
  //         console.log(res);
  //         console.log(res.data);
  //       });
      
  //   }
  // };

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
        <div class="signUpContainer">
          <form>
            <h2 class="numberTxt"> Name </h2>

            <input
              class="phoneInput"
              type="text"
              name="name"
              placeholder={phName}
              maxlength="50"
              onChange={(evt) => updateName(evt)}
            />
            {(statusMessage2 != "none") === true ? (
              <p class="statusMessage"> {statusMessage2} </p>
            ) : null}

            <h2 class="numberTxt"> Phone Number </h2>

            <input
              class="phoneInput"
              type="tel"
              name="num"
              placeholder="000-000-0000"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              maxlength="12"
              onChange={(evt) => updateNumber(evt)}
            />
            {(statusMessage != "none") === true ? (
              <p class="statusMessage"> {statusMessage} </p>
            ) : null}

            <h2 class="numberTxt"> Password </h2>
            <input
              class="pwdInput"
              type="text"
              name="Password"
              maxlength="50"
              onChange={(evt) => updatePwd(evt)}
            />
            {(statusMessage2 != "none") === true ? (
              <p class="statusMessage"> {statusMessage3} </p>
            ) : null}

            <h2 class="numberTxt"> Username </h2>
            <input
              class="userIDInput"
              type="text"
              name="UserID"
              maxlength="50"
              onChange={(evt) => updateID(evt)}
            />
            {(statusMessage2 != "none") === true ? (
              <p class="statusMessage"> {statusMessage3} </p>
            ) : null}

            <button
              class="submitButton"
              type="submit"
              onClick={createUser}
              value="Log In -->"
            >
              {" "}
              Sign Up{" "}
            </button>
          </form>
        </div>

        <h2 class="createAccountTxt">
          <a href="/" style={{ textDecoration: "none" }}>
            Already Registered? Log In
          </a>
        </h2>
      </div>
    </div>
  );
}

export default SignUp;
