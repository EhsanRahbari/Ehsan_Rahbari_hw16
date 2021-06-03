var express = require('express');
var router = express.Router();
// const company = require('../models/company.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// router.get('/' , functiomn)
module.exports = router;
