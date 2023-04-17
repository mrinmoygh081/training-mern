const User = require("../models/userModels");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  jwt.sign({ id }, "ThisIsSecret");
};

const registerUser = async (req, res) => {
  const { name, email, password, bio, phone } = req.body;

  if (!name || !email || !password) {
    res
      .status(404)
      .json({ msg: "Please enter valid name or email or password." });
    return;
  }

  const userExits = await User.findOne({ email });
  if (userExits) {
    res.status(404).json({ msg: "You're already registered. Please Login." });
    return;
  }

  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  //   console.log(email, password);
  if (!email || !password) {
    res.status(404).json({ msg: "Please enter valid email or password." });
    return;
  }

  const userExits = await User.findOne({ email });
  if (!userExits) {
    res.status(404).json({ msg: "You're not registered. Please Register." });
    return;
  }

  //   res.send("welcome to login page");
};

const logoutUser = (req, res) => {
  res.send("logout");
};

module.exports = { loginUser, logoutUser, registerUser };
