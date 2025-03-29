require("./config")();
const app = require("./app");
const connectDatabase = require("./db/Database");

//Handling uncaught error

process.on("uncaughtException", (err) => {
  console.log("error :", err.message);
  console.log(`Shutting down the server for handling uncaught exception`);
  process.exit(1);
});

// create server

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on Port ${process.env.PORT}`);
});
//connect DB

connectDatabase();

//unhandled promise rejection

process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server fo ${err.message}`);
  console.log(`Shutting down the server for unhandle prmise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
