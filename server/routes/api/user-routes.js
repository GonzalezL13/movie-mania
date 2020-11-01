const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  Userlogin,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controllers");

// set up GET all and POST at api/users
router.route("/").get(getAllUsers).post(createUser);

router.route("/login").post(Userlogin);

// //Set up GET one, PUT, and DELETE at api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;