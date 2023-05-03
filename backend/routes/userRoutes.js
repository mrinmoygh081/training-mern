const express = require("express");
const {
  loginUser,
  registerUser,
  logoutUser,
  profileUser,
} = require("../controllers/userControllers");

const protected = require("../middlewares/authMiddlewares");
const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/logout", logoutUser);
router.get("/profile", protected, profileUser);

module.exports = router;
