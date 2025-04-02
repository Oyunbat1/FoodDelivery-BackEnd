import express from "express";
import { DeleteFood } from "../../controllers/food/deleteFood";
const deletefoodRouter = express.Router();
deletefoodRouter.delete("/:id", DeleteFood);
export default deletefoodRouter;
