const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  id: Number,
  menuTitle: String,
  description:String,
  width:Number,
  height:Number,
  imageSrc:String,
  linkURL:String,

});
module.exports = mongoose.model('Gallery', gallerySchema);