
const mongoose = require('./_connection.js') 

// Import  data
const gallerydb = require(`./seeds/gallery.js`);
const teamdb = require(`./seeds/team.js`);

// Define model
const Gallery = require(`./models/gallery.js`);
const Team = require(`./models/team.js`);


Gallery.insertMany(gallerydb, function(error, gallery) {
  console.log('Data import completed.') 
});

Team.insertMany(teamdb, function(error, team) {
  console.log('Data import completed.') 
});