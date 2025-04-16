import { Router } from "express";
import { register } from "../controllers/auth";
import { login } from "../controllers/auth";
export const authRouter = Router();
authRouter.post("/register", register).post("/login", login);
