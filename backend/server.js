//const express  = require("express")

import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js"
import { connectDB } from "./lib/db.js";

dotenv.config(); // read content of dotenv file
 
const app = express();
//console.log(process.env.PORT);
const PORT = process.env.PORT || 5001;

//parse the content of request
app.use(express.json());
//auth
app.use("/api/auth", authRoutes)


app.listen(5001, () => {
    console.log("server is running on http://localhost:" +  PORT );
    connectDB();
});

