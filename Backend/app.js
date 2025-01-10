require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDb = require("./dataBase/db");
const userRoutes = require("./routes/user.routes");

/// connect to db -->
connectDb();

// cores
app.use(cors());

// use inbuild middleware
app.use(express.json());

// user url encodded
app.use(express.urlencoded({ extended: true }));

// use cookieParser
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello world gandu");
});

// userRoutes -->
app.use("/users", userRoutes);

module.exports = app;
