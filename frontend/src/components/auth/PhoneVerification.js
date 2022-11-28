import { useState } from "react";
import Component from "react";
import axios from "axios";
import "./PhoneVerification.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import ReactCodeInput from "react-code-input";

function PhoneVerification() {
  // new line start
  const [profileData, setProfileData] = useState(null);
  const [userNumber, setUserNumber] = useState("000-000-0000");

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

  const { state } = useLocation();
  const { number, name } = state;
  const numLast4 = number.substring(6, 10);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "../feed";
    navigate(path);
  };

  function updateNumber(evt) {
    setUserNumber(evt);
    console.log(userNumber);
  }

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

  const props = {
    inputStyle: {
      fontFamily: "inter",
      margin: "4px",
      MozAppearance: "textfield",
      width: "40px",
      borderRadius: "3px",
      fontSize: "14px",
      height: "26px",
      paddingLeft: "7px",
      backgroundColor: "rgba(80, 80, 80, 0.5)",
      color: "white",
      border: "none",
      spinnerColor: "rgba(80, 80, 80, 0.0)",
    },
    inputStyleInvalid: {
      fontFamily: "monospace",
      margin: "4px",
      MozAppearance: "textfield",
      width: "40px",
      borderRadius: "3px",
      fontSize: "14px",
      height: "26px",
      paddingLeft: "7px",
      backgroundColor: "black",
      color: "red",
      border: "1px solid red",
    },
  };

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
        <div class="verifyContainer">
          <form>
            <h2 class="numberTxt"> Phone Number Verify </h2>
            <p> We sent a 5-digit code to your number ending in {numLast4}</p>
            <div className="inputs">
              <ReactCodeInput
                class="codeInput"
                type="number"
                fields={1}
                {...props}
              />
              <ReactCodeInput
                class="codeInput"
                type="number"
                fields={1}
                {...props}
              />
              <ReactCodeInput
                class="codeInput"
                type="number"
                fields={1}
                {...props}
              />
              <ReactCodeInput
                class="codeInput"
                type="number"
                fields={1}
                {...props}
              />
              <ReactCodeInput
                class="codeInput"
                type="number"
                fields={1}
                {...props}
              />
            </div>

            <input
              class="submitButton"
              type="submit"
              onClick={routeChange}
              value="Log In -->"
            />
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

export default PhoneVerification;
