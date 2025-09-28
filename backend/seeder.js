// backend/seeder.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const createAdmin = async () => {
  try {
    const adminExists = await User.findOne({ email: "admin@gmail.com" });

    if (adminExists) {
      console.log("Admin already exists");
      process.exit();
    }

    const admin = new User({
      name: "Admin User",
      email: "admin@gmail.com",
      password: "Admin@123", // will be hashed by mongoose middleware
      isAdmin: true,
    });

    await admin.save();
    console.log("Admin Created ✅");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

createAdmin();
