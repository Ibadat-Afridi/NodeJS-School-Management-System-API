import express from "express";
import database1 from "./databases/Database1.js";
import router from "./routes/Studentroutes.js";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "Welcome To Our School Management System.....How Can We Help You?...."
  );
});

app.use("/students", router);

app.listen(port, () => {
  console.log(`School Management System Listening At ${port}`);
});
