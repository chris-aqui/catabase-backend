// require
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// require routes
const cats = require("./routes/api/catRoutes");
const users = require("./routes/api/userRoutes");

// initilized
const app = express();
const port = process.env.PORT || 5000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// Make connection to Mongo on mlab
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB connection error: ", err));

// temp route
app.get("/", (req, res) => res.send("Hello")); // dont need
// Cats routes
app.use("/api/cats", cats);
app.use("/api/users", users);

// are you listening
app.listen(port, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    port,
    port
  );
});

//ok
