import express from "express";
// import { Students } from "../models/Students";
import Students from "../models/Students.js";

const router1 = express.Router();

router1.post("/", async (req, res) => {
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

router1.get("/", async (req, res) => {
  try {
    const data = await Students.find();
    console.log("Student Data Fetched Successfully");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router1.put("/:id", async (req, res) => {
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

router1.delete("/:id", async (req, res) => {
  try {
    const studentId = req.params.id;
    const response = await Students.findByIdAndDelete(studentId);
    if (!studentId) {
      res.status(404).json({ error: "Student Not Found" });
    }
    console.log("Student Record Deleted");
    res
      .status(200)
      .json("Successfully Student Record Deleted From MongoDB DataBase");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router1;
