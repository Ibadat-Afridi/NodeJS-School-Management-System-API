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

router.get("/", async (req, res) => {
  try {
    const data = await Students.find();
    console.log("Student Data Fetched Successfully");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const studentId = req.params.id;
    const UpdatedStudentData = await req.body;
    const response = await Students.findByIdAndUpdate(
      studentId,
      UpdatedStudentData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!UpdatedStudentData) {
      res.status(404).json({ error: "Student Not Found" });
    }
    console.log("Student Data Updated Successfully");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
