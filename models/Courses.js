import mongoose from "mongoose";

const Courses_Schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: Array,
    required: false,
    default: [],
  },
  dicount: {
    type: String,
    required: false,
    default: 0,
  },
  education: {
    type: String,
    required: true,
  },
  no_of_courses: {
    type: Number,
    required: false,
    default: 1,
  },
  seats_available: {
    type: Number,
    required: false,
    default: 5,
  },
  online_class: {
    type: Boolean,
    required: false,
  },
  attendence: {
    type: Boolean,
    required: true,
  },
});

const Courses = mongoose.model("Courses", Courses_Schema);

export default Courses;

/*


*/
