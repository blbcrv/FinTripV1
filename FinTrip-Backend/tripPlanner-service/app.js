const express = require('express')
const app = express()
const cors = require('cors');
const logger = require('../logger/logger');

require('dotenv').config()

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.listen(port, () => {
    logger.info(`Le micro-service est démarré sur le port ${process.env.PORT}`, { msName: 'tripPlanner' });
})