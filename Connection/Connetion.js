// const mongoose= require("mongoose");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// dotenv.config({ path: "../config/config.env" });
dotenv.config();
exports.Connection = () => {
  try {
    mongoose
      .connect("mongodb+srv://rvramayra1998:radhika123@cluster0.znghfbg.mongodb.net/bogvibe", {
      useNewUrlParser: true,
      // useUnifiedTopology: true,
    })
    .then((data) => {
      console.log("connection is successfull");
    })
    .catch((err) => {
      console.log("No connection", err);
    });
  } catch (error) {
    console.log("No connection", error);
  }
};
