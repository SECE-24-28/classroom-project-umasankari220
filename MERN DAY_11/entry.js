const express = require("express");
const mongoose = require("mongoose");
const Signup = require("./models/SignupSchema");
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();

// ✅ Render PORT
const PORT = process.env.PORT || 8001;

// Middlewares
app.use(express.json());
app.use(cors());

// MongoDB local connection
mongoose
  .connect("mongodb://localhost:27017/MERN")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error", err));

// Routes
app.get("/", (req, res) => {
  res.send("Server started successfully");
});

app.post("/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const existingUser = await Signup.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
        isSignup: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newSignup = new Signup({
      email,
      username,
      password: hashedPassword,
    });

    await newSignup.save();

    res.status(200).json({
      message: "Signup Successful",
      isSignup: true,
    });
  } catch (error) {
    console.log("Signup Error:", error);
    res.status(500).json({
      message: "Signup Failed",
      isSignup: false,
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await Signup.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({
        message: "User not Found. Signup First",
        isLoggedIn: false,
      });
    }

    const isValidPassword = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isValidPassword) {
      return res.status(401).json({
        message: "Incorrect Password",
        isLoggedIn: false,
      });
    }

    res.status(200).json({
      message: "Login Successful",
      isLoggedIn: true,
    });
  } catch (error) {
    console.log("Login Error:", error);
    res.status(500).json({
      message: "Login Error",
      isLoggedIn: false,
    });
  }
});

app.get("/json", (req, res) => {
  res.json({
    College: "SECE",
    Dept: "CYS",
    StuCount: "64",
  });
});

// ❌ REMOVE local static file route
// app.get("/static", ...);

// ✅ Render listen
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
