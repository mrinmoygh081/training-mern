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
router.put("/:id", editProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
