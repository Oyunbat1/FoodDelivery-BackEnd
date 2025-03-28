import mongoose from "mongoose";
export  const connectDb = async () =>{
    try { await mongoose.connect("mongodb+srv://oyunbat9958:oyunbat9958@cluster0.lr1xave.mongodb.net/")
      console.log("Connected to MongoDB");
    }catch(err){
      console.log(err);

    }
  }
