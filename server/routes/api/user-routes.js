const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  userLogin,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controllers");

const { authMiddleware } = require('../../utils/auth');
// set up GET all and POST at api/users
router.route("/").get(getAllUsers).post(createUser);

router.route("/login").post(userLogin);

router.route('/me').get(authMiddleware, getUserById);
// //Set up GET one, PUT, and DELETE at api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;