const express = require('express');
const router = express.Router();
const config = require('../config');
const Gallery = require('../models/gallery');
const Subscriber = require('../models/subscriber');
const Team = require('../models/team');

// Global Variables
router.use((req, res, next) => {
  res.locals = config
  next()
})

// JSON Endpoints
router.get('/gallery', (req,res)=>{
  Gallery.find((err,galleries)=>{
    res.json(galleries);    
  });  
});

router.get('/member', (req,res)=>{
  Team.find((err,teams)=>{
    res.json(teams);    
  });  
});

//Router for index page
router.get('/', (req, res) => {
  res.render('pages/index', {pageTitle: 'Home'})
})

//Router for admin page
router.get('/admin', async (req, res) => {
  const sub = await Subscriber.find({})
  res.render('pages/admin', {pageTitle: 'Admin', sub})
})
router.post('/admin', (req,res) => {
  Subscriber.insertMany(req.body)
    .then (() => {
      console.log('Subscriber Added...')
      res.redirect('/subscribe')
    })
    .catch(error => console.error(error))
})

//Router for subscribe page
router.get('/subscribe', (req, res) => {
  res.render('pages/subscribe', {pageTitle: 'Subscribe'})
})

//Router for team page
router.get('/team', (req, res) => {
  res.render('pages/team', {pageTitle: 'Team'})
})

//Router for gallery page
router.get('/menu', (req, res) => {
  res.render('pages/gallery', {pageTitle: 'Menu'})
})

// Single image render
router.get('/gallery/:id', async(req,res)=>{
  const image = await Gallery.findOne({id: req.params.id});
  res.render('pages/singlemenu', {pageTitle: image.menuTitle, image})
})
//router for page not found page
router.get('/404', (req, res) => {
  res.render('pages/404')
})

module.exports = router;