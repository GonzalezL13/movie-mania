const express = require("express");
const mongoose = require("mongoose");
// const routes = require("./routes");
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//Serve up static assets 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/movies', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// use this to log mongo queries being executed
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));

