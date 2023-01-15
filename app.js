const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const express = require('express');

const cors = require('cors');

const app = express();

// DotEnv Configuration
dotenv.config();

// Parse incoming requests with JSON
app.use(express.json());

// Move data from back-end to front-end
app.use(cors());

// BodyParse
app.use(bodyParser.urlencoded({extended: true}));

// Routes
const portfolioRoutes = require('./routes/portfolioRoutes');

app.use(portfolioRoutes);

app.listen(process.env.SERVER_PORT);