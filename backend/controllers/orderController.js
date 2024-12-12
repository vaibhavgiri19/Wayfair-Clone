const Order = require("../models/orderModel");

// Create a new order
const createOrder = async (req, res) => {
  const { user, products, totalPrice } = req.body;
  try {
    const newOrder = new Order({
      user,
      products,
      totalPrice,
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get an order by ID
const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("products.productId").populate("user");
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { createOrder, getOrderById };
