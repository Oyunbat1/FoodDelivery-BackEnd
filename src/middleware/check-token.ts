import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
export const checkToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const ACCESS_TOKEN_SECRET_KEY = "Oyunbat1216$";
  try {
    if (!req.headers["authorization"]) {
      res.status(401).json({ success: false, msg: "Unauthorization" });
      return;
    }
    const [_, token] = req.headers["authorization"].split(" ");
    const decode = jwt.verify(token, ACCESS_TOKEN_SECRET_KEY);
    if (typeof decode !== "string" && decode.user?.role !== "ADMIN") {
      res.status(401).json({ success: false, error: "Unauthorization" });
    }

    next();
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    res.status(401).json({ success: false, err: errorMessage });
  }
};
