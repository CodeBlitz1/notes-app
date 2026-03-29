const express = require("express");
const router = express.Router();
const User = require("../models/User");


router.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({ message: "User created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne(req.body);
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    res.json({ userId: user._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;