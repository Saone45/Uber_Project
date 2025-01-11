const express = require("express");
const { body } = require("express-validator");
const captainController = require("../controller/captainController");
const router = express.Router();

/// reqister route -->
router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First Name must be at least 3 character"),
    body("fullname.lastname")
      .isLength({ min: 3 })
      .withMessage("Last Name must be at least 3 character"), // Added validation for lastname
    body("password")
      .isLength({ min: 6 })
      .withMessage("password must be at least 6 character"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("color must be at least 3 character"),
    body("vehicle.plate")
      .isLength({ min: 4 })
      .withMessage("vehicle plate must be at least 4 character"),
    body("vehicle.capacity")
      .isLength({ min: 1 })
      .withMessage("capacit must be at least 1 "),
    body("vehicle.vehicleType")
      .isIn(["car", "motorcycle", "auto"])
      .withMessage("Invalid vehicle type"),
  ],
  captainController.reqisterCaptain
);

module.exports = router;
