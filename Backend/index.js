import express from "express";
import dotenv from  "dotenv";
import mongoose from "mongoose";
dotenv.config();
import cors from "cors"; 
import signupRoute from "./route/auth.route.js";



const app=express();
app.use(cors());



const PORT=process.env.PORT ||4000;
const URI=process.env.URI;


try {
    mongoose.connect(URI);
    console.log("connect to mongodb database")
} catch (error) {
    console.log("Eroor:",error);
}

// define route 
app.use('/user',signupRoute); 

app.get("/",(req,res)=>{
    res.send("hello world");
})
app.listen(PORT,()=>{
    console.log(`server run on port ${PORT}`);
})