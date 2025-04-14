import mongoose from "mongoose";
import { FoodCategoryModel } from "./FoodCategory";
const ingredientSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
});
const Food = new mongoose.Schema(
  {
    foodName: { type: String, required: true },
    price: { type: Number, required: true },
    ingredients: [ingredientSchema],
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
