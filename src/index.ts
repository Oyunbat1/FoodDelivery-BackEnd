import express, { Request, Response } from "express";
import mongoose from "mongoose"
import { FoodModel } from "./schema/Food";
const port = 3000;
const app = express();
app.use(express.json());

// Хэрэглэгчид хоол нэмэх
app.post("/food", async (req, res) => {
  try {
    const newFood = await FoodModel.create(req.body);
    res.json({ success: true, message: "Food added successfully", food: newFood });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to add food", error });
  }
});

// Хэрэглэгчийн  хоол харах
app.get("/food", async (req, res) => {
  try {
    const foods = await FoodModel.find(); 
    res.json({ success: true, foods });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error retrieving food", error });
  }
});
// Хэрэглэгчийн  хоол засах
app.patch("/food/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedFood = await FoodModel.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedFood) {
    res.status(404).json({ success: false, message: "Food not found" });
    return 
    }
    res.json({ success: true, message: "Food updated successfully", food: updatedFood });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating food", error });
  }
});

// Хэрэглэгчийн  хоол устгах
app.delete("/food/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedFood = await FoodModel.findByIdAndDelete(id);
    if (!deletedFood) {
      res.status(404).json({ success: false, message: "Food not found" });
      return
    }
    res.json({ success: true, message: "Food deleted successfully", food: deletedFood });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting food", error });
  }
});


app.listen(port, async () => {
  const connectDb = async () =>{
    try { await mongoose.connect("mongodb+srv://oyunbat9958:oyunbat9958@cluster0.lr1xave.mongodb.net/")
      console.log("Connected to MongoDB");
    }catch(err){
      console.log(err);

    }
  }
    connectDb();
    console.log(`Server is running on port ${ port}`);
});


