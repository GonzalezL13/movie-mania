const { User, Movie } = require("../models"); // require models

const userController = {
  //get all users
  getAllUsers(req, res) {
    User.find()
      .select("-__v")
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  //get user by id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      //pull in movie data
      // .populate({
      //path: "movies" - movies is the key in the user model
      //})
      .select("-__v")
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  //create a new user
  createUser({ body }, res) {
    User.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
};

module.exports = userController;
