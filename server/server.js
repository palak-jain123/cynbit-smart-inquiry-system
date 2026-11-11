
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const Inquiry = require("./models/Inquiry");

const app = express();

app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully!");

    app.listen(5000, () => {
      console.log("Server running on http://localhost:5000");
    });
  })
  .catch((error) => {
    console.error("MongoDB Connection Error:", error.message);
  });

// Home API
app.get("/", (req, res) => {
  res.send("Cynbit Backend Server is Running!");
});

// Health Check API
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Cynbit API is working successfully!",
  });
});

// Submit Project Inquiry API

app.post("/api/inquiries", async (req, res) => {
  try {
    const email = req.body.email?.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

    if (!email || !emailPattern.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    req.body.email = email.toLowerCase();

    const newInquiry = new Inquiry(req.body);


    const savedInquiry = await newInquiry.save();

    res.status(201).json({
      success: true,
      message: "Project inquiry submitted successfully!",
      data: savedInquiry,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

