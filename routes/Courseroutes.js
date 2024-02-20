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

router3.get("", async (req, res) => {
  try {
    const response = await Courses.find();
    console.log("Fetched Courses Records");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router3.put("/:id", async (req, res) => {
  try {
    const CourseId = req.params.id;
    const UpdatedCourseData = req.body;
    const response = await Courses.findByIdAndUpdate(
      CourseId,
      UpdatedCourseData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!CourseId) {
      res.status(404).json({ error: "Course Not Found" });
    }
    console.log("Course Data Updated Successfully");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router3;
