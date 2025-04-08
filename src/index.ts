import express, { Request, Response } from "express";
import { connectDb } from "./utils/connection";
import foodRouter from "./routes/food/Food";
import { categoryRouter } from "./routes/category/createCategory";
import cors from "cors";
const port = 8000;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/foods", foodRouter);

app.use("/api/v1/categories", categoryRouter);

app.listen(port, async () => {
  await connectDb();
  console.log("Connected to MongoDB");
  console.log(`Server is running on port ${port}`);
});
