// const { stringify } = require("ini");
const mongoose = require("mongoose");

const data = new mongoose.Schema({
  roll: {
    type: String,
  },
  name: {
    type: String,
  },
  location: {
    type: String,
  },
  center: {
    type: String,
  },
  data: {
    type: String,
  },
  phone:{
    type:Number
  }
});

const students_data = mongoose.model("students_data", data);

console.log("model is connected");

module.exports = students_data;
