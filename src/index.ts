import express, { Request, Response } from "express";
import { connectDb } from "./utils/connection";
import foodRouter from "./routes/createFood";
import getfoodRouter from "./routes/getFood";
import deletefoodRouter from "./routes/deleteFood";
import updateFoodRouter from "./routes/updateFood";
const port = 3000;
const app = express();
app.use(express.json());

// Хэрэглэгч хоол нэмэх
  app.use("/addfood", foodRouter)
// Хэрэглэгчийн  хоол харах
  app.use("/getfood", getfoodRouter);
// Хэрэглэгчийн  хоол устгах
app.use("/deletefood", deletefoodRouter);
// Хэрэглэгчийн  хоол засах
app.use("/updatefood", updateFoodRouter);


app.listen(port, async () => {
  await connectDb();
  console.log("Connected to MongoDB");
    console.log(`Server is running on port ${ port}`);
});


