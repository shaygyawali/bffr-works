import express from 'express'
import cors from "cors";
import bodyParser from 'body-parser'

import router from './routes/users.js'
const app = express()

// const SECRET_KEY = "af17e40b326342cca3dbf1b6810cde9d";
// const CLIENT_ID = "84fb2e6474644740868e43ea3da113a2";
// const REDIRECT_URI = "http://localhost:3000/feed";
// const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
// const RESPONSE_TYPE = "token";
// const scope = 'app-remote-control user-read-playback-state user-modify-playback-state playlist-read-private playlist-read-collaborative user-follow-read user-read-currently-playing user-read-playback-position user-library-modify playlist-modify-private user-read-recently-played playlist-modify-public user-top-read streaming user-library-read';
// const state = "";
// const SpotifyWebApi = require("spotify-web-api-node");
// const spotifyAuthAPI = new SpotifyWebApi({
// clientId: CLIENT_ID,
// clientSecret: SECRET_KEY,
// redirectUri: REDIRECT_URI,
// });
// app.get("/spotify", (req, res) => {
//   const scopes = ["user-top-read"];
//   const loginLink = spotifyAuthAPI.createAuthorizeURL(scopes);
//   res.redirect(loginLink);
// });

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//middleware
app.use((req, res, next) => {
    console.log("uhhhh" + req.path, req.method, req.body);
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )
    next();
  });
  
  app.use(
    cors({
      methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    })
  );
  
  //routes
  app.get("/", (req, res) => {
    res.json({ message: "Welcome to the App!" });
  });
  
app.use('/user', router)

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

export default app;

// module.exports = app