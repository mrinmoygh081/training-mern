const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to HomePage");
});

// mongoose.connect(process.env.MONGO_URI).then(() => {
//   console.log("Database connection established");
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log("listening on port " + PORT);
// });

// Connect to DB and start server
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server running on port " + PORT);
    });
  })
  .catch((err) => {
    console.error(err);
  });
