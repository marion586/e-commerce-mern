const express = require("express");
const app = express();

// Middleware for user authentication

const authenticateUser = (req, res, next) => {
  const token = req.headers["authorization"];
  console.log("token", token);
  if (!token) {
    return res
      .status(401)
      .json({ message: "No token provided. Please log in." });
  }
  if (token !== "valid-token") {
    console.log("invalid");
    return res.status(403).json({
      message: "Invalid token. acees denied",
    });
  }

  req.user = { id: 1, name: "marion menye" };

  next();
};

//Protected route that requires authentication

app.get("/profile", authenticateUser, (req, res) => {
  res.json({
    message: `Welcom ${req.user.name}`,
    userId: req.user.id,
  });
});

// Start the server
app.listen(3008, () => {
  console.log("Server running on port 3008");
});
