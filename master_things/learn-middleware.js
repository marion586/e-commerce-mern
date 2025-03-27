const express = require("express");

const app = express();

// Middleware 1: Logging middleware
app.use((req, res, next) => {
  console.log(`Request made to : ${req.url}`);
  next();
});

// Middleware 2 : Logging middleware

app.use((req, res, next) => {
  if (!req.headers["authorization"]) {
    console.log("not authorized");
    return res.status(403).send("Unauthorized");
  }

  next();
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

//error Handling middleware

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Something went wrong");
});

app.listen(3008, () => console.log("Server i running on port 3008"));
