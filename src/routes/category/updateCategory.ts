import express from "express";
import { updateFoodCategory } from "../../controllers/category/updateCategory";
const updateCategoryRouter = express.Router();
updateCategoryRouter.patch("/:id", updateFoodCategory);
export default updateCategoryRouter;
