const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: String,
  profilePic: String,
  title:String,
  bio:String,

});
module.exports = mongoose.model('Team', teamSchema);