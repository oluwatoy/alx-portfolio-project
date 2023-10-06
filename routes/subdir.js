const express = require('express');
const router = express.Router();
const path = require('path');

router.get('^/$|/our-products(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'subdir', 'our-products.html'));
});

router.get('/orders(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'subdir', 'orders.html'));
});

router.get('/checkout(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'subdir', 'checkout.html'));
});

router.get('/tracking(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'subdir', 'tracking.html'));
});

module.exports = router;