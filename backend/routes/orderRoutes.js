const express = require("express");
const { createOrder, getOrderById } = require("../controllers/orderController");

const router = express.Router();

// Create a new order
router.post("/", createOrder);

// Get an order by ID
router.get("/:id", getOrderById);

module.exports = router; // Export the router correctly
