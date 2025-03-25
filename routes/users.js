var express = require('express');
var router = express.Router();

// Define variables
let ratio = 0.75;
let acc = 1000;

/* GET users listing. */
router.get('/', function(req, res, next) {
  acc = acc * ratio;  // Multiply acc by ratio
  res.send(`Value is: ${acc.toFixed(2)}`); // Send the updated value with 2 decimal places
});

module.exports = router;
