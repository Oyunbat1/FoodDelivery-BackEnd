 import { Request, Response } from "express";
import { FoodModel } from "../schema/Food";

export const updateFoods = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const updatedFood = await FoodModel.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedFood) {
        res.status(404).json({ success: false, message: "Food not found" });
        return 
        }
        res.json({ success: true, message: "Food updated successfully", food: updatedFood });
      } catch (error) {
        res.status(500).json({ success: false, message: "Error updating food", error });
      }
}