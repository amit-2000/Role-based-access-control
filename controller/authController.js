const User = require("../models/User");
const Role = require("../models/role");

// Register a new user with a role
exports.registerUser = (req, res) => {
  const { username, password, role } = req.body;
  const user = new User({ username, role });

  User.register(user, password, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "User registered successfully" });
  });
};
