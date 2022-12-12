import express from 'express'
import cors from "cors";

import router from './routes/users.js'
const app = express()

app.use(express.json())

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
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

export default app

// module.exports = app