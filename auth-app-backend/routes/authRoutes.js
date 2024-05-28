// routes/authRoutes.js
const express = require('express');
const { register, login } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const User = require('../models/User');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/protected', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user);
    res.json({
      id: user._id,
      username: user.username,
      // add more user details if needed
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
