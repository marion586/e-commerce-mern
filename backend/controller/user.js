const express = require("express");
const path = require("path");
const router = express.Router();
const User = require("../model/user");
const fs = require("fs");
const jwt = require("jsonwebtoken");

const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const sendMail = require("../utils/sendMail");
const jwtToken = require("../utils/jwtToken");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
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

  try {
    await sendMail({
      email: user.email,
      subject: "Activate your account",
      text: `Hello ${user.name} , please click on the link to activate your account: ${activationUrl}`,
    });

    res.status(201).json({
      success: true,
      message: `Please chech your email: - ${user.email} to activate your email`,
    });
  } catch (error) {
    console.log(error);
    return next(new ErrorHandler(error.message, 500));
  }
});
//activate user
router.post(
  "/activation",
  catchAsyncErrors(async (req, res, next) => {
    try {
      console.log(req.body);
      const { activation_token } = req.body;
      console.log(req.body.activation_token);
      const newUser = jwt.verify(
        activation_token,
        process.env.ACTIVATION_SECRET
      );
      if (!newUser) {
        return next(new ErrorHandler("Invalid token", 400));
      }

      console.log("Decoded User Data:", newUser);
      console.log(newUser);
      const { name, email, avatar, password } = newUser;
      let user = await User.findOne({ email });

      if (user) {
        return next(new ErrorHandler("User already exists", 500));
      }
      user = await User.create({
        name,
        email,
        avatar,
        password,
      });

      jwtToken.sendToken(user, 201, res);
    } catch (error) {
      next(error);
    }
  })
);

//login user

router.post(
  "/login-user",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return newt(new ErrorHandler("Please provide the all fields!", 400));
      }

      const user = await User.findOne({ email }).select("+password");
      if (!user) {
        return next(new ErrorHandler("User doesn't exists!", 400));
      }

      const isPasswordValid = await user.comparePassword(password);

      if (!isPasswordValid) {
        return next(
          new ErrorHandler("Please Provide the correct information", 400)
        );
      }
      jwtToken.sendToken(user, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

const createActivationToken = (user) => {
  return jwt.sign(user, process.env.ACTIVATION_SECRET, {
    expiresIn: "5m",
  });
};
module.exports = router;
