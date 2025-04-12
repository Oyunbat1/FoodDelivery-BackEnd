import { Request, Response } from "express";
import { FoodModel } from "../../schema/Food";

//create
export const createFood = async (req: Request, res: Response) => {
  const created = await FoodModel.create(req.body);
  res.json({
    success: true,
    food: created,
  });
};
//delete
export const DeleteFood = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedFood = await FoodModel.findByIdAndDelete(id);
    if (!deletedFood) {
      res.status(404).json({ success: false, message: "Food not found" });
      return;
    }
    res.json({
      success: true,
      message: "Food deleted successfully",
      food: deletedFood,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error deleting food", error });
  }
};
//get
export const GetFood = async (req: Request, res: Response) => {
  const created = await FoodModel.find().populate("categoryId");
  res.json({ success: true, created });
};

//update
export const updateFoods = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedFood = await FoodModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedFood) {
      res.status(404).json({ success: false, message: "Food not found" });
      return;
    }
    res.json({
      success: true,
      message: "Food updated successfully",
      food: updatedFood,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error updating food", error });
  }
};
