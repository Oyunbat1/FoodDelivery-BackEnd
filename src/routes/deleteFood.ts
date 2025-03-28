import express from 'express';
import { DeleteFood } from '../controllers/deleteFood';
const deletefoodRouter = express.Router();
deletefoodRouter.delete("/:id", DeleteFood)
export default deletefoodRouter;