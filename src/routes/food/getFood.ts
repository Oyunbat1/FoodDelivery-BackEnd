import express from "express";
import { GetFood } from "../../controllers/food/getFood";
const getfoodRouter = express.Router();
getfoodRouter.get("/", GetFood);

export default getfoodRouter;
