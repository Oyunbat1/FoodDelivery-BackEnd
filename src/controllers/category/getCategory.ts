import { Request, Response } from "express";
import { FoodCategoryModel } from "../../schema/FoodCategory";

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await FoodCategoryModel.find();
    res.json({ success: true, categories });
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};
