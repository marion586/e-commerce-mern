const express = require("express");
const error = require("./middleware/error");

const app = express();

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const user = require("./controller/user");
const cors = require("cors");
// const fileUpload = require("express-fileupload");

app.use(cors());
app.use(express.json());

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));

// app.use(fileUpload({ useTempFiles: true }));

//config

if (process.env.NODE_ENV == "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

app.use("/", express.static("../uploads"));

//rotues

app.use("/api/v2/user", user);
// it-s for ErrorHandling

app.use(error);

module.exports = app;
