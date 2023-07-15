const express = require("express");

const app = express();

// used to parse req.body in express in case of PUT and POST
const bodyParser = require("body-parser");

// parsing the JSON data &  add it to the request.Body object
app.use(bodyParser.json());

const PORT = 5001;
app.listen(5001, () => {
  console.log("Server running at port number:" + 5001);
});

// GET request to the server
app.get("/", (request, response) => {
  response.send("Namaste EveryOne!!");
});

// POST request to the server
app.post("/api/cars", (request, response) => {
  const { name, brand } = request.body;
  console.log(name);
  console.log(brand);
  response.send("Cars Submitted successfully");
});

// connecting the mongodb with express js
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/myDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("connection Successful");
  })
  .catch((error) => {
    console.log("Recieved an error");
  });
