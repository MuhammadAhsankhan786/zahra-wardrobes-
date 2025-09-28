// routes/seedRoutes.js
import express from "express";
import Category from "../models/Category.js";

const router = express.Router();

router.get("/categories", async (req, res) => {
  try {
    await Category.deleteMany(); // purana data clear
    const categories = await Category.insertMany([
      { name: "Baby Accessories", description: "All baby accessories" },
      {
        name: "Baby Carry Nests & Bedding",
        description: "Nests and bedding for babies",
      },
      { name: "Baby Dresses", description: "Beautiful baby dresses" },
      {
        name: "Baby Starter Sets (Suitings)",
        description: "Starter clothing sets for babies",
      },
      { name: "Baby Swaddles", description: "Soft and comfy swaddles" },
      {
        name: "Baby Wraps & Towels",
        description: "Warm wraps and towels for babies",
      },
    ]);
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
