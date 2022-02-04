const mongoose = require("mongoose");

const studSchema = mongoose.Schema({
  name: String,
  course: String,
  sem: Number,  
});

const Data = mongoose.model("studinfo", studSchema);
module.exports = Data;
