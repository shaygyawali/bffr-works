import User from "../models/userModel.js";
import mongoose from "mongoose";

//get all users
export const getUsers = async () => {
  try{
    const users = await User.find({}).sort({ createdAt: -1 }); //User.find({checkedIn: true}) finds all users that are checked in
    return users
  }
  // catch login errors
  catch(error){
    console.log(error)
  }
};

//login
export const login = async (req, res) => {
  //function to search for a user  
  const loginInfo = 
  { number: req.body.number,
    password: req.body.password
  }
  let singleUser = await User.findOne({'number': loginInfo.number})
  if(!singleUser){
    return res.json({stat: false})
  }else{
      //Send these to frontend: username, friendsList, song, checkedin
    return res.send({data: {
    username: singleUser.username,
    friendsList: singleUser.friendsList,
    checkedIn: singleUser.checkedIn,
    song: singleUser.song,
    number: singleUser.number
    }});
  }  
};
 
export const friendSongs = async (req,res) => {
  const userInfo = {
    number: req.body.number,
    friends: req.body.friendsList
  }
  
  const friendsSongs = []

  let singleUser = await User.findOne({'number': userInfo.number})
  console.log("FRIEND LIST: " + Object.keys(singleUser.friendsList).length)
  let friendsCount = Object.keys(singleUser.friendsList).length
  for(let i = 0; i <friendsCount; i++){
    let friendID = singleUser.friendsList[i]
    console.log("👆🏽" + friendID)
    let friend = await User.findOne({_id: friendID})
    console.log(friend)
    if(friend.checkedIn == true){
      console.log("found" + friend)
      let friendSongInfo = {
        name: friend.name,
        title: friend.song.title,
        artist: friend.song.artist,
        image: friend.song.songImage,
        link: friend.song.songLink
      }
      friendsSongs.push(friendSongInfo)
    } else {
      console.log("not checked in")
    }

    console.log("all " + friendsSongs)

    return res.send(friendsSongs)
  }

}

//create a new user
export const createUser = async (req,res) => {
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
  // console.log('allUsers: ' +  allUsers)

  for(const key in allUsers){
    if(allUsers[key].number == user.number || allUsers[key].username == user.username){
      return res.json({stat: false})
    }
  }

  const userFinal = await User.create(user);
  // console.log("finalUser " + userFinal)
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
