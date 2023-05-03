const jwt = require("jsonwebtoken");
const User = require("../models/userModels");

const protected = async (req, res, next) => {
  try {
    console.log(req.cookies);
    const token = req.cookies.token;
    console.log(token);
    if (!token) {
      res.status(200).json({ status: 0, msg: "User not logged in" });
      return;
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    console.log(verified);
    const user = await User.findById(verified.id);
    console.log(user);
    if (!user) {
      res.status(200).json({ status: 0, msg: "User not logged in" });
      return;
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(400).json({ msg: "User not logged in" });
    console.error(error);
  }
};

module.exports = protected;
