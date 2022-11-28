import { useState } from "react";
import Component from "react";
import axios from "axios";
import "./SignUp.css";
import { Routes, Route, useNavigate } from "react-router-dom";

function SignUp() {
  // new line start
  const [profileData, setProfileData] = useState(null);
  const [userNumber, setUserNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [statusMessage, setStatusMessage] = useState("none");
  const [statusMessage2, setStatusMessage2] = useState("none");

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
    console.log(userNumber);
  }

  function updateName(evt) {
    setUserName(evt.target.value);
    setStatusMessage2("none");
    console.log(userName);
  }

  let navigate = useNavigate();
  // const routeChange = () => {
  //   console.log(userNumber);
  //   if (userNumber.length > 12 || userNumber.length < 12) {
  //     setStatusMessage("Phone number not valid");
  //   }
  //   if (userName.length < 4) {
  //     setStatusMessage2("Username too short");
  //   } else {
  //     let path = "../phone-verify";
  //     navigate(path, { state: { number: "6464622111", name: "shay" } });
  //   }
  // };
  const routeChange = (event) => {
    event.preventDefault();
    const user = {
      // name: userName,
      // username: userName,
      // password: userNumber,
      // number: userNumber,
      // friendsList: [],
      // checkedIn: true,
      name: "medha",
      username: "medha4",
      password: "703-270-8086",
      number: "703-270-8086",
      friendsList: ["hello", "banana"],
      checkedIn: true,
    };
    console.log(userNumber);
    if (userNumber.length > 12 || userNumber.length < 12) {
      setStatusMessage("Phone number not valid");
    }
    if (userName.length < 4) {
      setStatusMessage2("Username too short");
    } else {
      console.log(user);
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/api/users/`, { user })
        .then((res) => {
          console.log(res);
          console.log(res.data);
        });
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

            <button
              class="submitButton"
              type="submit"
              onClick={routeChange}
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
