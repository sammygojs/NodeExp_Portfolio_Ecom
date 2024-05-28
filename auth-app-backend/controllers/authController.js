// controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
    res.json({ message: 'Logged in successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { register, login };
