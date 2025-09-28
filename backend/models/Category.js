import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
  },
  { timestamps: true } // ✅ ye createdAt & updatedAt dono fields de dega
);

const Category = mongoose.model("Category", categorySchema);

export default Category;
