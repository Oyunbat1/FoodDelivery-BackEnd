    import mongoose from "mongoose";

    const Food = new mongoose.Schema({
        id: Number,
        foodName : String,
        price: Number,
        ingredients: Array,
        createdAt: Date,
        updatedAt: Date
    })
    export const FoodModel = mongoose.model("food", Food);
    