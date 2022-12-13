import express from 'express'
import cors from "cors";
import bodyParser from 'body-parser'

import router from './routes/users.js'
const app = express()

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