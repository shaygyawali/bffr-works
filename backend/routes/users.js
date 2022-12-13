import express from "express";
import {
  createUser,
  getUsers,
  // getUser,
  deleteUser,
  updateUser,
  login
} from "../controllers/userController.js";


const router = express.Router();

//get all users
router.get("/", getUsers);

//get a single user
// router.get(
//   "/getUser", 
//   // async (req, res) => {
//   //   let foundUser = await getUser(req,res)
//   //   return res.send("is this working??");
//   // }
//   );

//login
router.post(
  '/login',
  async (req, res) => {
  let a = await login(req, res)
  // return res.json({stat: res.data.stat})
});

router.get(
  '/getFriendSongs',
  async (req, res) => {
    console.log("will get friends songs")
  })

//post a new user
router.post(
  '/createUser', 
  async (req, res) => {
    let success = await createUser(req,res)
    return res.json({stat: res.data.stat})
});

//delete a user
router.delete("/:id", deleteUser);

//update a user
router.patch("/:id", updateUser);



export default router;
