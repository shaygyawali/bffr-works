import { useState } from 'react';
import Component from 'react';
import axios from "axios";
import './Song.css';
import fire from './fire.png'
import {Routes, Route, useNavigate} from 'react-router-dom'


function Song(props) {

   

  return (
    <div class="Song">

        <img class = "profilePic" src={props.profilePic}/>
        
        <div class = "songInfo">
            <div class = "songDetails">
                <a href={props.songLink}><img src = {props.songImage} class = "songImg"/></a>
                <p class = "songTitle"> {props.song} </p>
                <p class = "artistName"> {props.artist} </p>
            </div>
        </div>

        <img class = "fire" src={fire}/>

    </div>
  )
}

export default Song