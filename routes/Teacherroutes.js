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

router2.get("/", async (req, res) => {
  try {
    const data = await Teachers.find();
    console.log("Teacher Data Fetched SuccessFully");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router2.put("/:id", async (req, res) => {
  try {
    const TeacherId = req.params.id;
    const UpdatedTeacherData = await req.body;
    const response = await Teachers.findByIdAndUpdate(
      TeacherId,
      UpdatedTeacherData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!UpdatedTeacherData) {
      res.status(404).json({ error: "Teacher Not Found" });
    }
    console.log("Teacher Data Updated Successfully");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router2.delete("/:id", async (req, res) => {
  try {
    const TeacherId = req.params.id;
    const response = await Teachers.findByIdAndDelete(TeacherId);
    if (!TeacherId) {
      res.status(404).json({ error: "Teacher Not Found" });
    }
    console.log("Teacher Record Deleted Successfully");
    res.status(200).json("Teacher Record Deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router2;
