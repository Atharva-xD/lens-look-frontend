const User = require('../models/User');

module.exports = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (user.role !== 'admin') return res.status(403).json('Admin access required');
    next();
  } catch (err) {
    res.status(500).json(err.message);
  }
};
