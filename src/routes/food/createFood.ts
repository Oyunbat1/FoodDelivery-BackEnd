import express from "express";
import { createFood } from "../../controllers/food/createFood";
const foodRouter = express.Router();
foodRouter.post("/", createFood);

export default foodRouter;
