import { Request, Response } from "express";
import nodemailer from "nodemailer";
export const resetRequest = async (req: Request, res: Response) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "ormanaiartmongolia@gmail.com",
      pass: "roaahjaypaftwrxh ",
    },
  });
  const info = await transporter.sendMail({
    from: '"Пасспортоо сэргээгээрэй залуу" <maddison53@ethereal.email>',
    to: "oyunbat9958@gmail.com",
    subject: " Пасспорт сэргээх✔",
    text: "Пасспортоо сэргээхийн тулд та доох линкен дээр дарна уу...",
    html: `<h1 style="color:red">Пасспорт сэргээх</h1> <p>Энд дарах <a href="http://localhost:3000/">энд</a>Пасспорт сэргээх</p>`,
  });
  console.log(info);
  res.send({ message: "Mail sent" });
};
//  //ингэснээх миний майлыг ашиглах боломжтой болж байна.
//
