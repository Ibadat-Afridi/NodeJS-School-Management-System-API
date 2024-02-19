import express from "express";
import database1 from "./databases/Database1.js";
import router1 from "./routes/Studentroutes.js";
import bodyParser from "body-parser";
import router2 from "./routes/Teacherroutes.js";
const app = express();
app.use(bodyParser.json());
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "Welcome To Our School Management System.....How Can We Help You?...."
  );
});

app.use("/students", router1);
app.use("/teachers", router2);

app.listen(port, () => {
  console.log(`School Management System Listening At ${port}`);
});
