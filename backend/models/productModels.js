const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a valid name for the product"],
    unique: true,
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Please provide a valid price for the product"],
  },
  description: {
    type: String,
    required: [true, "Please provide a valid description for the product"],
    maxLength: [255, "Description should be less than 255 characters"],
  },
  photo: {
    type: String,
    default:
      "https://res.cloudinary.com/learncloud/image/upload/v1681101717/avatar_kumh14.png",
  },
});

const product = mongoose.model("Product", productSchema);

module.exports = product;
