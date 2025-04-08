import mongoose from "mongoose";
import { FoodCategoryModel } from "./FoodCategory";

const Food = new mongoose.Schema(
  {
    foodName: { type: String, required: true },
    price: { type: Number, required: true },
    ingredients: [{ type: [String], required: true }],
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: FoodCategoryModel,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const FoodModel = mongoose.model("food", Food);
