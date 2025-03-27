const express = require("express");
const app = express();

const normalMidlware = (req, res, next) => {
  console.log(`Request made to : ${req.url}`);

  next();
};

const checkAuth = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    const error = new Error("Authorization required");
    next(error);
  }
  next();
};

const handleErrorMiddleware = (err, req, res, next) => {
  console.log(err);

  if (err.message === "Authorization required") {
    return res.status(401).json({ message: "Unauthorized: " + err.message });
  }

  res.status(500).json({ message: "Something went wrong!" });
};

app.use(normalMidlware);

app.use(checkAuth);

app.use(handleErrorMiddleware);

// A protected route
app.get("/profile", (req, res) => {
  // Simulate user data fetching (could be from a DB)
  const user = { id: 1, name: "John Doe" };
  res.json(user);
});

app.listen(3008, () => {
  console.log("Server running on port 3008");
});
