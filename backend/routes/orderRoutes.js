const express = require("express");

const router = express.Router();

const {
  placeOrder,
  getOrders,
  updateStatus,
  getAllOrders
} = require("../controllers/orderController");

router.post(
  "/place",
  placeOrder
);

router.get(
  "/",
  getAllOrders
);

router.get(
  "/:userId",
  getOrders
);

router.put(
  "/status/:orderId",
  updateStatus
);

module.exports = router;