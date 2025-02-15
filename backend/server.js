import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js"
import colors from "colors";

dotenv.config();

connectDB();

const app=express();

app.get("/",(req,res)=>{
    res.send("Api is running...")
})


const PORT=process.env.PORT|| 5000;

app.listen(PORT,console.log(`Server running  in ${process.env.NODE_ENV} mode on Port ${PORT}`.yellow.bold)); 