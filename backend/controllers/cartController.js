const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {

  try {

    const {
      userId,
      productId,
      quantity,
      size,
      color
    } = req.body;

    let cart = await Cart.findOne({
      user: userId
    });

    if (!cart) {

      cart = new Cart({
        user: userId,
        items: []
      });

    }

    cart.items.push({
      product: productId,
      quantity,
      size,
      color
    });

    await cart.save();

    res.status(201).json(cart);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });

  }
};

exports.getCart = async (req, res) => {

  try {

    const cart = await Cart.findOne({
      user: req.params.userId
    }).populate("items.product");

    res.json(cart);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });

  }
};

exports.removeFromCart = async (req, res) => {

  try {

    const cart = await Cart.findOne({
      user: req.params.userId
    });

    cart.items = cart.items.filter(
      (item) =>
        item._id.toString() !== req.params.itemId
    );

    await cart.save();

    res.json(cart);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });

  }
};

exports.updateQuantity = async (
  req,
  res
) => {

  try {

    const { itemId } = req.params;

    const { change } = req.body;

    const cart = await Cart.findOne({
      "items._id": itemId
    });

    if (!cart) {

      return res.status(404).json({
        message: "Cart not found"
      });

    }

    const item =
      cart.items.id(itemId);

    if (!item) {

      return res.status(404).json({
        message: "Item not found"
      });

    }

    item.quantity += change;

    // quantity 1 kanna takkuva avvakudadhu
    if (item.quantity < 1) {

      item.quantity = 1;

    }

    await cart.save();

    res.json(cart);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });

  }
};