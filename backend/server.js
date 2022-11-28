require("dotenv").config();
const cors = require("cors");

const express = require("express");

var bodyParser = require("body-parser");

//express app
const app = express();
const mongoose = require("mongoose");
const usersRoutes = require("./routes/users");

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

app.use("/api/users", urlencodedParser, usersRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("listening on port 4000!");
    });
  })
  .catch((error) => {
    console.log(error);
  });
