import mongoose from "mongoose";
import moongoose from "mongoose";

const Teachers_Schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  subject_of_teaching: {
    type: String,
    required: true,
  },
  subject_speciality: {
    type: String,
    required: true,
  },
  last_institute_teached: {
    type: String,
    required: false,
  },
  currenty_teaching_in: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone_no: {
    type: String,
    required: true,
    unique: true,
  },
  citizenship: {
    type: Array,
    default: [],
    require: true,
  },
  graduaded_in: {
    type: Array,
    required: true,
    default: [],
  },
  graduaded_from: {
    type: Array,
    required: true,
    default: [],
  },
  lectures_per_day: {
    type: Number,
    required: true,
    default: 2,
  },
  lectures_per_week: {
    type: Number,
    required: true,
    default: 10,
  },
  lectures_per_month: {
    type: Number,
    required: true,
    default: 25,
  },
  blood_group: {
    type: String,
    required: false,
  },
});

const Teachers = mongoose.model("Teachers", Teachers_Schema);

export default Teachers;

