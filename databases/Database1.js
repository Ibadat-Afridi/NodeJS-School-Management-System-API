import mongoose from "mongoose";

const MONGODB_URL = "mongodb://localhost:27017/school-management-system";
mongoose.connect(MONGODB_URL);

const database1 = mongoose.connection;

database1.on("connected", () => {
  console.log("MongoDB Database Connection Established Successfully ");
});

database1.on("error", () => {
  console.log("Error Occured When  Establishing MongoDB Database ");
});

database1.on("disconnected", () => {
  console.log("MongoDB Database Disconnected Successfully");
});

export default database1;
