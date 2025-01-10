const userModel = require("../models/userModel");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
const blacklistTokenModel = require("../models/blacklist.model");

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

// login User -->
module.exports.loginUser = async (req, res) => {
  // if error occurs
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  // bringing email and password from body
  const { email, password } = req.body;

  const user = await userModel.findOne({ email }).select("+password");

  // if user not found -->
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // Matching  Password -->
  const isMatch = await user.comparePassword(password);

  // if password not found -->
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  /// generating token -->
  const token = user.generateAuthToken();

  // set cookie -->
  res.cookie("token", token);

  res.status(200).json({ token, user });
};

// get userprofile -->
module.exports.getUserProfile = async (req, res) => {
  res.status(200).json(req.user);
};

// logout user -->
module.exports.logoutUser = async (req, res) => {
  res.clearCookie("token");

  // acquring token to blacklist -->
  const token =
    req.cookies.token ||
    (req.headers.authorization && req.headers.authorization.split(" ")[1]);

  await blacklistTokenModel.create({ token });

  res.status(200).json({ message: "logged out" });
};
