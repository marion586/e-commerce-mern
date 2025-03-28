const express = require("express");
const path = require("path");
const router = express.Router();
const User = require("../model/user");
const fs = require("fs");
const jwt = require("jsonwebtoken");

const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
router.post("/create-user", upload.single("file"), async (req, res, next) => {
  const { name, email, password } = req.body;
  const userEmail = await User.findOne({ email });

  if (userEmail) {
    const filename = req.file.filename;
    const filePath = `../uploads/${filename}`;
    fs.unlink(filePath, (err) => {
      if (err) {
        console.log("dddddd", err);
        res.status(500).json({ message: "Error deleting file" });
      } else {
        console.log("no error");
        // res.json({
        //   message: ",
        // });
        console.log("File deleted successully");
      }
    });
    const error = new ErrorHandler("User already exists", 400);
    return next(error);
  }
  const filename = req.file.filename;
  const fileUrl = path.join(filename);

  const user = {
    name,
    email,
    password,
    avatar: { public_id: fileUrl, url: fileUrl },
  };

  const activationToken = createActivationToken(user);

  const activationUrl = `http://localhost:3000/activation/${activationToken}
`;
});
const createActivationToken = (user) => {
  return jwt.sign(user, process.env.ACTIVATION_SECRET, {
    expiresIn: "5m",
  });
};
module.exports = router;
