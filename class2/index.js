const express = require("express");
const app = express();

// loading config from the env file
require("dotenv").config();
const PORT = process.env.PORT || 5001;

//  middleware to parse json request body
app.use(express.json());

// import routes for the Todo api
const todoRoutes = require("./routes/todo");

// mount the todo API routes (mount means Add)
app.use("/api/v1", todoRoutes);

// start server
app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});

// connecting the database
const dbConnect = require("./config/database");
dbConnect();

// default route
app.get("/", (request, response) => {
  response.send("This is Homepage");
});
