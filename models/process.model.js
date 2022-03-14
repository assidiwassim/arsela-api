


const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;


let ProcessShema = new Schema({
  
  _id: {type: String},
  title: {type: String},
  pages: {type: Array},
  links: {type: Array},
  
  updated_at : {type: Date,default:new Date()},
  created_at : {type: Date,default:new Date()},
});

module.exports = mongoose.model('process', ProcessShema);