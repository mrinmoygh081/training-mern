const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// Router imports
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

app.get("/", (req, res) => {
  res.send("Welcome to HomePage");
});

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors("*"));
app.use(cookieParser());

// Routes middleware
app.use("/product", productRoutes);
app.use("/user", userRoutes);

// Connect to DB and start server
// const PORT = 4000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server running on port " + process.env.PORT);
    });
  })
  .catch((err) => {
    console.error(err);
  });
