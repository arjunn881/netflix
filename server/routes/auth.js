import express from "express";
import User from "../models/User.js";
import CryptoJS from "crypto-js";

const router = express.Router();

//Register

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });

  try {
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", (req, res) => {
  res.json("working...");
});

export default router;
