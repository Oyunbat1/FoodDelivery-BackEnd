import { Request, Response } from "express";
import { FoodModel } from "../../schema/Food";

export const GetFood = async (req: Request, res: Response) => {
  const created = await FoodModel.find().populate("categoryId");
  res.json({ success: true, created });
};
