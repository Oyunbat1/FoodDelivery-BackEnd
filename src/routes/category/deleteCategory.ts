import express from "express";
import { DeleteCategoryFood } from "../../controllers/category/deleteCategory";
const deleteCategoryRouter = express.Router();
deleteCategoryRouter.delete("/:id", DeleteCategoryFood);
export default deleteCategoryRouter;
