import express  from "express";
import { updateFoods } from "../controllers/updateFood";
const updateFoodRouter = express.Router();
updateFoodRouter.patch("/:id", updateFoods);
export default updateFoodRouter;