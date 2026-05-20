const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

router.get("/", async (req, res) => {
  try {

    const category = req.query.category;

    let products;

    if (category) {
      products = await Product.find({
        category: category
      }).limit(6);
    } else {
      products = await Product.find().limit(6);
    }

    res.json(products);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;