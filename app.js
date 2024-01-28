const express = require("express");
const app = express();
const mongoose = require("mongoose");
const AppRouter = require("./routes/AppRoutes.js");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });
const cors = require("cors");
app.use(cors());
app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", AppRouter);

const static_path = path.join(__dirname, "/public");
app.use(express.static(static_path));

app.get("/", (req, res) => {
  res.sendFile(static_path + "/index.html");
});

const PORT = process.env.PNUM || 5000;
const MONGO_DB_URI = process.env.MONGO_URL;
mongoose
  .connect(MONGO_DB_URI)
  .then(() => {
    console.log("db connected successfully");
    app.listen(PORT, () => {
      console.log("Server is running on port ", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
