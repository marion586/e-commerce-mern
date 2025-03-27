const express = require("express");
const app = express();

//Normal Middleware to simulate an error

app.use((req, res, next) => {
  console.log(`Request made to : ${req.url}`);

  const error = new Error("Something went wrong");

  next(error);
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: "Internal Server Error" });
});

app.listen(3008, () => {
  console.log("Server running on port 3008");
});
