import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();
import { UserRouter } from "./routes/user_rt.js";
//const express = require("express");
//.env is used to write url and keys

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/auth", UserRouter);

// Define a route for the root path
app.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});

async function dbconnect() {
  mongoose
    .connect(
      "mongodb://preethamvenkatram:Preeth0987123@podify1.t5nxief.mongodb.net/?retryWrites=true&w=majority&appName=podify1"
    )
    .then(() => console.log("Database Connected"))
    .catch((error) => {
      console.log("error", error);
    });
  console.log("db connection successful");
}

app.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});
app.listen(process.env.PORT, () => {
  console.log("Server is running in ", process.env.PORT);
  dbconnect();
});
