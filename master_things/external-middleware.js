const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const fs = require("fs");
const path = require("path");
const app = express();

// Middleware setup

app.use(express.json()); // To parse JSON request bodies
app.use(cookieParser()); // To parse cookies sent with the request
app.use(bodyParser.urlencoded({ extended: true })); // To parse URL-encoded data (like form submissions)
app.use(fileUpload({ useTempFiles: true })); // To handle file uploads

const uploadDir = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Route to handle user profile form submission
app.post("/ext/profile", (req, res) => {
  // Log incoming data
  console.log("User Profile Data:", req.body);

  // Handle file upload
  if (req.files && req.files.profileImage) {
    const profileImage = req.files.profileImage;
    const uploadPath = path.join(uploadDir, profileImage.name);
    profileImage.mv(uploadPath, (err) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.send("Profile uploaded successfully!");
    });
  } else {
    res.send("No profile image uploaded.");
  }
});

// Route to set cookies (for testing cookies in Postman)

app.post("/ext/login", (req, res) => {
  const { username } = req.body;

  res.cookie("username", username, { httpOnly: true, maxAge: 36000000 });
  res.send(`Logged in as ${username}`);
});

app.get("/ext/profile", (req, res) => {
  const username = req.cookies.username;
  if (username) {
    res.send(`Hello, ${username}! Welcome to your profile.`);
  } else {
    res.send("No username cookie found. Please log in first.");
  }
});

// Start the server
app.listen(3008, () => {
  console.log("Server running on port 3008");
});
