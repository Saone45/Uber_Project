const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userModel = require("../controller/userController");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 character long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("password must be at least 6 character long"),
  ],
  userModel.registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({ min: 6 }).withMessage("password wrong"),
  ],
  userModel.loginUser
);

module.exports = router;
