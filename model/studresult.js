const mongoose = require("mongoose");

const resultSchema = mongoose.Schema({
  name: String,
  marks: Number,
  result: String,  
});

const Result = mongoose.model("studresult", resultSchema);
module.exports = Result;
