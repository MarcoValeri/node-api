const express = require('express');

// Express Router
const router = express.Router();

// Controllers
const portfolioController = require('../controllers/portfolioController');

router.post('/portfolio/contact', portfolioController.sendMessage);

module.exports = router;