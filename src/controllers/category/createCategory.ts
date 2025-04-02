import { Request, Response } from "express";
import { FoodCategoryModel } from "../../schema/FoodCategory";

export const createCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { categoryName } = req.body;

    const existingCategory = await FoodCategoryModel.findOne({ categoryName });
    if (existingCategory) {
      res
        .status(400)
        .json({ success: false, message: "Category already exists" });
      return;
    }

    const newCategory = await FoodCategoryModel.create({ categoryName });

    res.status(201).json({ success: true, category: newCategory });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ success: false, message: error.message });
    } else {
      res
        .status(500)
        .json({ success: false, message: "An unknown error occurred" });
    }
  }
};
