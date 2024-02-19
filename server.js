import express from "express";
import database1 from "./databases/Database1.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "Welcome To Our School Management System.....How Can We Help You?...."
  );
});

app.listen(port, () => {
  console.log(`School Management System Listening At ${port}`);
});
