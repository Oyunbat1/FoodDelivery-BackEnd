import { request, Request, Response } from "express";
import { FoodCategoryModel } from "../../schema/FoodCategory";
import jwt from "jsonwebtoken";
export const createCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  const ACCESS_TOKEN_SECRET_KEY = "Oyunbat1216$";
  try {
    if (!req.headers["authorization"]) {
      res.status(401).json({ success: false, msg: "Unauthorization" });
      return;
    }
    const [_, token] = req.headers["authorization"].split(" ");
    const decode = jwt.verify(token, ACCESS_TOKEN_SECRET_KEY);
    console.log(decode);

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
// withfoods
export const getCategoriesWithFoods = async (
  request: Request,
  response: Response
) => {
  try {
    const categories = await FoodCategoryModel.aggregate([
      {
        $lookup: {
          from: "foods",
          localField: "_id",
          foreignField: "categoryId",
          as: "foods",
        },
      },
    ]);
    response.json({ success: true, categories });
  } catch (error) {
    response.status(404).json({ success: false, message: error });
  }
};
//delete

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

// getfoods
export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await FoodCategoryModel.find();
    res.json({ success: true, categories });
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};
//updatefoods

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
