const express = require('express');

// Express Router
const router = express.Router();

// Controllers
const homeController = require('../controllers/homeController');

router.use('/', homeController.homePage);

module.exports = router;