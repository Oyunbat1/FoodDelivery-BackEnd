import express from "express";
import {
  createCategory,
  updateFoodCategory,
  DeleteCategoryFood,
  getCategories,
  getCategoriesWithFoods,
} from "../../controllers/category/Category";
const categoryRouter = express.Router();
categoryRouter
  .post("/", createCategory)
  .get("/", getCategories)
  .get("/with-foods", getCategoriesWithFoods)
  .patch("/:id", updateFoodCategory)
  .delete("/:id", DeleteCategoryFood);

export { categoryRouter };
