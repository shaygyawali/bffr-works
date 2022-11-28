import { useState } from 'react';
import Component from 'react';
import axios from "axios";
import './Song.css';
import fire from './fire.png'
import {Routes, Route, useNavigate} from 'react-router-dom'


function SelfSong(props) {

  return (
        <div class = "songInfo">
            <div class = "songDetails">
                <a href={props.songLink}><img src = {props.songImage} class = "songImg"/></a>
                <p class = "songTitle"> {props.song} </p>
                <p class = "artistName"> {props.artist} </p>
            </div>
        </div>
  )
}

export default SelfSong