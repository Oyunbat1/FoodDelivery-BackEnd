import express from "express";
import { getCategories } from "../../controllers/category/getCategory";

const categoryRouter = express.Router();
categoryRouter.get("/", getCategories);

export default categoryRouter;
