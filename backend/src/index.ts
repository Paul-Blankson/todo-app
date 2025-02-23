import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Server is up and running" });
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
