const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minLength: [3, "First name must be at least 3 characters long"],
      maxLength: [20, "first name must be less than 20 character"],
    },
    lastname: {
      type: String,
      required: false,
      minLength: [3, "Last name must be at least 3 characters long"],
      maxLength: [20, "Last name must be less than 20 character"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: [5, "Email must be at least 5 character long"],
  },
  password: {
    type: String,
    required: true,
    select: false, // jab user ko find karenge toh ye password nahi jayega
  },

  socketId: {
    type: String,
  },
});

/// generating token -->
UserSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  return token;
};

/// comparing password -->
UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

/// hasing password password -->
UserSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model("user", UserSchema);

module.exports = userModel;
