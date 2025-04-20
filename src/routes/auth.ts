import { Router } from "express";
import { register } from "../controllers/auth";
import { login } from "../controllers/auth";
import { resetRequest, updatePassword } from "../controllers/reset-password";
import { verifyToken } from "../middleware/verify-token";
export const authRouter = Router();
authRouter
  .post("/register", register)
  .post("/login", login)
  .post("/reset-password", resetRequest)
  .post("/update-password", verifyToken, updatePassword);
