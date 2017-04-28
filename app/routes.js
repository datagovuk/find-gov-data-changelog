var express = require('express')
var router = express.Router()
var data = require('./data.js')

router.use(function(req,res,next){
  res.locals.data = data
  next()
})

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})


module.exports = router
