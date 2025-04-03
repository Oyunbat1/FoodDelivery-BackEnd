import express from "express";
import { getCategories } from "../../controllers/category/getCategory";
import { getCategoriesWithFoods } from "../../controllers/category/createCategory";
const categoryRouter = express.Router();
categoryRouter
  .get("/", getCategories)
  .get("/with-foods", getCategoriesWithFoods);

export default categoryRouter;
