const Product = require("../models/productModels");

const getProduct = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json({ status: 1, msg: product });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: 0, msg: error });
  }
};

const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error });
  }
};

const editProduct = (req, res) => {
  res.send("edit product");
};

const deleteProduct = (req, res) => {
  res.send("delete product");
};
module.exports = { addProduct, getProduct, editProduct, deleteProduct };
