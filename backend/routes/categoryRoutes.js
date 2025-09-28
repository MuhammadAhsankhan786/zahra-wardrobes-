import express from "express";
import {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/", getCategories);
router.get("/:id", getCategoryById);

router.post("/", protect, admin, createCategory);
router.put("/:id", protect, admin, updateCategory);
router.delete("/:id", protect, admin, deleteCategory);

// // ✅ Public
// router.get("/", getCategories);
// router.get("/:id", getCategoryById);

// // ✅ Only Admin
// router.post("/", protect, admin, createCategory);
// router.put("/:id", protect, admin, updateCategory);
// router.delete("/:id", protect, admin, deleteCategory);

export default router;
