const express = require('express');
const router = express.Router();

// Initialize variables
let ratio = 0.75;
let acc = 1000;

// Define the /users endpoint
router.get('/users', (req, res) => {
    // Multiply acc by ratio and update acc
    acc *= ratio;

    // Send the updated value of acc as the response
    res.send(`Value is: ${acc}`);
});

module.exports = router;

