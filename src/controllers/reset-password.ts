import { Request, Response } from "express";
import nodemailer from "nodemailer";
import { User } from "../schema/User";
import jwt from "jsonwebtoken";
export const resetRequest = async (req: Request, res: Response) => {
  const ACCESS_TOKEN_SECRET_KEY = "Oyunbat1216$";
  const { userEmail } = req.body;

  const user = await User.findOne({ email: userEmail });

  if (!user) {
    res.send({ message: "User not found" });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "ormanaiartmongolia@gmail.com",
      pass: "roaahjaypaftwrxh ",
    },
  });
  const token = jwt.sign({ user }, ACCESS_TOKEN_SECRET_KEY, {
    expiresIn: "1h",
  });
  const info = await transporter.sendMail({
    from: '"Пасспортоо сэргээгээрэй залуу" <maddison53@ethereal.email>',
    to: "oyunbat9958@gmail.com",
    subject: " Пасспорт сэргээх✔",
    text: "Пасспортоо сэргээхийн тулд та доох линкен дээр дарна уу...",
    html: `<h1 style="color:red">Пасспорт сэргээх</h1> 
    <p>Энд дарах <a href="http://localhost:3000/reset-password?token=${token}">энд</a>Пасспорт сэргээх</p>`,
  });
  console.log(info);
  res.send({ message: "Mail sent" });
};
