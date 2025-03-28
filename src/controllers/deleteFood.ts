import { Request,Response } from "express";
import { FoodModel } from "../schema/Food";

export const DeleteFood = async(req:Request ,res:Response) => {
    try {
        const { id } = req.params;
        const deletedFood = await FoodModel.findByIdAndDelete(id);
        if (!deletedFood) {
          res.status(404).json({ success: false, message: "Food not found" });
          return
        }
        res.json({ success: true, message: "Food deleted successfully", food: deletedFood });
      } catch (error) {
        res.status(500).json({ success: false, message: "Error deleting food", error });
     }}

