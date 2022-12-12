import express from "express";
import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";


const router = express.Router();

//get all users
router.get("/", getUsers);

//get a single user
router.get("/:id", getUser);

//post a new user
router.post(
  '/createUser', 
  async (req, res) => {
    console.log(req.body)
    try{
      let userFinal = await createUser(req, res)
      res.status(200).send(userFinal);
    }
    catch(err){
      console.log("Error: " + err)
      res.status(400).json({error: err.message});
    }
});

//delete a user
router.delete("/:id", deleteUser);

//update a user
router.patch("/:id", updateUser);


export default router;
