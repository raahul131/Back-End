const { res } = require("express");
const Todo = require("../models/Todo");

// define route handle
exports.createTodo = async (req, res) => {
  try {
    // extract title and description from the body
    const { title, description } = req.body;

    //create a new Todo object and and and and and and insert into DB
    const response = await Todo.create({ title, description });

    // send a json response with a success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created Successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: " internal server error",
      message: err.message,
    });
  }
};
