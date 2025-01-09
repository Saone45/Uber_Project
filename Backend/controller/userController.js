const userModel = require("../models/userModel");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");

/// register user -->
module.exports.registerUser = async (req, res) => {
  // checking error
  const error = validationResult(req); // error comes in req
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const { fullname, email, password } = req.body;

  // hasing password -->
  const hashedPassword = await userModel.hashPassword(password);

  // creating user -->
  const user = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
  });

  // generating token
  const token = user.generateAuthToken();

  res.status(201).json({ token, user });
};
