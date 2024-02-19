import mongoose from "mongoose";

const Students_Schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  father_name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  roll_no: {
    type: Number,
    required: true,
    unique: true,
  },
  field_of_study: {
    type: String,
    required: true,
  },
  last_institute_attended: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: true,
    unique:true
  },
  phone_no: {
    type: String,
    required: true,
    unique:true
  },
  blood_group: {
    type: String,
    required: false,
  },
});

const Students = mongoose.model("Students", Students_Schema);

export default Students;
