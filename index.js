const mongoose = require("mongoose");
const express = require("express");
const app = express();

const Database = "mongodb://mymongo:27017";
mongoose
  .connect(Database, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(" MongoDB not connected", err));

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the home page",
  });
});

app.get("/login", (req, res) => {
  res.json({
    message: "This is the login page",
  });
});

app.get("/logout", (req, res) => {
  res.json({
    message: "This is the logout page",
  });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
