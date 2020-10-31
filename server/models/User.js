const { Schema, model } = require("mongoose");
const movieSchema = require("./Movie");
//require bcrypt

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    savedMovies: [movieSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password using bcrypt
// -- code here --

//show number of movies saved by a user
userSchema.virtual("movieCount").get(function () {
  return this.savedMovies.length;
});

const User = model("User", userSchema);

module.exports = User;
