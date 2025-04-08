import express from "express";
import {
  createFood,
  GetFood,
  updateFoods,
  DeleteFood,
} from "../../controllers/food/Food";
const foodRouter = express.Router();
foodRouter
  .post("/", createFood)
  .get("/", GetFood)
  .delete("/:id", DeleteFood)
  .patch("/:id", updateFoods);

export default foodRouter;
