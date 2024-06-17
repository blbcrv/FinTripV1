const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('../logger/logger');
const authRoutes = require('./routes/authRoutes');

require('dotenv').config()

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello World");
})
app.use('/api/auth', authRoutes);

app.listen(process.env.PORT, () => {
    logger.info(`Le micro-service est démarré sur le port ${process.env.PORT}`, { msName: 'Authenticator' });
})
