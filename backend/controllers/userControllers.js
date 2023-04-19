const User = require("../models/userModels");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "ThisIsSecret", {
    expiresIn: "1d",
  });
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
    res
      .status(404)
      .json({ status: 0, msg: "Please enter valid email or password." });
    return;
  }

  const userExits = await User.findOne({ email });
  if (!userExits) {
    res
      .status(404)
      .json({ status: 0, msg: "You're not registered. Please Register." });
    return;
  }

  let token = generateToken(userExits._id);
  console.log(token);

  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), // 1 day
    sameSite: "none",
    secure: true,
  });
  // 60 * 60 * 24 = 86400

  res.status(200).json({
    user: userExits,
    token,
  });
};

const logoutUser = (req, res) => {
  res.send("logout");
};

module.exports = { loginUser, logoutUser, registerUser };
