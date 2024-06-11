const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const path = require('path');
const logger = require('../FinTrip-Backend/logger/logger');

app.use(cors());

app.use(express.static(path.join(__dirname, './src/')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    logger.info(`Le frontend est démarré sur le port ${port}`, { msName: 'Fintrip-Frontend' });
})