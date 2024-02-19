import express from "express";
import Teachers from "../models/Teachers.js";

const router2 = express.Router();

router2.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newTeacher = await Teachers(data);
    const response = await newTeacher.save();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router2;
