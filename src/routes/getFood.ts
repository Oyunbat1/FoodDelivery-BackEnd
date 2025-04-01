import express from "express";
import { GetFood } from "../controllers/getFood";
const getfoodRouter = express.Router();
getfoodRouter.get("/", GetFood);

export default getfoodRouter;
