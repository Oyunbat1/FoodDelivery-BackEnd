    import mongoose from "mongoose";

    const Food = new mongoose.Schema({
        id: Number,
        foodName : String,
        price: Number,
    })
    export const FoodModel = mongoose.model("food", Food);