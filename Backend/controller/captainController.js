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
  const isCaptainAlredayExists = await captainModel.findOne({email});
    
  if(isCaptainAlredayExists){
    return res.status(400).json({ message:'Captain allready Exists'});
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
