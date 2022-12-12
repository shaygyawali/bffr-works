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
  async (res, req) => {
    const username = req.params.userName
    console.log(username)
    return res.json(res)
  });

//delete a user
router.delete("/:id", deleteUser);

//update a user
router.patch("/:id", updateUser);

// module.exports = router;
// export default router;

module.exports = {default: router};
// export { userRoutes as userRoutes };
