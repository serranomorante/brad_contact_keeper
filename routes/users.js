const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

// @route           POST api/users
// @desc            Register a user
// @access          Public
router.post(
  "/",
  [
    check("name", "Please add name")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({
      min: 6
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); // array es un método que nos da un array de errores.
    }
    const { name, email, password } = req.body;

    try {
      // findOne es un método de mongoose y permite encontrar el usuario según el campo escogido
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }

      user = new User({
        // crea una nueva instancia de un usuario
        name,
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);

      // da una hash version de la contraseña
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      // objeto que quiero enviar con el token
      const payload = {
        user: {
          // con esta id podríamos acceder a todos los contactos que el usuario logeado tiene
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          // en cuánto tiempo expira el token
          expiresIn: 360000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(err.message);
      res.status(400).send("Server error");
    }
  }
);

module.exports = router;
