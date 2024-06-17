const authService = require('../services/authServices');

exports.signup = async (req, res) => {
    try {
        const user = await authService.signup(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const token = await authService.login(req.body);
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
