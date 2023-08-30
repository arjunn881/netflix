import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";

const app = express();

dotenv.config();



mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));

  app.use(express.json());

  app.use('api/auth',authRouter)

app.listen(8000, () => {
  console.log("Backend Server is running....");
});
