import express from "express";
// import { Students } from "../models/Students";
import Students from "../models/Students.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body;

    const newStudent = new Students(data);

    const response = await newStudent.save();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
