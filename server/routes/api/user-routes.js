const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  userLogin,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controllers");

// set up GET all and POST at api/users
router.route("/").get(getAllUsers).post(createUser);

router.route("/login").post(userLogin);

// //Set up GET one, PUT, and DELETE at api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;