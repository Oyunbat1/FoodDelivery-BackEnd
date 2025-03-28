import express from 'express';
import { createFood } from '../controllers/createFood';
const foodRouter = express.Router();
foodRouter.post("/", createFood)

export default foodRouter;