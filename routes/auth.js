const express = require("express");
const router = express.Router();

// @route           GET api/auth
// @desc            Get logged user
// @access          Private
router.get("/", (req, res) => {
  res.send("Get logged user");
});

// @route           POST api/auth
// @desc            Auth user & get token
// @access          Public
router.post("/", (req, res) => {
  res.send("Login user");
});

module.exports = router;
