import { Request, Response } from "express";
import { User } from "../schema/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const SALT_ROUND = 12;
const ACCESS_TOKEN_SECRET_KEY = "Oyunbat1216$";
export const register = async (req: Request, res: Response) => {
  try {
    const { password } = req.body;
    const salt = bcrypt.genSaltSync(SALT_ROUND);
    const hash = bcrypt.hashSync(password, salt);
    const user = await User.create({ ...req.body, password: hash });
    res.json({ success: true, user });
  } catch (err) {
    if ((err as any).code == 11000) {
      res.status(400).json({ success: false, err: "User exist" });
      return;
    }
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  if (!user) {
    res.status(400).json({ success: false, error: "User not found" });
    return;
  } else {
    console.log("user is found", user);
  }
  const isCompare = bcrypt.compareSync(password, user.password);

  if (!isCompare) {
    res
      .status(401)
      .json({ success: false, error: "password or username is wrong" });
    return;
  }
  const token = jwt.sign({ user }, ACCESS_TOKEN_SECRET_KEY, {
    expiresIn: "1h",
  });
  res.status(200).json({ success: true, token });
};
