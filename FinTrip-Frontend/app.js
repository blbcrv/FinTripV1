// app.js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const authRoutes = require('../FinTrip-Backend/auth-service/routes/authRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors()); // Ajoutez cette ligne pour permettre les requêtes CORS
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

const logger = require('../FinTrip-Backend/logger/logger');

app.use(cors());

app.use(express.static(path.join(__dirname, './src/')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    logger.info(`Le frontend est démarré sur le port ${PORT}`, { msName: 'Fintrip-Frontend' });
})