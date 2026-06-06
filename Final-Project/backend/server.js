/** @type {import('express').Express} */

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectdb = require("./config/db");
const courseRoutes = require("./routes/courseroutes");


dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());
connectdb();

app.get("/", (req, res) => {
  res.send("api is working");
});

app.use("/courses", courseRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});

