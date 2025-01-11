const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blacklistTokenModel = require("../models/blacklist.model");
const captainModel = require("../models/captain.model");

// user Auth
module.exports.authUser = async (req, res, next) => {
  // Acquiring token -->
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  // Checking token -->
  if (!token) {
    return res.status(401).json({ message: "Unauthorized user" });
  }

  // checking token is blacklisted or not -->
  const isBlacklisted = await blacklistTokenModel.findOne({ token: token });

  if (isBlacklisted) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    // Decoding token -->
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;

    return next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

// captain Auth -->
module.exports.authCaptain = async (req, res, next) => {
  /// extracting token from header and cookie
  const token = req.cookies.token || req.headers.authorization?.split("")[1];

  /// checking token
  if (!token) {
    return res.status(401).json({ message: "Unauthorized Captain" });
  }

  // checking token is blacklisted or not -->
  const isBlacklisted = await blacklistTokenModel.findOne({ token: token });
  if (isBlacklisted) {
    return res.status(401).json({ mesage: "Unauthorized Captain" });
  }

  try{
    //decoding token -->
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded._id);
    if(!captain){
      return res.status(401).json({message:'captain not found'})
    }
    
    req.captain = captain

   return next();

  }catch(error){
    console.log(error);
    res.status(401).json({message:'Unauthorized Captain'})
  }
};
