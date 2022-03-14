


const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let TemplateShema = new Schema({
  
  _id: {type: String},
  title: {type: String},
  icon: {type: String},
  color: {type: String},
  bgcolor: {type: String},
  slug: {type: String}, 
  form : {type: Array},

  updated_at : {type: Date,default:new Date()},
  created_at : {type: Date,default:new Date()},
});

module.exports = mongoose.model('template', TemplateShema);