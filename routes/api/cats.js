const express = require("express");
const router = express.Router();
const Cat = require("../../models/Cat");

// @router  GET to /api/cats/all
// @desc    List of all cats in db
// @access  Private

router.get("/cats", (req, res) =>
  res.json({
    msg: "Cats Works"
  })
);

// @router  GET to /api/cats/all
// @desc    List of all cats in db
// @access  Private

router.get("/all", (req, res) =>
  res.json({
    msg: "Cats Works"
  })
);

// @router  GET to /api/cats/all
// @desc    List of all cats in db
// @access  Private
router.post("/add", (req, res) =>
  res.json({
    msg: "Cats Works"
  })
);

module.exports = router;

//  ok
