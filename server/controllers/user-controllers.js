const { User, Movie } = require("../models"); // require models
const { signToken } = require("../utils/auth");

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
      .populate({
        path: "savedMovies", // is this right?
        select: "-__v",
      })
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

  //create a new user - test the async function
  async createUser(req, res) {
    console.log(req.body)
    const user = await User.create(req.body.userData);

    if (!user) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },

  //post user login - test the async function
  async userLogin(req, res) {
    // console.log(req.body);
    const email = req.body.userData.email
    const password = req.body.userData.password
    // const user = await User.findOne({ $or: [{ email: req.body.email }, { password: req.body.password }] });
    const user = await User.findOne({email, password});
    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await user.isCorrectPassword(req.body.userData.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Wrong password!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },

  //update a user
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true }) //new returns updated document
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },

  //delete a user
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id" });
          return;
        }
        res.json({ message: "User successfully deleted" });
      })
      .catch((err) => res.status(400).json(err));
  },

  //add movie
  addMovie(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id }, //find user by id
      { $push: { savedMovies: body } }, //would this be body or id?
      { new: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          return res
            .status(404)
            .json({ message: "No user found with this Id" });
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  //delete movie
  deleteMovie(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { savedMovies: { movieID: params.movieID } } },
      { new: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          return res
            .status(404)
            .json({ message: "No user found with this id" });
        }
        res.json({ message: "Movie successfully deleted" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = userController;
