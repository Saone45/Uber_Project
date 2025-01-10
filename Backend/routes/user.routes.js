const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controller/userController");
const authMiddleware = require("../middleware/authMiddleware");


// register route -->
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
  userController.registerUser
);

// login route -->
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({ min: 6 }).withMessage("password wrong"),
  ],
  userController.loginUser
);

// get profile route -->
router.get('/profile',authMiddleware.authUser ,userController.getUserProfile)

/// logout route -->
router.get('/logout',authMiddleware.authUser,userController.logoutUser)

module.exports = router;
