import { Router } from "express";
import { register } from "../controllers/auth";
import { login } from "../controllers/auth";
import { resetRequest } from "../controllers/reset-password";
export const authRouter = Router();
authRouter
  .post("/register", register)
  .post("/login", login)
  .post("/reset-password", resetRequest);
