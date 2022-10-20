const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  writer:{
    type:String,
    required:true
  },
  genre:{
    type:String,
    required:true
  }
});

module.exports = Book = mongoose.model("Book", bookSchema); 