// require
const express = require("express");
var session = require("express-session");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require('cors')


// require routes
const cats = require("./routes/api/catRoutes");
const users = require("./routes/api/userRoutes");
const owners = require("./routes/api/ownerRoutes");
const shelters = require("./routes/api/shelterRoutes");
const fosters = require("./routes/api/fosterRoutes");
const vets = require("./routes/api/vetRoutes");

// initilized
const app = express();
const port = process.env.PORT || 5000;
app.use(cors())

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
// Using express session cookies
app.use(
  session({
    secret: "work hard",
    resave: true,
    saveUninitialized: false
  })
);
// Cats routes
app.use("/api/cats", cats);
app.use("/api/users", users);
app.use("/api/owners", owners);
app.use("/api/vets", vets);
app.use("/api/shelters", shelters);
app.use("/api/fosters", fosters);

// are you listening
app.listen(port, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    port,
    port
  );
});

//ok
