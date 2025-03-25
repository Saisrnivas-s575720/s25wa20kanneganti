var express = require('express');
var router = express.Router();

// Initialize variables
let ratio = 0.75;
let acc = 1000;

// Define the /computation endpoint
router.get('/', (req, res) => {
    // Check if the query parameter 'x' is provided, otherwise use a random number
    let x = req.query.x ? parseFloat(req.query.x) : Math.random() * 100;
    
    // Apply the computation function based on the last digit of the student ID (in this case, "0")
    // Using Math.log2() as an example based on your requirement
    let result = Math.log2(x);

    // Send the result back in the required format
    res.send(`Math.log2() applied to ${x} is ${result}`);
});

module.exports = router;
