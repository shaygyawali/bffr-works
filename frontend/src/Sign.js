import { useState } from 'react';
import Component from 'react';
import axios from "axios";
import logo from './logo.svg';

import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';

import ReactIntlTelInput from 'react-intl-tel-input-v2';

function Sign() {

   // new line start
  const [profileData, setProfileData] = useState(null)
  const [userNumber, setUserNumber] = useState("000-000-0000")

  function updateNumber(evt){
    setUserNumber(evt)
    console.log(userNumber)
  }

  function getData() {
    axios({
      method: "GET",
      url:"/",
    })
    .then((response) => {
      const res =response.data
      setProfileData(({
        profile_name: res.name,
        about_me: res.about}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}
    //end of new line 

    const inputProps = {
      placeholder: 'ReactIntlTelInput',
    };
   
    const intlTelOpts = {
      preferredCountries: ['cn'],
    };
   
    const value = { iso2: 'cn', dialCode: '86', phone: '12345678901' };
   
    const onChange = value => console.log(value);
    const onReady = (instance, IntlTelInput) => console.log(instance, IntlTelInput);

  return (
    <div class="Sign">

        <span class="dot"></span>
        <span class="dot2"></span>
        <span class="dot3"></span>
        <span class="dot4"></span>

        <div class = "accentBalls">
          <span class="dot5"></span>
          <span class="dot6"></span>
        </div>


      <div class="logoHolder">
          <h1 class = "title"> BFFR </h1>
          <h2 class = "subtitle"> Friends' Music Now </h2>
      </div>

      <div class="mainContainer" >

        <div class="loginContainer"> 
          <form>
            <h2 class = "numberTxt"> Name </h2>

            <input class = "phoneInput" type="tel" name="name" placeholder="000-000-0000"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" maxlength="12" onChange={evt => updateNumber(evt)}/>

            <input class = "submitButton" type="submit" value="Log In -->" />
            <p value={userNumber}></p>
          </form>
        </div>

       
          <h2 class = "createAccountTxt"> 
            <a style={{textDecoration: 'none'}}>
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

export default Sign;