const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema(
  {    
    name:         String,    
    email:        String,
    address:      String,
    city:         String,
    province:     String,
    postalcode:   String,
    note:         String   
  }
);

module.exports = mongoose.model('Subscriber', subscriberSchema);