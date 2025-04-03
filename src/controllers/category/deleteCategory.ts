import { Request, Response } from "express";
import { FoodCategoryModel } from "../../schema/FoodCategory";

export const DeleteCategoryFood = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedCategory = await FoodCategoryModel.findByIdAndDelete(id);
    if (!deletedCategory) {
      res.status(404).json({ success: false, message: "Category not found" });
      return;
    }
    res.json({
      success: true,
      message: "Category deleted successfully",
      category: deletedCategory,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error deleting category", error });
  }
};
