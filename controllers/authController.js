
const User = require("../models/User");
const Role = require("../models/role");

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

// Login a user and create a session
exports.loginUser = (req, res) => {
  const { username, password } = req.body;

  User.authenticate(username, password, (err, user) => {
    if (err || !user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Create a new session and store user id
    req.session.userId = user._id;

    res.json({ message: "Login successful" });
  });
};

// Logout a user and destroy the session
exports.logoutUser = (req, res) => {
  if (req.session) {
    // Destroy the session
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: "Logged out successfully" });
    });
  } else {
    res.json({ message: "Not logged in" });
  }
};
