import { Request,Response } from "express";
import { FoodModel } from "../schema/Food";

export const createFood = async(req:Request ,res:Response) => {
const created = await FoodModel.create(req.body);
res.json({
    success: true,food: created
})}

