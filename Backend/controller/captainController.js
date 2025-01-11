const blacklistModel = require("../models/blacklist.model");
const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.Service");
const { validationResult } = require("express-validator");

// reqister Captain -->
module.exports.reqisterCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty) {
    return res.status(401).json({ errors: errors.array() });
  }

  // acquiring captain details from req.body -->
  const { fullname, email, password, phone, vehicle } = req.body;

  // cheking is captain already Exists or not -->
  const isCaptainAlredayExists = await captainModel.findOne({ email });

  if (isCaptainAlredayExists) {
    return res.status(400).json({ message: "Captain allready Exists" });
  }

  // hasing password -->
  const hashedPassword = await captainModel.hashPassword(password);

  // creating Caption -->
  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    phone,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  // generating token -->
  const token = captain.generateAuthToken();

  res.status(201).json({ token, captain });
};

// login Captain -->
module.exports.loginCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(401).json({ errors: errors.array() });
  }

  // extracting email and password from req.body -->
  const { email, password } = req.body;

  // finding Captain -->
  const captain = await captainModel.findOne({ email }).select("password");

  if (!captain) {
    return res.status(401).json({ message: "invalid Email or Password" });
  }

  // matching password -->
  const isMatch = await captain.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: "ivalid Email or Password" });
  }

  // generating token
  const token = captain.generateAuthToken();

  // set token to cookie
  res.cookie("token", token);

  res.status(201).json({ captain, token, message: "login Successful" });
};

/// get Captain Profil -->

module.exports.getCaptainProfile = async (req, res) => {
  res.status(200).json({ captain: req.captain });
};

/// logout Captain -->
module.exports.logOutCaptain = async (req, res) => {
  // extracting token from cookie||headers
  const token = req.cookies.token || req.headers.authorization?.split("")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // blacklist token -->
  await blacklistModel.create({ token });

  // clear cookie -->
  res.clearCookie("token");

  res.status(201).json({ message: "Logout successful" });
};
