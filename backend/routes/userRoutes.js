const express = require("express");
const {
  loginUser,
  registerUser,
  logoutUser,
} = require("../controllers/userControllers");
const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/logout", logoutUser);

module.exports = router;
