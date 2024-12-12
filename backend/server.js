const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/userModel"); // Assuming your User model is in the models folder
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // to parse JSON request body

// Signup Route (Registration)
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      email,
      password: hashedPassword,
    });

    // Save the new user in the database
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Login Route (Authentication)
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Create and send the JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      "your_jwt_secret_key", // Use a strong secret key here
      { expiresIn: "1h" } // Optional expiration time
    );

    res.json({ message: "Login successful", token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Protected Route (Example)
app.get("/protected", (req, res) => {
  res.send("This is a protected route!");
});

// MongoDB connection without deprecated options
mongoose.connect("mongodb://localhost:27017/wayfair") // No need for useNewUrlParser and useUnifiedTopology
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running on http://localhost:5000"));
  })
  .catch((err) => console.log("Error connecting to MongoDB:", err));


  // In server.js (backend)
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Error fetching products" });
  }
});
