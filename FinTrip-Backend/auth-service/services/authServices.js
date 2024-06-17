// services/authService.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

exports.signup = async ({ username, email, password }) => {
    console.log(username, password, email)
    const userExists = await User.findOne({ where: { username } });
    if (userExists) {
        throw new Error(`L'utilisateur existe déjà`);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, email, password: hashedPassword });

    return { username: newUser.username, email: newUser.email };
};

exports.login = async ({ username, password }) => {
    const user = await User.findOne({ where: { username } });
    if (!user) {
        throw new Error(`Nom d'utilisateur ou mot de passe incorrect`);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error(`Nom d'utilisateur ou mot de passe incorrect`);
    }

    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
};
