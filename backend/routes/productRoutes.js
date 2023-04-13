const express = require("express");
const router = express.Router();

// import controllers
const {
  addProduct,
  getProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/productControllers");

router.get("/", getProduct);
router.post("/add", addProduct);
router.put("/edit", editProduct);
router.delete("/delete", deleteProduct);

module.exports = router;
