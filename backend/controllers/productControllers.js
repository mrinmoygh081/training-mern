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

const editProduct = async (req, res) => {
  try {
    let product = await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ status: 1, msg: product });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: 1, msg: error });
  }
};

const deleteProduct = async (req, res) => {
  try {
    let product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: 1 });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: 1, msg: error });
  }
};
module.exports = { addProduct, getProduct, editProduct, deleteProduct };
