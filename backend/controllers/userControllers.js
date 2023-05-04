const User = require("../models/userModels");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary").v2;

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

// register user
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

  // handle image of a user
  console.log(req.file);
  let imgInfo;
  if (req.file) {
    // save image to cloudinary
    let uploadedFile;
    try {
      uploadedFile = await cloudinary.uploader.upload(req.file.path, {
        folder: "students",
        resource_type: "image",
      });
    } catch (e) {
      res
        .status(500)
        .json({ msg: "Image could not be uploaded to cloudinary." });
    }
    console.log(uploadedFile);

    imgInfo = {
      fileName: req.file.originalname,
      filePath: uploadedFile.secure_url,
      fileType: req.file.mimetype,
      fileSize: req.file.size,
    };
  } else {
    res.status(400).json({ msg: "Please upload valid file" });
  }

  try {
    const user = await User.create({
      name,
      email,
      phone,
      password,
      bio,
      photo: imgInfo.filePath,
    });
    res.status(201).json({ user, photo: imgInfo });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

// login user
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
    secure: false,
  });
  // 60 * 60 * 24 = 86400

  res.status(200).json({
    user: userExits,
    token,
  });
};

// logout user
const logoutUser = (req, res) => {
  res.cookie("token", null, {
    path: "/",
    httpOnly: true,
    expires: new Date(0),
    sameSite: "none",
    secure: true,
  });
  res.status(200).json({ msg: "Succfully logout!" });
};

const profileUser = (req, res) => {
  res.status(200).json(req.user);
};

const imgUpload = (req, res) => {
  // console.log(req.file);
  let imgInfo;
  if (req.file) {
    imgInfo = {
      fileName: req.file.originalname,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      fileSize: req.file.size,
    };
  }
  if (req.file) {
    res.status(200).json(imgInfo);
  } else {
    res.status(404).json({ msg: "Please provide a valid file." });
  }
};

module.exports = {
  loginUser,
  logoutUser,
  registerUser,
  profileUser,
  imgUpload,
};
