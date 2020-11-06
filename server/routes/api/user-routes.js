const router = require("express").Router();
const { authMiddleware} = require('../../utils/auth');

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
router.route("/:id").delete(deleteUser);
// router.route("/me")
// .get(getUserById)

router.get("/me", authMiddleware, getUserById);

router.put("/", authMiddleware, updateUser);

module.exports = router;