//config

const express = require("express");
const error = require("./middleware/error");

const app = express();

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const user = require("./controller/user");
const cors = require("cors");
// const fileUpload = require("express-fileupload");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));

// app.use(fileUpload({ useTempFiles: true }));

app.use("/", express.static("../uploads"));

//rotues

app.use("/api/v2/user", user);
// it-s for ErrorHandling

app.use(error);

module.exports = app;
