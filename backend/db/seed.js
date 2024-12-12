const Product = require("../models/productModel");
const productData = require("../../db.json");

const seedDatabase = async () => {
  try {
    await Product.deleteMany();

    // Add default price for missing fields
    const productsWithPrice = productData.products.map((product) => ({
      ...product,
      price: product.price || 0, // Default to 0 if price is missing
    }));

    await Product.insertMany(productsWithPrice);
    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error.message);
  }
};

module.exports = { seedDatabase };
