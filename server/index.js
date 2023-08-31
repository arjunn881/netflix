import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import userRouter from './routes/users.js';

const app = express();

dotenv.config();

app.use(express.json());



mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));




  app.use('/api/auth', authRouter);
  app.use('/api/user', userRouter)

app.listen(8000, () => {
  console.log("Backend Server is running....");
});
