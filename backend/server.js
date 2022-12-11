import cors from "cors";

import express from "express";

import bodyParser from "body-parser";

//express app
const app = express();
import mongoose from "mongoose";
import { userRoutes } from "./routes/users.js";
import connectDB from "./db/conn.js";

// create application/json parser
var jsonParser = bodyParser.json();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

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

app.use("/api/users", urlencodedParser, userRoutes);

connectDB(); //this function connects us to the DB!!!
