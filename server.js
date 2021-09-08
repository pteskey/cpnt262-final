const express = require('express');
const index = require('./routes');
const mongoose = require('./_connection.js');

const app = express();

// Set ejs as view engine
app.set('view engine','ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

// Requiring our Routes
app.use('/',index);

// 404 Page Not Found
app.use(function(req,res){
  res.status(404);
  res.redirect('/404');  
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})