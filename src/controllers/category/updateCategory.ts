import { Request, Response } from "express";
import { FoodCategoryModel } from "../../schema/FoodCategory";
export const updateFoodCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedFoodCategory = await FoodCategoryModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );
    if (!updatedFoodCategory) {
      res
        .status(404)
        .json({ success: false, message: "Food category not found" });
      return;
    }
    res.json({
      success: true,
      message: "Food category updated successfully",
      foodCategory: updatedFoodCategory,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating food category",
      error,
    });
  }
};
