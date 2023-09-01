import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import userRouter from './routes/users.js';
import movieRouter from "./routes/movies.js";
import listRouter from "./routes/list.js";

const app = express();

dotenv.config();

app.use(express.json());



mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));




  app.use('/api/auth', authRouter);
  app.use('/api/user', userRouter);
  app.use('/api/movie', movieRouter);
  app.use('/api/list', listRouter);
  


app.listen(8000, () => {
  console.log("Backend Server is running....");
});
