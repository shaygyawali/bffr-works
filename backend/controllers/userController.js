// const User = require("../models/userModel");
// const mongoose = require("mongoose");

import User from "../models/userModel.js";
import mongoose from "mongoose";

//get all users

export const getUsers = async () => {
  try{
    const users = await User.find({}).sort({ createdAt: -1 }); //User.find({checkedIn: true}) finds all users that are checked in
    return users
  }
  catch(error){
    console.log(error)
  }
};

//get a single user

export const getUser = async (req, res) => {
  //function to search for a friend/user
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user" });
  }

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({ error: "No such user" });
  }

  res.status(200).json(user);
};

//create a new user
export const createUser = async (req,res) => {
  console.log(req.body);

  const user =
  { name: req.body.name, 
    username: req.body.username, 
    password: req.body.password, 
    number: req.body.number, 
    friendsList: [], 
    pendingFriendsList: [], 
    checkedIn: false 
  } 

  let allUsers = await getUsers()
  console.log('allUsers: ' +  allUsers)

  for(const key in allUsers){
    if(allUsers[key].number == user.number || allUsers[key].username == user.username){
      return res.json({stat: false})
    }
  }

  

  const userFinal = await User.create(user);
  console.log("finalUser " + userFinal)
  if(userFinal == undefined){
    return res.json({stat: false})
  }
  else {
    return res.json({stat: true})
  }
  //add doc to db
  /*try {
    const userFinal = await User.create(user);
    console.log(userFinal instanceof User)
    return res.status(200).send(true);
  } catch (error) {
    console.log("error when creating user " + error);
    return res.status(400).send(false);
  }*/
};

//delete a user

export const deleteUser = async (req, res) => {
  //to be fully implemented later
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user" });
  }

  const user = await User.findOneAndDelete({ _id: id });

  if (!user) {
    return res.status(404).json({ error: "No such user" });
  }
  res.status(200).json(user);
};

//updare a user

export const updateUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user" });
  }

  const user = await User.findOneAndUpdate({ _id: id, ...req.body });

  if (!user) {
    return res.status(404).json({ error: "No such user" });
  }
  res.status(200).json(user);
};

// module.exports = {
//   getUsers,
//   getUser,
//   createUser,
//   deleteUser,
//   updateUser,
// };

// export const createUser;
// export const getUsers;
// export const getUser;
// export const deleteUser;
// export const updateUser;
