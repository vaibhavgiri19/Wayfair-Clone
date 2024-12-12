const mongoose = require("mongoose");

// Define the product schema
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Product title is required"], // Custom error message
    trim: true, // Removes unnecessary whitespace
  },
  description: {
    type: String,
    trim: true, // Removes unnecessary whitespace
  },
  price: {
    type: Number,
    required: [true, "Product price is required"], // Custom error message
    min: [0, "Price cannot be negative"], // Ensures the price is not negative
  },
  category: {
    type: String,
    required: [true, "Product category is required"], // Custom error message
    trim: true,
  },
  image_url: {
    type: String,
    required: [true, "Product image URL is required"], // Custom error message
    validate: {
      validator: function (v) {
        return /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif|svg)$/.test(v); // URL validation for image files
      },
      message: (props) => `${props.value} is not a valid image URL`, // Custom error message
    },
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically sets the creation date
  },
});

// Create the product model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
