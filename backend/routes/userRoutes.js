const express = require("express");
const {
  loginUser,
  registerUser,
  logoutUser,
  profileUser,
  imgUpload,
} = require("../controllers/userControllers");

const protected = require("../middlewares/authMiddlewares");
const { upload } = require("../utils/fileUpload");
const router = express.Router();

router.post("/login", loginUser);
router.post("/register", upload.single("image"), registerUser);
router.post("/logout", logoutUser);
router.get("/profile", protected, profileUser);
router.post("/upload", upload.single("image"), imgUpload);

module.exports = router;
