import express from "express";
import {
  createCategory,
  updateFoodCategory,
  DeleteCategoryFood,
  getCategories,
  getCategoriesWithFoods,
} from "../../controllers/category/Category";
import { checkToken } from "../../middleware/check-token";
const categoryRouter = express.Router();
categoryRouter
  .post("/", checkToken, createCategory)
  .get("/", getCategories)
  .get("/with-foods", getCategoriesWithFoods)
  .patch("/:id", updateFoodCategory)
  .delete("/:id", DeleteCategoryFood);

export { categoryRouter };
