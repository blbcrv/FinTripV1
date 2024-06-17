// services/authService.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const users = []; // Utilisation d'un tableau en mémoire pour cet exemple

exports.signup = async ({ username, password }) => {
    const userExists = users.find(user => user.username === username);
    if (userExists) {
        throw new Error(`L'utilisateur existe déjà`);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { username, password: hashedPassword };
    users.push(newUser);
    return { username };
};

exports.login = async ({ username, password }) => {
    const user = users.find(user => user.username === username);
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
