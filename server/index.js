import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import userRouter from './routes/users.js';
import movieRouter from "./routes/movies.js";
import listRouter from "./routes/list.js";

import cors from 'cors';



const app = express();

dotenv.config();

app.use(express.json());

app.use(cors());



mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));

  app.use('/api/auth', authRouter);
  app.use('/api/users', userRouter);
  app.use('/api/movies', movieRouter);
  app.use('/api/lists', listRouter);
  


app.listen(8800, () => {
  
  console.log("Backend Server is running....");
});
