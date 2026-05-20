const express =
require("express");

const router =
express.Router();

const cartController = require("../controllers/cartController");

const {
addToCart,
getCart
}
=
require(
"../controllers/cartController"
);

router.post(
"/add",
addToCart
);

router.get(
"/:userId",
getCart
);

router.delete("/:userId/:itemId", cartController.removeFromCart);

router.put(
  "/update/:itemId",
  cartController.updateQuantity
);

module.exports =
router;