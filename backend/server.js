import express from "express";

import bodyParser from "body-parser";

import dotenv from "dotenv";

import server from "./app.js";
import connectDB from "./db/conn.js";

const port = 5000;

const listener = server.listen(port, () => {
  console.log(`server running on: ${port}`);
});
const close = () => {
  listener.close();
};

connectDB();

// create application/json parser
var jsonParser = bodyParser.json();

var urlencodedParser = bodyParser.urlencoded({ extended: false });
