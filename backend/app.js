const express = require("express");
const error = require("./middleware/error");

const app = express();
//config

if (process.env.NODE_ENV == "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

// it-s for ErrorHandling

app.use(error);

module.exports = app;
