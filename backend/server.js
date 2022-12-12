import express from "express";

import bodyParser from "body-parser";

import dotenv from 'dotenv'

import app from './app.js'

const port = 3001

//express app
import mongoose from "mongoose";
import  router  from "./routes/users.js";
import connectDB from "./db/conn.js";

const listener = server.listen(port, () => {
  console.log(`server running on: ${port}`)
})
const close = () => {
  listener.close()
}

// create application/json parser
var jsonParser = bodyParser.json();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

//app.use("/api/users", urlencodedParser, userRoutes);

connectDB(); //this function connects us to the DB!!!

