const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email address"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
  },
  photo: {
    type: String,
    default:
      "https://res.cloudinary.com/learncloud/image/upload/v1681101717/avatar_kumh14.png",
  },
  bio: {
    type: String,
    maxLength: [255, "Bio should be less than 255 characters"],
  },
});

// Encrypt password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
