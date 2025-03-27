import express, { Request, Response } from "express";
import mongoose from "mongoose"
import { FoodModel } from "./schema/Food";
const port = 3000;
const app = express();
app.use(express.json());
const users = [{
id: 1,
username: "John",
lastname : "David"
},{
id:2,
username: "Kevin",
lastname: "Nick"
}]

// Хэрэглэгч харах 
app.get("/users", (_req: Request, res: Response) => {
    res.json({success: true, users}); 
});

// Нэг хэрэглэгч харах specific
app.get("/users/:id", (req, res) => {
  const {params } = req;
  const user = users.filter((user) => (user.id === Number(params.id)))
  res.json({success: true , user}); 
});
// Нэг хэрэглэгчийн дата өөрчлөх
app.put("/users/:id", (req, res) => {
  const {id} = req.params;
  users.filter((user,index) => {
    if(user.id === Number(id)){
    const updatedUser = {...user, ...req.body};
      users[index] = updatedUser;
    }
  });
  res.json({success: true}); 
});

// Хэрэглэгчид хоол нэмэх
app.post("/users/food", async (req, res) => {
  try {
    const newFood = await FoodModel.create(req.body);
    res.json({ success: true, message: "Food added successfully", food: newFood });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to add food", error });
  }
});

// Хэрэглэгчийн  хоол харах
app.get("/users/food", async (req, res) => {
  try {
    const foods = await FoodModel.find(); 
    res.json({ success: true, foods });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error retrieving food", error });
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
