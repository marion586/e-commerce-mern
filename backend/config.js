module.exports = () => {
  if (process.env.NODE_ENV == "PRODUCTION") {
    require("dotenv").config({
      path: "backend/config/.env",
    });
  }

  if (process.env.NODE_ENV !== "PRODUCTION") {
    console.log("Node ENV d", process.env.NODE_ENV);
    require("dotenv").config({
      path: "config/.env",
    });
  }
};
