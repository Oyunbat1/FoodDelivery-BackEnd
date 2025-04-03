import express, { Request, Response } from "express";
import { connectDb } from "./utils/connection";
import foodRouter from "./routes/food/createFood";
import getfoodRouter from "./routes/food/getFood";
import deletefoodRouter from "./routes/food/deleteFood";
import updateFoodRouter from "./routes/food/updateFood";
import { categoryRouter } from "./routes/category/createCategory";
import getCategoryRouter from "./routes/category/getCategory";
import updateCategoryRouter from "./routes/category/updateCategory";
import deleteCategoryRouter from "./routes/category/deleteCategory";

const port = 3000;
const app = express();
app.use(express.json());

// Хэрэглэгч хоол нэмэх
app.use("/addfood", foodRouter);
// Хэрэглэгчийн  хоол харах
app.use("/getfood", getfoodRouter);
// Хэрэглэгчийн  хоол устгах
app.use("/deletefood", deletefoodRouter);
// Хэрэглэгчийн  хоол засах
app.use("/updatefood", updateFoodRouter);
// Хэрэглэгчийн хоолний төрөл нэмэх
app.use("/addcategory", categoryRouter);
// Хэрэглэгчийн хоолний төрөл харах
app.use("/getcategory", getCategoryRouter);
// Хэрэглэгчийн хоолний төрөл засах
app.use("/updatecategory", updateCategoryRouter);
// Хэрэглэгчийн хоолний төрөл устгах
app.use("/deletecategory", deleteCategoryRouter);

app.listen(port, async () => {
  await connectDb();
  console.log("Connected to MongoDB");
  console.log(`Server is running on port ${port}`);
});
