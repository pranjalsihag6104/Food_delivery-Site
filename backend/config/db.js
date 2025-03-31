import mongoose from "mongoose";

export const connectDB=async ()=>{
  await mongoose.connect('mongodb+srv://pranjalsihag1628:OU1eko6oXwjlqSVv@cluster0.hlksmua.mongodb.net/food-del').then(()=>console.log("DB connected"));
}