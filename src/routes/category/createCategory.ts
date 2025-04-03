import express from "express";
import { createCategory } from "../../controllers/category/createCategory";
const categoryRouter = express.Router();
categoryRouter.post("/", createCategory);

export { categoryRouter };
