import mongoose from "mongoose";

const Food = new mongoose.Schema(
  {
    foodName: { type: String, required: true },
    price: { type: Number, required: true },
    ingredients: { type: [String], required: true },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "foodCategory",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const FoodModel = mongoose.model("food", Food);
