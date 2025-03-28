import express from 'express';
import { GetFood } from '../controllers/GetFood';
const getfoodRouter = express.Router();
getfoodRouter.get("/", GetFood)

export default getfoodRouter;