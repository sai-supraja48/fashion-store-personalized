const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User");

exports.placeOrder = async (req, res) => {

  try {

    const { userId, items, shippingAddress } = req.body;

    let subtotal = 0;

    for (const item of items) {

      const product = await Product.findById(item.productId);

      subtotal += item.quantity * item.price;
    }

    const discount = subtotal * 0.1;

    const totalPrice = subtotal - discount;

    const order = await Order.create({

      user: userId,

      items: items.map(item => ({
        product: item.productId,
        quantity: item.quantity,
        size: item.size,
        color: item.color,
        price: item.price
      })),

      shippingAddress,

      subtotal,
      discount,
      totalPrice,
      status: "Pending"

    });

    res.status(201).json(order);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


exports.getOrders = async (req, res) => {

  try {

    const { userId } = req.params;

    const orders = await Order.find({
      user: userId
    }).populate("items.product");

    res.status(200).json(orders);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


exports.updateStatus = async (req, res) => {

  try {

    const { orderId } = req.params;

    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );

    res.status(200).json(order);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


exports.getAllOrders = async (req, res) => {

  try {

    const orders = await Order.find();

    res.status(200).json(orders);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};