import express from "express";
import Courses from "../models/Courses.js";

const router3 = express.Router();

router3.post("", async (req, res) => {
  try {
    const data = req.body;
    const newCourse = await Courses(data);
    const response = await newCourse.save();
    console.log("Course Added");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router3;
